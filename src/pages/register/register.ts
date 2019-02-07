import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ForgotpsPage } from '../forgotps/forgotps';
// import { HometabsPage } from '../hometabs/hometabs';
import { LoginPage } from '../login/login';

import { Http, Headers } from '@angular/http';
import { apiUrl } from '../../apiUrl';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: FormGroup; 
  fname:  FormControl;
 lname:  FormControl;
 phone:  FormControl;
  password:  FormControl;
 
  itemsdata:any;
  value:any;
  product: any;
  allUrl:any=apiUrl;
  cele_count:any;
  percent:number=0;
  count:number=0;
  arr_count:number=0;
  itemslist:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {

  }

  ngOnInit(){
    this.registerdetail();
    
    //this.calculateDif();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  registerdetail() {

    this.user = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    
   });
  }




  registersubmit() {
   // console.log(this.user.value);

   let header = new Headers();
    header.set("Content-Type", "application/json");

      let data = {
        fname: this.user.value.fname,
        lname: this.user.value.lname,
        phone: this.user.value.phone,
        password: this.user.value.password,
       } 
      
      this.http
        .post(`${this.allUrl.url}/apies/registration`, data,{headers: header})
        .map(res => res.json())
        .subscribe(
          data => {
         
             this.itemslist=data;
             
             
           
        

      });

  }

  
}
