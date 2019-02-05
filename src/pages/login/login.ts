import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ForgotpsPage } from '../forgotps/forgotps';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   openModal(){
  	let openModal = this.modalCtrl.create(ForgotpsPage);
  	openModal.present();
  }
   goToregister(){
  	this.navCtrl.push(RegisterPage);
  }
}
