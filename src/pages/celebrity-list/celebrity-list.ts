import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CelebrityDetailsPage } from '../celebrity-details/celebrity-details';
/**
 * Generated class for the CelebrityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-celebrity-list',
  templateUrl: 'celebrity-list.html',
})
export class CelebrityListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelebrityListPage');
  }
  goToSingleCelebrity(){
		this.navCtrl.push(CelebrityDetailsPage);
  }
  
}
