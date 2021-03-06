import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
import { EventListPage } from '../event-list/event-list';
import { CelebrityListPage } from '../celebrity-list/celebrity-list';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the HometabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hometabs',
  templateUrl: 'hometabs.html',
})
export class HometabsPage {

  tab1Root = HomePage;
  tab2Root = EventListPage;
  tab3Root = CelebrityListPage;
  tab4Root = NotificationPage;
  tab5Root = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HometabsPage');
  }

}
