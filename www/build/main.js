webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingPage = /** @class */ (function () {
    function RatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activeStars = [
            false,
            false,
            false,
            false,
            false
        ];
    }
    RatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    RatingPage.prototype.activateStars = function (num) {
        if (num === 1) {
            this.activeStars = [true, false, false, false, false];
        }
        else if (num === 2) {
            this.activeStars = [true, true, false, false, false];
        }
        else if (num === 3) {
            this.activeStars = [true, true, true, false, false];
        }
        else if (num === 4) {
            this.activeStars = [true, true, true, true, false];
        }
        else if (num == 5) {
            this.activeStars = [true, true, true, true, true];
        }
    };
    RatingPage.prototype.open = function () {
        this.navCtrl.popToRoot();
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/rating/rating.html"*/'<!--\n  Generated template for the RatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title align-center>Vidconnect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="margin">\n  \n  \n  <h1 align=center style="color:#327BD1 !important; font-family: \'Questrial\'; font-size: 40px; font-weight: bolder;"> Teaching Skills: </h1>\n  <div class="stars-container">\n    <span class="fa-star" [ngClass]="{\'fas check\': activeStars[0], \'far\': !activeStars[0]}" (click)="activateStars(1)"></span>\n    <span class="fa-star" [ngClass]="{\'fas check\': activeStars[1], \'far\': !activeStars[1]}" (click)="activateStars(2)"></span>\n    <span class="fa-star" [ngClass]="{\'fas check\': activeStars[2], \'far\': !activeStars[2]}" (click)="activateStars(3)"></span>\n    <span class="fa-star" [ngClass]="{\'fas check\': activeStars[3], \'far\': !activeStars[3]}" (click)="activateStars(4)"></span>\n    <span class="fa-star" [ngClass]="{\'fas check\': activeStars[4], \'far\': !activeStars[4]}" (click)="activateStars(5)"></span>\n\n  </div>\n  <div style="text-align:center;">\n      <button id="SubmitButton" ion-button large color="#327BD1" style="font-family: \'Questrial\';"(click)="open()"  >Submit</button>\n      \n    </div>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/rating/rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/choice/choice.module": [
		273,
		1
	],
	"../pages/rating/rating.module": [
		274,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.activeStars = [false, false, false, false, false];
    }
    HomePage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.activateStars = function (num) {
        if (num === 1) {
            this.activeStars = [true, false, false, false, false];
        }
        else if (num === 2) {
            this.activeStars = [true, true, false, false, false];
        }
        else if (num === 3) {
            this.activeStars = [true, true, true, false, false];
        }
        else if (num === 4) {
            this.activeStars = [true, true, true, true, false];
        }
        else if (num == 5) {
            this.activeStars = [true, true, true, true, true];
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title align="center"> VidConnect </ion-title>\n  </ion-navbar>\n</ion-header>\n<link href=\'https://fonts.googleapis.com/css?family=Questrial\' rel=\'stylesheet\'>\n<ion-content padding id="margin">\n  \n  <ion-list>  \n\n\n    <ion-item (click)="(openPage())">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/avatar1.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Richard Garza</h2>\n      <p style="color:#327BD1">Bilingual</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar2.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Karla Rodriguez</h2>\n      <p style="color:#327BD1">English Language Learner</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar3.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Jorge Lopez</h2>\n      <p style="color:#327BD1">Bilingual </p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar4.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Luis de Paz</h2>\n      <p style="color:#327BD1">English Language Learner</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar6.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Fred Cordova</h2>\n      <p style="color:#327BD1"> Bilingual</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar7.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Erick Sanchez</h2>\n      <p style="color:#327BD1">Bilingual </p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar8.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Erica Pimentel</h2>\n      <p style="color:#327BD1">Bilingual </p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar9.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Cameron Gonzalez</h2>\n      <p style="color:#327BD1">English Language Learner </p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar10.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Steven Hernandez</h2>\n      <p style="color:#327BD1">Bilingual </p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/avatar11.png">\n      </ion-avatar>\n      <h2 style =" font-weight: 900;">Sally Rodriguez</h2>\n      <p style="color:#327BD1">Bilingual </p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_rating__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
    }
    ProfilePage.prototype.open = function () {
        var _this = this;
        console.log('open');
        var options = {
            hardwareback: "yes"
        };
        var browser = this.iab.create('facetime://ernestopimentel1@gmail.com', '_system', options);
        //   browser.on('loadstop').subscribe(event => {
        //     console.log('facetime')
        //  });
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rating_rating__["a" /* RatingPage */]);
        }, 3000);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header id="profile-header">\n\n  <ion-navbar id="nav">\n    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div id=background>\n\n  </div>\n  <div id="profileContainer">\n    <div class="dino">\n    \n        <img src="../assets/imgs/avatar1.png">\n    \n    </div>\n    <div color="#327BD1">\n      <h1 class="david">Richard Garza</h1>\n      <p class="sub">\n        Bilingual Student\n      </p>\n      <div class="star-container">\n        <span class="fas fa-star yellow"></span>\n        <span class="fas fa-star yellow"></span>\n        <span class="fas fa-star yellow"></span>\n        <span class="fas fa-star yellow"></span>\n        <span class="fas fa-star grey"></span>\n        <span class="yellow" style="font-family: \'Questrial\';">4.0</span>\n    \n      </div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <div >\n          <h1 class="margin" style=" font-weight: bolder;">Email:</h1>\n          <p class="email" color="#327BD1">richardg@gmail.com</p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div >\n          <h1 class="margin" style=" font-weight: bolder;">About:\n\n            </h1>\n            <p class="about" color="#327BD1">A student with big dreams. I am studying English and would like to help others too. \n             </p>\n            </div>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <div style="text-align:center;">\n    <button id="FacetimeButton" ion-button large color="#327BD1"(click)="open()"> VidConnect </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the ChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoicePage = /** @class */ (function () {
    function ChoicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicePage');
    };
    ChoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choice',template:/*ion-inline-start:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/choice/choice.html"*/'<!--\n  Generated template for the ChoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vidconnect</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ernestopimentel/Downloads/VidConnect-master/src/pages/choice/choice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChoicePage);
    return ChoicePage;
}());

//# sourceMappingURL=choice.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_choice_choice__ = __webpack_require__(197);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_choice_choice__["a" /* ChoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/choice/choice.module#ChoicePageModule', name: 'ChoicePage', segment: 'choice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_choice_choice__["a" /* ChoicePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ernestopimentel/Downloads/VidConnect-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ernestopimentel/Downloads/VidConnect-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map