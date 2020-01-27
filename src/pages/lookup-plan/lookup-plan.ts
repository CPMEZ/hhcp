import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { MasterPlansProvider } from '../../providers/master-plans/master-plans';
import { HelpPage } from '../help/help';
import { PersonalPlansProvider } from '../../providers/personal-plans/personal-plans';
import { PreviewPage } from '../preview/preview';

const ACT_ID = "assessment";

@IonicPage()
@Component({
  selector: 'page-lookup-plan',
  templateUrl: 'lookup-plan.html',
})
export class LookupPlanPage {

  types: string;
  type: string;
  searchName: string;
  searchTerm: string;
  searchTitle: string;
  target: any;
  itemsList: any;
  fromPage: string;
  searchingMaster: boolean = true;
  includeACT: boolean = true;

  constructor(public navCtrl: NavController,
    private lc: LoadingController,
    public navParams: NavParams,
    public MPP: MasterPlansProvider,
    public PPP: PersonalPlansProvider) {
    this.types = this.navParams.get('types');
    this.type = this.navParams.get('type');
    this.searchTerm = this.navParams.get('searchTerm');
    this.searchName = this.navParams.get('searchName');
    this.fromPage = this.navParams.get('fromPage');
    this.target = this.navParams.get('target');  // plan we're merging into
    this.searchTitle = "Searching for " + this.searchName + " to be added to " + this.target["name"];
    if (this.type === 'condition'
      || this.type === 'discipline') {
      this.searchingMaster = true;
      this.includeACT = !(this.target.problems && this.target.problems.length > 0)
    } else {
      this.searchingMaster = false;
      this.includeACT = false;
    }
  }

  ionViewDidEnter() {
    if (this.searchingMaster) {
      this.getMasterList();
    } else {
      this.getPersonalList();
    }
  }

  getList() {
    if (this.searchingMaster) {
      this.getMasterList();
    } else {
      this.getPersonalList();
    } 
  }

  getMasterList() {
    let loading = this.lc.create({
      content: 'Getting the list...'
    });
    loading.present();
    this.MPP.getMaster(this.types, this.searchTerm)
      .then((data) => {
        loading.dismiss();
        const d = JSON.parse(data);
        this.itemsList = d[this.types];
      });
  }

  getPersonalList() {
    // console.log('getPersonalList', this.PPP.listPlans());
    this.itemsList = this.PPP.listPlans();
  }

  choose(which) {
    if (this.searchingMaster) {
      this.getMaster(which);
    } else {
      this.getPersonal(which);
    }
  }

  getMaster(which: string) {
    // get the selected content, 
    // go to preview/select page
    // console.log('getMaster', which);
    let selectedPlan;
    let actPlan;
    this.MPP.getMaster(which["file"])
      .then((data) => {
        selectedPlan = JSON.parse(data);
        selectedPlan = selectedPlan[this.type];
        console.log('getMaster', selectedPlan);
        if (this.includeACT) {
          // if requested to include ACT,
          // get ACT and merge it into the selected master 
          // before presenting the preview page
          this.MPP.getMaster(ACT_ID)
            .then((data) => {
              actPlan = JSON.parse(data);
              // console.log('getMaster-ACT_ID1', actPlan );
              actPlan = actPlan["condition"];  // HARD-CODED TYPE
              // console.log('getMaster-ACT_ID2', actPlan);
              this.PPP.mergePlans(selectedPlan, actPlan);
              // console.log('getMaster-ACT_ID3', selectedPlan);
              // nav to the preview page
              this.navCtrl.push(PreviewPage, {
                source: selectedPlan,
                target: this.target,
                fromPage: this.fromPage,
                type: this.type
              });
            });
        } else {
          // nav to the preview page
          this.navCtrl.push(PreviewPage, {
            source: selectedPlan,
            target: this.target,
            fromPage: this.fromPage,
            type: this.type
          });
        }
      })


  }

  getPersonal(which: string) {
    // get the selected content, 
    // go to preview/select page
    // console.log('getPersonal', which);
    // nav to the preview page
    this.navCtrl.push(PreviewPage, {
      source: which,
      target: this.target,
      fromPage: this.fromPage,
      type: this.type
    });
  }


  help() {
    this.navCtrl.push(HelpPage);
  }
}
