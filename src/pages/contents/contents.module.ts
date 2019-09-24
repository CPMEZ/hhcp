import { NgModule } from '@angular/core';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentsPage } from './contents';

@NgModule({
  declarations: [
    ContentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentsPage),
  ],
})
export class ContentsPageModule {}
