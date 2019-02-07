webpackJsonp([12],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="body">\n\n    <div text-center class="logo-container">\n      <h4 text-uppercase>Edit Your Details</h4>\n      <form>\n       <ion-list>\n         <ion-item margin-bottom>\n           <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n           <ion-input type="text" placeholder="Name" class="placeholder-text" color="light" ></ion-input>\n         </ion-item>\n         <ion-item margin-bottom>\n           <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n           <ion-input type="text" placeholder="Email id" class="placeholder-text" color="light" ></ion-input>\n         </ion-item>\n         <ion-item margin-bottom>\n           <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n           <ion-input type="text" placeholder="Phone" class="placeholder-text" color="light" ></ion-input>\n         </ion-item>\n         <ion-item margin-bottom>\n           <ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n           <ion-input type="text" placeholder="Password" class="placeholder-text" color="light"></ion-input>\n         </ion-item>\n        \n        \n         <button ion-button block outline color="light" class="mt-10">SAVE</button>\n         \n       </ion-list>\n     </form>\n   </div>\n  </ion-content>'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpsPage = /** @class */ (function () {
    function ForgotpsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpsPage');
    };
    ForgotpsPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ForgotpsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotps',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\forgotps\forgotps.html"*/'<!--\n  Generated template for the ForgotpsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  	<ion-buttons end>\n  		<button ion-button (click)="closeModal()">\n  			<ion-icon name="close"></ion-icon>\n  		</button>\n  	</ion-buttons>\n    <ion-title>forgotps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\forgotps\forgotps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ForgotpsPage);
    return ForgotpsPage;
}());

//# sourceMappingURL=forgotps.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HometabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_list_event_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__celebrity_list_celebrity_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the HometabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HometabsPage = /** @class */ (function () {
    function HometabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__event_list_event_list__["a" /* EventListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__celebrity_list_celebrity_list__["a" /* CelebrityListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
    }
    HometabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HometabsPage');
    };
    HometabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hometabs',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\hometabs\hometabs.html"*/'<!--\n  Generated template for the HometabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>hometabs</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n  <ion-tabs id="tabs" color="light" class="hidden">\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n    <!-- <ion-tab [root]="tab2Root" tabTitle="Events" tabIcon="contact" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Celebrity" tabIcon="aperture" tabsHideOnSubPages="true"></ion-tab> -->\n    <ion-tab [root]="tab4Root" tabTitle="Notification" tabIcon="notifications" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="person" tabsHideOnSubPages="true"></ion-tab>\n  </ion-tabs>  \n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\hometabs\hometabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HometabsPage);
    return HometabsPage;
}());

//# sourceMappingURL=hometabs.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.generateTopics();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.generateTopics = function () {
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
    };
    SearchPage.prototype.getTopics = function (ev) {
        this.generateTopics();
        var serVal = ev.target.value;
        if (serVal && serVal.trim() != '') {
            this.topics = this.topics.filter(function (topic) {
                return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="body">\n\n  <ion-searchbar (ionInput)="getTopics($event)" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    <ion-list>\n        <ion-item *ngFor="let topic of topics">\n            {{topic}}\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToProfileEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n  <ion-content>    \n    <div class="profile">\n      <div text-center class="logo-container">\n        <div class="image-position">\n          <img class="profile-image" src="assets/imgs/profile-big.png" alt="Logo of clean connect">\n          <label class="upload-dp">\n              <ion-icon name="camera"></ion-icon>\n              <input type="file" hidden>\n            </label>\n        </div>\n        <h4 text-uppercase>John Doe</h4>\n        <p no-margin no-padding ion-text color="light">Member Since 2016 Oct 10</p>\n     </div>\n    </div>\n\n    <div padding>\n        <ion-list>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" value="demo@gmail.com" disabled="true" color="danger"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="City" value="Kolkata" color="danger" disabled="true"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Phone" value="1234567890" color="danger" disabled="true"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Password" value="1234567890" color="danger" disabled="true"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button round block (click)="goToProfileEdit()">Edit Profile</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/celebrity-details/celebrity-details.module": [
		292,
		11
	],
	"../pages/celebrity-list/celebrity-list.module": [
		293,
		10
	],
	"../pages/edit-profile/edit-profile.module": [
		289,
		9
	],
	"../pages/event-details/event-details.module": [
		290,
		8
	],
	"../pages/event-list/event-list.module": [
		294,
		7
	],
	"../pages/forgotps/forgotps.module": [
		291,
		6
	],
	"../pages/hometabs/hometabs.module": [
		296,
		5
	],
	"../pages/login/login.module": [
		297,
		4
	],
	"../pages/notification/notification.module": [
		295,
		3
	],
	"../pages/profile/profile.module": [
		298,
		2
	],
	"../pages/register/register.module": [
		300,
		1
	],
	"../pages/search/search.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__celebrity_list_celebrity_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__celebrity_details_celebrity_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_details_event_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_list_event_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_notification__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apiUrl__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RegisterPage } from '../register/register';









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, http) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.isSearchbarOpened = false;
        this.url_imp = __WEBPACK_IMPORTED_MODULE_9__apiUrl__["a" /* apiUrl */];
        this.percent_arry = [];
        this.percent_arrylist = [];
        this.itemid = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.celebritylist();
        this.eventlist();
        this.eventalllist();
        this.categoryalllist();
        //this.calculateDif();
    };
    HomePage.prototype.goToAllCelebrity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__celebrity_list_celebrity_list__["a" /* CelebrityListPage */]);
    };
    HomePage.prototype.goToAllEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__event_list_event_list__["a" /* EventListPage */]);
    };
    HomePage.prototype.goToSingleEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_details_event_details__["a" /* EventDetailsPage */]);
    };
    HomePage.prototype.goToSingleCelebrity = function (itemid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__celebrity_details_celebrity_details__["a" /* CelebrityDetailsPage */], {
            data: itemid
        });
    };
    HomePage.prototype.goToNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.celebritylist = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        // let data = {
        //   org_id: this.localUserData.org_code,
        //   user_type_id: this.localUserData.user_type_id,
        //   master_id: this.localUserData.master_id
        // } 
        this.http
            .get("http://localhost/git_project/WebIdeasole/celebritycalling/apies/listCelebrity", { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //   console.log(data);
            _this.items = data;
        });
    };
    HomePage.prototype.eventlist = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        // let data = {
        //   org_id: this.localUserData.org_code,
        //   user_type_id: this.localUserData.user_type_id,
        //   master_id: this.localUserData.master_id
        // } 
        this.http
            .get("http://localhost/git_project/WebIdeasole/celebritycalling/apies/listEventCity", { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //    console.log(data);
            _this.itemsdata = data;
            data.forEach(function (ele) {
                var count = 0;
                ele.event_orders.forEach(function (data_details) {
                    count = count + data_details.product_price;
                });
                var percent = Math.round((count / ele.target_amount) * 100);
                _this.percent_arry.push(percent);
                //  console.log(this.percent_arry);
            });
        });
    };
    HomePage.prototype.eventalllist = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        // let data = {
        //   org_id: this.localUserData.org_code,
        //   user_type_id: this.localUserData.user_type_id,
        //   master_id: this.localUserData.master_id
        // } 
        this.http
            .get("http://localhost/git_project/WebIdeasole/celebritycalling/apies/listEventAll", { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //     console.log(data);
            _this.itemsalldata = data;
            data.forEach(function (ele) {
                var count = 0;
                ele.event_orders.forEach(function (data_details) {
                    count = count + data_details.product_price;
                });
                var percent = Math.round((count / ele.target_amount) * 100);
                _this.percent_arrylist.push(percent);
                //  console.log(this.percent_arrylist);
            });
        });
    };
    HomePage.prototype.categoryalllist = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        // let data = {
        //   org_id: this.localUserData.org_code,
        //   user_type_id: this.localUserData.user_type_id,
        //   master_id: this.localUserData.master_id
        // } 
        this.http
            .get("http://localhost/git_project/WebIdeasole/celebritycalling/apies/list_category", { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log(data);
            _this.catdata = data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">PartyWithStar</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="goToNotification()">\n          <ion-icon name="notifications" color="light">\n              <ion-badge id="notifications-badge" color="info">5</ion-badge>\n          </ion-icon>\n        </button>\n				<button ion-button icon-only (click)="goToSearch()">\n					<ion-icon name="search" color="light"></ion-icon>\n				</button>\n			</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="body">\n<div class="celebrity-container">\n  <h3 ion-text color="light" >Events for Your City\n    <span text-right float-right class="more-class" color="secondary" (click)="goToAllEvents()">More</span>\n  </h3>\n  <ion-slides *ngIf="itemsdata" slidesPerView="1.5" spaceBetween="10" autoplay="2000" centeredSlides="true" loop="true">\n    <!-- <ng-template> -->\n      <ion-slide  *ngFor="let data of itemsdata">\n          <div class="event-bg" text-left (click)="goToSingleEvent(data, item)">\n              <label class="type-of-celebrity">\n                <span  *ngFor="let data_cat of data.event_categories">\n                  {{ \n                  data_cat?.category?.category_name\n                }}</span>\n              </label>\n              <h5 class="celebrity-title"> {{ \n                  data?.event_title\n                }}</h5>\n              <p class="celebrity-para">{{ \n                  data?.event_description\n                }} </p>\n              <label for="" class="type-of-celebrity">Artist list</label>\n              <div class="project-love-author">\n                  <div class="author-profile">\n\n                    <ul class="artist-img"  *ngFor="let data_celeb of data.event_celebrities">\n                      <li>\n                        <img src="{{url_imp}}/img/medium/{{data_celeb?.celebrity_details[0]?.celebrity_photos[0]?.image}}" alt="">\n                        <div class="artist-name" href="#">{{data_celeb?.celebrity_details[0]?.name}}</div>\n                      </li>\n                      <!-- <li>\n                        <img src="assets/imgs/author-02.png" alt="">\n                        <div class="artist-name" href="#">Monali</div>\n                      </li>\n                      <li>\n                        <img src="assets/imgs/author-03.png" alt="">\n                        <div class="artist-name" href="#">Salman</div>\n                      </li> -->\n                    </ul>\n\n                  </div>\n                </div>\n                \n                  \n                       \n                          <span *ngFor="let data_per of percent_arry">\n                                              \n\n              <progress-bar progress="{{ data_per}}" [color]="\'#488aff\'"></progress-bar>          </span>\n              <div class="progress-text">\n                  <div class="process-time-events"><span color="blue">  {{data?.approx_start_date | timeAgo}}</span></div>\n              </div>\n            </div>\n      </ion-slide>\n    <!-- </ng-template> -->\n    <!-- <ion-slide>\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-slide>\n    <ion-slide >\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-slide>\n    <ion-slide >\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-slide> -->\n    <!-- <ion-slide>\n        <div class="event-bg" text-left>\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? That\'s not magic, that\'s the </p>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <a class="author-avatar" href="#"><img src="assets/imgs/author-01.png" alt=""></a>by <span class="author-name" href="#">John Doe</span>\n                </div>\n                <div class="author-address"><span class="ion-location"></span>Mumbai, Maharashtra, India</div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n            <div class="process-info">\n                <div class="process-pledged"><span><i class="fa fa-inr" aria-hidden="true"></i> 630</span>pledged</div>\n                <div class="process-funded"><span>26%</span>funded</div>\n                <div class="process-time"><span>2</span>days ago</div>\n            </div>\n            </div>\n          </div>\n    </ion-slide> -->\n  </ion-slides>\n</div>\n\n\n<div class="celebrity-container">\n  <h3 ion-text color="light" >Celebrity\n    <span text-right float-right class="more-class" color="secondary" (click)="goToAllCelebrity()">More</span>\n  </h3>\n  <ion-slides *ngIf="items" slidesPerView="3.5" spaceBetween="10">\n      <!-- <ng-template ngFor="let data of items"> -->\n        <ion-slide *ngFor="let data of items">  \n          \n        <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n            \n            <img src="http://localhost/git_project/WebIdeasole/celebritycalling/img/medium/{{data?.celebrity_photos[0]?.image}}" alt="">\n          </div>\n        </ion-slide>\n      <!-- </ng-template> -->\n    <!-- <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c2.jpg" alt="">\n      </div>  *ngFor="let data of items"\n    </ion-slide> -->\n    <!-- <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c3.jpg" alt="">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c4.png" alt="">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c5.jpg" alt="">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c6.jpg" alt="">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c7.jpg" alt="">\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="celebrity-bg" (click)="goToSingleCelebrity()">\n        <img src="assets/imgs/c8.jpeg" alt="">\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</div>\n\n<div class="celebrity-container">\n  <h3 ion-text color="light">All Events\n    <span text-right float-right class="more-class" color="secondary" (click)="goToAllEvents()">More</span>\n  </h3>\n\n  <ion-slides *ngIf="itemsalldata" slidesPerView="1.5" spaceBetween="10" autoplay="2000" centeredSlides="true" loop="true">\n    <ion-slide *ngFor="let data_list of itemsalldata">\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <!-- <label for="" class="type-of-celebrity">{{data_list?.event_categories}} </label> -->\n            <h5 class="celebrity-title">{{data_list?.event_title}}</h5>\n            <p class="celebrity-para">{{data_list?.event_description}} </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                    <ul class="artist-img"  *ngFor="let data_celeblist of data_list.event_celebrities">\n                        <li>\n                          <img src="http://localhost/git_project/WebIdeasole/celebritycalling/img/medium/{{data_celeblist?.celebrity_details[0]?.celebrity_photos[0]?.image}}" alt="">\n                          <div class="artist-name" href="#">{{data_celeblist?.celebrity_details[0]?.name}} </div>\n                        </li>\n                  </ul>\n                </div>\n              </div>\n              <span *ngFor="let data_per_list of percent_arrylist">\n            <progress-bar progress="{{ data_per_list}}" [color]="\'#488aff\'"></progress-bar>\n            </span>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">  {{data_list?.approx_start_date | timeAgo}}</span></div>\n            </div>\n          </div>\n    </ion-slide>\n    \n  </ion-slides>\n</div>\n\n\n<div class="celebrity-container">\n  <h3 ion-text color="light" >Discover</h3>\n  <ion-slides slidesPerView="2.8" spaceBetween="10"  *ngIf="catdata">\n    <ion-slide *ngFor="let data_cat of catdata">\n      <div class="discover-bg" text-center (click)="goToAllCelebrity()">\n        <h5 class="celebrity-title">{{data_cat?.category_name}}</h5>\n      </div>\n    </ion-slide>\n   \n  </ion-slides>\n</div>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hometabs_hometabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_celebrity_list_celebrity_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_celebrity_details_celebrity_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_details_event_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_event_list_event_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notification_notification__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgotps_forgotps__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_progress_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic3_star_rating__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hometabs_hometabs__["a" /* HometabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_celebrity_list_celebrity_list__["a" /* CelebrityListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_celebrity_details_celebrity_details__["a" /* CelebrityDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotps_forgotps__["a" /* ForgotpsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotps/forgotps.module#ForgotpsPageModule', name: 'ForgotpsPage', segment: 'forgotps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/celebrity-details/celebrity-details.module#CelebrityDetailsPageModule', name: 'CelebrityDetailsPage', segment: 'celebrity-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/celebrity-list/celebrity-list.module#CelebrityListPageModule', name: 'CelebrityListPage', segment: 'celebrity-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hometabs/hometabs.module#HometabsPageModule', name: 'HometabsPage', segment: 'hometabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_22_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hometabs_hometabs__["a" /* HometabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_celebrity_list_celebrity_list__["a" /* CelebrityListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_celebrity_details_celebrity_details__["a" /* CelebrityDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotps_forgotps__["a" /* ForgotpsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var apiUrl = {
    url: 'http://localhost/git_project/WebIdeasole/celebritycalling',
};
//# sourceMappingURL=apiUrl.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hometabs_hometabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_celebrity_list_celebrity_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_hometabs_hometabs__["a" /* HometabsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_hometabs_hometabs__["a" /* HometabsPage */] },
            { title: 'Celebrity List', component: __WEBPACK_IMPORTED_MODULE_6__pages_celebrity_list_celebrity_list__["a" /* CelebrityListPage */] },
            { title: 'Event List', component: __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__["a" /* EventListPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header no-padding no-margin>\n    <ion-toolbar no-padding no-margin class="toolbar-nopadding manu-heading">\n      <ion-title no-padding no-margin class="user-position">\n        <img src="assets/imgs/c2.jpg"/>\n        <h6 ion-text color="light" text-uppercase>leonardo dicaprio</h6>\n        <h5 ion-text color="dark" text-uppercase>Last seen 2018-8-10</h5>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="add-circle"></ion-icon> \n        {{p.title}}\n      </button>\n      <!-- <ion-item>\n        <button menuClose ion-item color="primary">\n          <ion-icon ios="ios-home" md="md-home" padding-left></ion-icon> Home\n        </button>\n        <button menuClose ion-item>\n          <ion-icon ios="ios-radio-button-on" md="md-radio-button-on" color="primary" padding-left></ion-icon> Your City Events\n        </button>\n        <button menuClose ion-item >\n          <ion-icon ios="ios-radio-button-off" md="md-radio-button-off" color="primary" padding-left></ion-icon> All Events\n        </button>\n        <button menuClose ion-item >\n          <ion-icon ios="ios-aperture" md="md-aperture" color="primary" padding-left></ion-icon> Celebrity\n        </button>\n        <button menuClose ion-item >\n          <ion-icon ios="ios-home" md="md-home" color="primary" padding-left></ion-icon> Register\n        </button>\n        <button menuClose ion-item >\n          <ion-icon ios="ios-exit" md="md-exit" color="primary" padding-left></ion-icon> Login\n        </button>\n      </ion-item> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelebrityListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__celebrity_details_celebrity_details__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CelebrityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CelebrityListPage = /** @class */ (function () {
    function CelebrityListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CelebrityListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CelebrityListPage');
    };
    CelebrityListPage.prototype.goToSingleCelebrity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__celebrity_details_celebrity_details__["a" /* CelebrityDetailsPage */]);
    };
    CelebrityListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-celebrity-list',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\celebrity-list\celebrity-list.html"*/'<!--\n  Generated template for the CelebrityListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Celebrity List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n    <h3 ion-text color="light" >Hollywood</h3>\n    <ion-list>\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c1.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="3">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n\n        </ion-item>\n\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c2.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="1">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n        </ion-item>\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c3.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="4">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n        </ion-item>\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c6.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="4">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n        </ion-item>\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c5.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="4">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n        </ion-item>\n        <ion-item (click)="goToSingleCelebrity()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/c7.jpg">\n          </ion-avatar>\n          <h2>Leonardo dicaprio</h2>\n          <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n          <ionic3-star-rating  float-left\n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "#eff172" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="4">\n        </ionic3-star-rating>\n        <span float-right class="p-5">2500 Fellowers</span>\n        </ion-item>\n\n        <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c8.jpeg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n      </ion-list>\n\n      <h3 ion-text color="light" >Bollywood</h3>\n      <ion-list>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c1.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n  \n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="3">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n  \n          </ion-item>\n  \n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c2.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="1">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c3.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c6.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c5.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c7.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n  \n          <ion-item (click)="goToSingleCelebrity()">\n              <ion-avatar item-start>\n                <img src="assets/imgs/c8.jpeg">\n              </ion-avatar>\n              <h2>Leonardo dicaprio</h2>\n              <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n              <ionic3-star-rating  float-left\n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "#eff172" \n              defaultColor = "#f4f4f4"\n              readonly="false"\n              [rating]="4">\n            </ionic3-star-rating>\n            <span float-right class="p-5">2500 Fellowers</span>\n            </ion-item>\n        </ion-list>\n      <h3 ion-text color="light" >Tollywood</h3>\n      <ion-list>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c1.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n  \n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="3">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n  \n          </ion-item>\n  \n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c2.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="1">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c3.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c6.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c5.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n          <ion-item (click)="goToSingleCelebrity()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/c7.jpg">\n            </ion-avatar>\n            <h2>Leonardo dicaprio</h2>\n            <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n            <ionic3-star-rating  float-left\n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "#eff172" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="4">\n          </ionic3-star-rating>\n          <span float-right class="p-5">2500 Fellowers</span>\n          </ion-item>\n  \n          <ion-item (click)="goToSingleCelebrity()">\n              <ion-avatar item-start>\n                <img src="assets/imgs/c8.jpeg">\n              </ion-avatar>\n              <h2>Leonardo dicaprio</h2>\n              <p>I\'ve had a pretty messed up day. I\'ve had a pretty messed up day. If we just...</p>\n              <ionic3-star-rating  float-left\n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "#eff172" \n              defaultColor = "#f4f4f4"\n              readonly="false"\n              [rating]="4">\n            </ionic3-star-rating>\n            <span float-right class="p-5">2500 Fellowers</span>\n            </ion-item>\n        </ion-list>\n\n \n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\celebrity-list\celebrity-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CelebrityListPage);
    return CelebrityListPage;
}());

//# sourceMappingURL=celebrity-list.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details_event_details__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventListPage = /** @class */ (function () {
    function EventListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventListPage');
    };
    EventListPage.prototype.goToSingleEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_details_event_details__["a" /* EventDetailsPage */]);
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\event-list\event-list.html"*/'<!--\n  Generated template for the EventListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page body">\n    <ion-card (click)="goToSingleEvent()">\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-card>\n  \n    <ion-card (click)="goToSingleEvent()">\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-card>\n  \n    <ion-card (click)="goToSingleEvent()">\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-card>\n  \n    <ion-card (click)="goToSingleEvent()">\n        <div class="event-bg" text-left (click)="goToSingleEvent()">\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h5 class="celebrity-title">The Oreous Pillow</h5>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? </p>\n            <label for="" class="type-of-celebrity">Artist list</label>\n            <div class="project-love-author">\n                <div class="author-profile">\n                  <ul class="artist-img">\n                    <li>\n                      <img src="assets/imgs/author-01.png" alt="">\n                      <div class="artist-name" href="#">Arijit Sing</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-02.png" alt="">\n                      <div class="artist-name" href="#">Monali</div>\n                    </li>\n                    <li>\n                      <img src="assets/imgs/author-03.png" alt="">\n                      <div class="artist-name" href="#">Salman</div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            <progress-bar [progress]="50" [color]="\'#488aff\'"></progress-bar>\n            <div class="progress-text">\n                <div class="process-time-events"><span color="blue">2</span>days ago</div>\n            </div>\n          </div>\n    </ion-card>\n  \n  </ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\event-list\event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailsPage');
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event-details',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\event-details\event-details.html"*/'<!--\n  Generated template for the EventDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n    <ion-card>\n\n        <ion-item>\n          <ion-avatar item-start>\n              <img src="assets/imgs/author-01.png"/>\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n          <p>November 5, 1955</p>\n        </ion-item>\n      \n        <img src="assets/imgs/events.jpg"/>\n      \n        <div class="" text-left padding>\n            <label for="" class="type-of-celebrity">Carft</label>\n            <h1 class="celebrity-title">The Oreous Pillow</h1>\n            <p class="celebrity-para">One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life?  One smart, reusable notebook to last the rest of your life?  One smart, reusable notebook to last the rest of your life? One smart, reusable notebook to last the rest of your life? </p>\n            <!-- <div class="project-love-author">\n                <div class="author-profile">\n                  <a class="author-avatar" href="#"><img src="assets/imgs/author-01.png" alt=""></a>by <span class="author-name" href="#">John Doe</span>\n                </div>\n                <div class="author-address"><span class="ion-location"></span>Mumbai, Maharashtra, India</div>\n              </div> -->\n              <div class="project-love-author">\n                  <div class="author-profile">\n                    <ul class="artist-img">\n                      <li>\n                        <img src="assets/imgs/author-01.png" alt="">\n                        <div class="artist-name" href="#" style="color:#000;">Arijit Sing</div>\n                      </li>\n                      <li>\n                        <img src="assets/imgs/author-02.png" alt="">\n                        <div class="artist-name" href="#" style="color:#000;">Monali</div>\n                      </li>\n                      <li>\n                        <img src="assets/imgs/author-03.png" alt="">\n                        <div class="artist-name" href="#" style="color:#000;">Salman</div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n            <progress-bar [progress]="70" [color]="\'#488aff\'"></progress-bar>\n\n            <div class="progress-text">\n            <div class="process-info">\n                <div class="process-pledged"><span><i class="fa fa-inr" aria-hidden="true"></i> 630</span>pledged</div>\n                <div class="process-funded"><span>26%</span>funded</div>\n                <div class="process-time"><span>2</span>days ago</div>\n            </div>\n            </div>\n            <h2 ion-text color="danger" padding>Book Tickets</h2>\n            <ion-row>\n                \n              <ion-col col-8>\n                  <ion-item>\n                      <ion-label floating color="danger">Number of Tickets</ion-label>\n                      <ion-input type="number" value=""></ion-input>\n                    </ion-item>\n              </ion-col>\n              <ion-col col-4 margin-top padding-top>\n                  <button ion-button color="danger">Book Now</button>\n              </ion-col>\n            </ion-row>\n              \n\n          </div>      \n      </ion-card>\n\n      <ion-card>\n          <ion-item>\n              <h2>Comments</h2>\n            </ion-item>\n          <ion-list>\n    \n              <ion-item>\n                <ion-label floating color="danger">Name</ion-label>\n                <ion-input type="text" placeholder="Name"></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label floating color="danger">Email</ion-label>\n                <ion-input type="text" placeholder="Email"></ion-input>\n              </ion-item>\n            \n            </ion-list>\n            <div style="margin:0px auto; text-align: center;">\n            <button ion-button color="danger" round>Submit</button>\n          </div>\n        </ion-card>\n        <ion-fab right bottom>\n            <button ion-fab color="light"><ion-icon name="share"></ion-icon></button>\n            <ion-fab-list side="left">\n              <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n              <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n              <!-- <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button> -->\n              <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n            </ion-fab-list>\n          </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\event-details\event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelebrityDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CelebrityDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CelebrityDetailsPage = /** @class */ (function () {
    function CelebrityDetailsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.value = navParams.get('item');
        console.log(this.value);
    }
    CelebrityDetailsPage.prototype.ngOnInit = function () {
        this.celebritydetail();
        //this.calculateDif();
    };
    CelebrityDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CelebrityDetailsPage');
    };
    CelebrityDetailsPage.prototype.celebritydetail = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.set("Content-Type", "application/json");
        // let data = {
        //   org_id: this.localUserData.org_code,
        //   user_type_id: this.localUserData.user_type_id,
        //   master_id: this.localUserData.master_id
        // } 
        this.http
            .get("http://localhost/git_project/WebIdeasole/celebritycalling/apies/single_celebrity", { headers: header })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //   console.log(data);
            _this.items = data;
        });
    };
    CelebrityDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-celebrity-details',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\celebrity-details\celebrity-details.html"*/'<!--\n  Generated template for the CelebrityDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!-- <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> -->\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n  <ion-card>\n    <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/author-01.png">\n        </ion-avatar>\n      <h2><div>\n          {{value}}\n          </div></h2>\n      <p>Celebrity</p>\n    </ion-item>\n\n    <img src="assets/imgs/events.jpg">\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-card-content>\n        <ion-col>\n            <h5>Reatings</h5>\n    <ionic3-star-rating  float-left\n    activeIcon = "ios-star"\n    defaultIcon = "ios-star-outline"\n    activeColor = "#eff172" \n    defaultColor = "#f4f4f4"\n    readonly="false"\n    [rating]="5">\n  </ionic3-star-rating>\n</ion-col>\n</ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12000 Followers</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n            <ion-icon name="film"></ion-icon>\n          <div>40 Shows</div>\n        </button>\n      </ion-col>\n      <!-- <ion-col>\n        <button ion-button icon-start clear small>\n            <ion-icon name="share-alt"></ion-icon>\n          <div>Share</div>\n        </button>\n      </ion-col> -->\n    </ion-row>\n  </ion-card>\n\n  \n\n  <ion-fab right bottom>\n      <button ion-fab color="light"><ion-icon name="share"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <!-- <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button> -->\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n  \n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\celebrity-details\celebrity-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CelebrityDetailsPage);
    return CelebrityDetailsPage;
}());

//# sourceMappingURL=celebrity-details.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-card color="light">\n        <ion-card-header>\n          <strong>Lorum Ipsum </strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p>You must submit fine for book submit date over.</p>\n          <ion-note text-right float-right>10 hours ago</ion-note>\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card color="light">\n        <ion-card-header>\n          <strong>Lorum Ipsum </strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p>You must submit fine for book submit date over.</p>\n          <ion-note text-right float-right>1 hours ago</ion-note>\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card color="light">\n        <ion-card-header>\n          <strong>Lorum Ipsum </strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p>You must submit fine for book submit date over.</p>\n          <ion-note text-right float-right>5 hours ago</ion-note>\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card color="light">\n        <ion-card-header>\n          <strong>Lorum Ipsum </strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p>You must submit fine for book submit date over.</p>\n          <ion-note color="primary" text-right float-right>10 hours ago</ion-note>\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card color="light">\n        <ion-card-header>\n          <strong>Lorum Ipsum </strong>\n        </ion-card-header>\n        <ion-card-content>\n          <p>You must submit fine for book submit date over.</p>\n          <ion-note text-right float-right>12 hours ago</ion-note>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotps_forgotps__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openModal = function () {
        var openModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__forgotps_forgotps__["a" /* ForgotpsPage */]);
        openModal.present();
    };
    LoginPage.prototype.goToregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <!-- <ion-title>login</ion-title> -->\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n\n<ion-content padding class="body">\n\n<div text-center class="logo-container">\n    <img class="login-logo" src="assets/imgs/user.png" alt="Logo of clean connect">\n    <h4>Sign in to your account</h4>\n    <form>\n     <ion-list>\n       <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Enter Mail id" class="placeholder-text" color="light" ></ion-input>\n       </ion-item>\n       <ion-item>\n         <ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Password" class="placeholder-text" color="light"></ion-input>\n       </ion-item>\n       <ion-label float-right margin-bottom color="light" (click)="openModal()"> Forgot Password</ion-label>\n       <button ion-button block outline color="light" class="mt-10">Submit</button>\n       <ion-label margin-top color="light"> New User <span color="dark" (click)="goToregister()">Register</span> </ion-label>\n     </ion-list>\n   </form>\n </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ForgotpsPage } from '../forgotps/forgotps';
// import { HometabsPage } from '../hometabs/hometabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\xampp7.2\htdocs\celebrityapp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n    <!-- <ion-title>login</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="body">\n\n	<div text-center class="logo-container">\n    <img class="login-logo" src="assets/imgs/user.png" alt="Logo of clean connect">\n    <h4 text-uppercase>Register</h4>\n    <form>\n     <ion-list>\n       <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Name" class="placeholder-text" color="light" ></ion-input>\n       </ion-item>\n       <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Email id" class="placeholder-text" color="light" ></ion-input>\n       </ion-item>\n       <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Phone" class="placeholder-text" color="light" ></ion-input>\n       </ion-item>\n       <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Password" class="placeholder-text" color="light"></ion-input>\n       </ion-item>\n        <ion-item margin-bottom>\n         <ion-label> <ion-icon ios="ios-disc" md="md-disc"></ion-icon></ion-label>\n         <ion-input type="text" placeholder="Confirm Password" class="placeholder-text" color="light"></ion-input>\n       </ion-item>\n        <ion-item margin-bottom>\n            <ion-item>\n                <ion-label>City</ion-label>\n                <ion-select>\n                  <ion-option value="">Kolkata</ion-option>\n                  <ion-option value="">Mumbai</ion-option>\n                  <ion-option value="">Delhi</ion-option>\n                  <ion-option value="">Pune</ion-option>\n                </ion-select>\n              </ion-item>\n       </ion-item>\n\n       <button ion-button block outline color="light" class="mt-10">Submit</button>\n       <ion-label color="light">Already Register <span (click)="goToLogin()" color="primary">Sign In</span> </ion-label>\n     </ion-list>\n   </form>\n </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\xampp7.2\htdocs\celebrityapp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map