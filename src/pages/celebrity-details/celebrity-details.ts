import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CelebrityDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-celebrity-details',
  templateUrl: 'celebrity-details.html',
})
export class CelebrityDetailsPage {

  items:any; 
  itemsdata:any;
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.value = navParams.get('item');
    console.log(this.value);
  }
  ngOnInit(){
    this.celebritydetail();
    
    //this.calculateDif();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelebrityDetailsPage');
  }

  celebritydetail() {

    let header = new Headers();
    header.set("Content-Type", "application/json");

      // let data = {
      //   org_id: this.localUserData.org_code,
      //   user_type_id: this.localUserData.user_type_id,
      //   master_id: this.localUserData.master_id
      // } 
      
      this.http
        .get(`http://localhost/git_project/WebIdeasole/celebritycalling/apies/single_celebrity`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
         //   console.log(data);
              this.items=data;

      });
  }



}
