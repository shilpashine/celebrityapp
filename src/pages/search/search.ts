import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.generateTopics();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  topics: string[];
 
  generateTopics() {
    this.topics = [
      'Storage in Ionic 2',
      'Ionic 2 - calendar',
      'Creating a Android application using ionic framework.',
      'Identifying app resume event in ionic - android',
      'What is hybrid application and why.?',
      'Procedure to remove back button text',
      'How to reposition ionic tabs on top position.',
      'Override Hardware back button in cordova based application - Ionic',
      'Drupal 8: Enabling Facets for Restful web services',
      'Drupal 8: Get current user session',
      'Drupal 8: Programatically create Add another field - Example',  
    ];
  }
 
  getTopics(ev: any) {
    this.generateTopics();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.topics = this.topics.filter((topic) => {
        return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }


}
