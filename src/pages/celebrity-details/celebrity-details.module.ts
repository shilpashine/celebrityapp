import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebrityDetailsPage } from './celebrity-details';

@NgModule({
  declarations: [
    CelebrityDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebrityDetailsPage),
  ],
})
export class CelebrityDetailsPageModule {}
