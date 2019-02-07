import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
// import { RegisterPage } from '../register/register';
import { CelebrityListPage } from '../celebrity-list/celebrity-list';
import { CelebrityDetailsPage } from '../celebrity-details/celebrity-details';
import { EventDetailsPage } from '../event-details/event-details';
import { EventListPage } from '../event-list/event-list';
import { NotificationPage } from '../notification/notification';
import { SearchPage } from '../search/search';
import { Http, Headers } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import "rxjs/add/operator/map";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage implements OnInit{

  public isSearchbarOpened = false;
  items:any; 
  itemsdata:any;
  itemsalldata:any;
  catdata:any;
  currentDate:any;
  date_cuu:any;
  url_imp: any = apiUrl;
  percent_arry:any=[];

  percent_arrylist:any=[];
  itemid:any=[];
  constructor(public navCtrl: NavController,  public menuCtrl: MenuController,private http: Http) {

  }



  ngOnInit(){
    this.celebritylist();
    this.eventlist();
    this.eventalllist();
    this.categoryalllist();
    //this.calculateDif();
  }
  goToAllCelebrity(){
    this.navCtrl.push(CelebrityListPage); 
  }
  goToAllEvents(){
		this.navCtrl.push(EventListPage);
  }
  goToSingleEvent(){
		this.navCtrl.push(EventDetailsPage);
  }
  goToSingleCelebrity(itemid){
		this.navCtrl.push(CelebrityDetailsPage, {
      data:itemid
    });
  }
  goToNotification(){
		this.navCtrl.push(NotificationPage);
  }
  goToSearch(){
		this.navCtrl.push(SearchPage);
  }



  celebritylist() {

    let header = new Headers();
    header.set("Content-Type", "application/json");

      // let data = {
      //   org_id: this.localUserData.org_code,
      //   user_type_id: this.localUserData.user_type_id,
      //   master_id: this.localUserData.master_id
      // } 
      
      this.http
        .get(`{{url_imp}}/apies/listCelebrity`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
         //   console.log(data);
              this.items=data;

      });
  }



  eventlist() {

    let header = new Headers();
    header.set("Content-Type", "application/json");

      // let data = {
      //   org_id: this.localUserData.org_code,
      //   user_type_id: this.localUserData.user_type_id,
      //   master_id: this.localUserData.master_id
      // } 
      
      this.http
        .get(`{{url_imp}}/apies/listEventCity`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
        //    console.log(data);
              this.itemsdata=data;
              data.forEach(ele => {
                let count = 0;
                ele.event_orders.forEach(data_details => {
                  count = count + data_details.product_price;
                })

                let percent =Math.round(( count/ele.target_amount )*100)
                this.percent_arry.push(percent);
          
              //  console.log(this.percent_arry);
                
              });
             
      });


  }
  
  eventalllist() {

    let header = new Headers();
    header.set("Content-Type", "application/json");

      // let data = {
      //   org_id: this.localUserData.org_code,
      //   user_type_id: this.localUserData.user_type_id,
      //   master_id: this.localUserData.master_id
      // } 
      
      this.http
        .get(`{{url_imp}}/apies/listEventAll`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
       //     console.log(data);
              this.itemsalldata=data;
              data.forEach(ele => {
                let count = 0;
                ele.event_orders.forEach(data_details => {
                  count = count + data_details.product_price;
                })

                let percent =Math.round((  count/ele.target_amount )*100)
                this.percent_arrylist.push(percent);
          
              //  console.log(this.percent_arrylist);
                
              });
              
      });
  }
  categoryalllist() {

    let header = new Headers();
    header.set("Content-Type", "application/json");

      // let data = {
      //   org_id: this.localUserData.org_code,
      //   user_type_id: this.localUserData.user_type_id,
      //   master_id: this.localUserData.master_id
      // } 
      
      this.http
        .get(`{{url_imp}}/apies/list_category`, {headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
           // console.log(data);
              this.catdata=data;
      });
  }
  
 
  

}

