import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { EmailComposer } from '@ionic-native/email-composer';
import { Toast } from '@ionic-native/toast';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { Clipboard } from '@ionic-native/clipboard';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { Network } from '@ionic-native/network';
import { Printer } from '@ionic-native/printer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DragulaModule } from 'ng2-dragula';

import { MyApp } from './app.component';

import { MasterPlansProvider } from '../providers/master-plans/master-plans';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { CPAPI } from '../providers/cpapi/cpapi';
import { PersonalPlansProvider } from '../providers/personal-plans/personal-plans';
import { LocalStoreProvider } from '../providers/local-store/local-store';
import { CacheProvider } from '../providers/cache/cache';
import { ConnectionProvider } from '../providers/connection/connection';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { CarePlanPage } from '../pages/careplan/careplan';
import { EditPlanPage } from '../pages/edit-plan/edit-plan';
import { ContentsPage } from '../pages/contents/contents';
import { AddPlanPage } from '../pages/add-plan/add-plan';
import { AddProblemPage } from '../pages/add-problem/add-problem';
import { AddGoalPage } from '../pages/add-goal/add-goal';
import { AddInterventionPage } from '../pages/add-intervention/add-intervention';
import { EditProblemPage } from '../pages/edit-problem/edit-problem';
import { EditGoalPage } from '../pages/edit-goal/edit-goal';
import { EditInterventionPage } from '../pages/edit-intervention/edit-intervention';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { LookupPage } from '../pages/lookup/lookup';
import { LookupPlanPage } from '../pages/lookup-plan/lookup-plan';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { TextPlanPage } from '../pages/text-plan/text-plan';
import { SubselectPage } from '../pages/subselect/subselect';
import { PreviewPage } from '../pages/preview/preview';
import { PlanMenuPage } from '../pages/plan-menu/plan-menu';
import { TopicMenuPage } from '../pages/topic-menu/topic-menu';
import { SamplePage } from '../pages/sample/sample';
import { SampleDetailPage } from '../pages/sample-detail/sample-detail';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    CarePlanPage,
    ContentsPage,
    AddPlanPage,
    AddProblemPage,
    AddGoalPage,
    AddInterventionPage,
    LookupPage,
    LookupPlanPage,
    EditPlanPage,
    EditProblemPage,
    EditGoalPage,
    EditInterventionPage,
    TextPlanPage,
    HelpPage,
    TermsPage,
    SubscribePage,
    SubselectPage,
    PreviewPage,
    PlanMenuPage,
    TopicMenuPage,
    SamplePage,
    SampleDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: "ios-transition"
    }),
    IonicStorageModule.forRoot(),
    DragulaModule.forRoot()  // ngDragula documentation says this way
    // DragulaModule // example at devdactic says this way--prolly cause example single page
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    CarePlanPage,
    ContentsPage,
    AddPlanPage,
    AddProblemPage,
    AddGoalPage,
    AddInterventionPage,
    LookupPage,    
    LookupPlanPage,    
    EditPlanPage,
    EditProblemPage,
    EditGoalPage,
    EditInterventionPage,
    TextPlanPage,
    HelpPage,
    TermsPage,
    SubscribePage,
    SubselectPage,
    PreviewPage,
    PlanMenuPage,
    TopicMenuPage,
    SamplePage,
    SampleDetailPage
  ],
  providers: [
    AuthenticationProvider,
    CPAPI,
    LocalStoreProvider,
    MasterPlansProvider,
    PersonalPlansProvider,
    ConnectionProvider,
    CacheProvider,
    StatusBar,
    File,
    EmailComposer,
    DocumentViewer,
    Toast,
    Network,
    Clipboard,
    InAppPurchase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Printer,
    SplashScreen
    // Storage,
  ]
})
export class AppModule {}
