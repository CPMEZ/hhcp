import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewersPage } from './reviewers';

@NgModule({
  declarations: [
    ReviewersPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewersPage),
  ],
})
export class ReviewersPageModule {}
