import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SampleDetailPage } from '../sample-detail/sample-detail';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SubselectPage } from '../subselect/subselect';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {

  itemsList = [
    {"text": "Assessment & Critical Thinking"},
    {"text": "Alzheimer's & Dementia Care"},
    {"text": "Behavioral Care"},
    {"text": "Bed-chair Bound"},
    {"text": "Cancer Care"},
    {"text": "Cardiac & Circulatory Care"},
    {"text": "Caregiver Support"},
    {"text": "Constipation Care"},
    {"text": "Endocrine & Diabetes Care"},
    {"text": "End of Life Care"},
    {"text": "Enteral & PN Care"},
    {"text": "Fall Risk & Prevention"},
    {"text": "Infection & Immunocompromised"},
    {"text": "Infusion"},
    {"text": "Injections & Labs"},
    {"text": "Hepatobiliary & Pancreatic Care"},
    {"text": "Med Management Care"},
    {"text": "Musculoskeletal Care"},
    {"text": "Neuro & Stroke Care"},
    {"text": "Nutrition & Dietary"},
    {"text": "Older Adult Care"},
    {"text": "Ostomy Care"},
    {"text": "Oxygen Care"},
    {"text": "Pain Management"},
    {"text": "Pediatric Care"},
    {"text": "Renal Care"},
    {"text": "Respiratory & COPD Care"},
    {"text": "Standard Precautions"},
    {"text": "Surgical Care"},
    {"text": "Urinary Catheter Care"},
    {"text": "Wound Care"},
    {"text": "Aide"},
    {"text": "Occupational Therapy"},
    {"text": "Physical Therapy"},
    {"text": "Speech-language Pathologist"},
    {"text": "Medical Social Worker"}
]

  constructor(private navCtrl: NavController, 
    public auth: AuthenticationProvider) {
  }

  showAlz() {
    this.navCtrl.push(SampleDetailPage);
  }

  subscribe() {
    this.navCtrl.push(SubselectPage);
  }

  help() {
    this.navCtrl.push(HelpPage);
  }

}
