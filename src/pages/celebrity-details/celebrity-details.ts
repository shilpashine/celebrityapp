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
  product: any;
  allUrl:any=apiUrl;
  cele_count:any;
  percent:number=0;
  count:number=0;
  arr_count:number=0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.product = this.navParams.get('data');

   // console.log(this.product);
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
        .get(`${this.allUrl.url}/apies/single_celebrity/${this.product}`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
         //  console.log(data);
              this.items=data;
             
              data.celebrity_rattings.forEach(ele => {
                
              
                this. count = (this.count) + parseInt(ele.rating);
                  this.arr_count++;
                })
              // console.log(this.count);
              //  console.log(this.arr_count);
                 this.percent =(this.count/this.arr_count) 
                this.cele_count=(data.event_follows).length;
          
              // console.log(percent);
                
              

      });
  }



}
