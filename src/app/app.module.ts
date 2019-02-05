import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { ListPage } from '../pages/list/list';
import { HometabsPage } from '../pages/hometabs/hometabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CelebrityListPage } from '../pages/celebrity-list/celebrity-list';
import { CelebrityDetailsPage } from '../pages/celebrity-details/celebrity-details';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { EventListPage } from '../pages/event-list/event-list';
import { NotificationPage } from '../pages/notification/notification';
import { ForgotpsPage } from '../pages/forgotps/forgotps';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {TimeAgoPipe} from 'time-ago-pipe';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ProgressBarModule} from "angular-progress-bar";
import { StarRatingModule } from 'ionic3-star-rating';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HometabsPage,
    LoginPage,
    RegisterPage,
    CelebrityListPage,
    CelebrityDetailsPage,
    EventDetailsPage,
   
    EventListPage,
    NotificationPage,
    ForgotpsPage,
    SearchPage,
    ProfilePage,
    EditProfilePage,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),
    ProgressBarModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HometabsPage,
    LoginPage,
    RegisterPage,
    CelebrityListPage,
    CelebrityDetailsPage,
    EventDetailsPage,
    EventListPage,
    NotificationPage,
    ForgotpsPage,
    SearchPage,
    ProfilePage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
  // constructor(public navCtrl: NavController) {

  // }
  // goToAllRegister(){
  //   this.navCtrl.push(RegisterPage);
  // }
}
