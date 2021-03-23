(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-download-card-download-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"card\" class=\"card-background-page\">\r\n  <!-- <p>card downloading</p>\r\n  <p><b>Full Name: </b></p>\r\n  <p><b>CellNo: </b>{{card.cellNo}}</p>\r\n <p><b>Workplace: </b></p> -->\r\n \r\n <ion-card (click)=\"save()\"  style=\"margin: 32vh 0;\">\r\n  <img src=\"../../assets/img/cardimage.jpg  \"   style=\"max-width: none;\"/>\r\n  <div class=\"card-title\">{{card.name}} {{card.surname}}</div>\r\n  <div class=\"card-subtitle2\">{{card.email}}</div>\r\n  <div class=\"card-subtitle\">{{card.Workplace}}</div>\r\n  <div *ngIf=\"cellNoSharing\" class=\"card-subtitle3\">{{card.cellNo}}</div>\r\n\r\n  <div  class=\"card-subtitle4\">\r\n  <ion-icon name=\"arrow-down-circle-outline\"></ion-icon>\r\n  </div>\r\n</ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/card-download/card-download-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/card-download/card-download-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CardDownloadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDownloadPageRoutingModule", function() { return CardDownloadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_download_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-download.page */ "./src/app/card-download/card-download.page.ts");




const routes = [
    {
        path: '',
        component: _card_download_page__WEBPACK_IMPORTED_MODULE_3__["CardDownloadPage"]
    }
];
let CardDownloadPageRoutingModule = class CardDownloadPageRoutingModule {
};
CardDownloadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardDownloadPageRoutingModule);



/***/ }),

/***/ "./src/app/card-download/card-download.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/card-download/card-download.module.ts ***!
  \*******************************************************/
/*! exports provided: CardDownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDownloadPageModule", function() { return CardDownloadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _card_download_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-download-routing.module */ "./src/app/card-download/card-download-routing.module.ts");
/* harmony import */ var _card_download_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-download.page */ "./src/app/card-download/card-download.page.ts");







let CardDownloadPageModule = class CardDownloadPageModule {
};
CardDownloadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _card_download_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardDownloadPageRoutingModule"]
        ],
        declarations: [_card_download_page__WEBPACK_IMPORTED_MODULE_6__["CardDownloadPage"]]
    })
], CardDownloadPageModule);



/***/ }),

/***/ "./src/app/card-download/card-download.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/card-download/card-download.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 18%;\n  font-size: 2em;\n  right: 5%;\n  font-weight: bold;\n  color: #000;\n  text-transform: capitalize;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 62%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle2 {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle3 {\n  font-size: 1em;\n  position: absolute;\n  top: 42%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle4 {\n  font-size: 2.5em;\n  position: absolute;\n  top: 72%;\n  right: 5%;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1kb3dubG9hZC9FOlxcZXhjaGFuZ2UtYnVzc2luZXNzLWNhcmQvc3JjXFxhcHBcXGNhcmQtZG93bmxvYWRcXGNhcmQtZG93bmxvYWQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkLWRvd25sb2FkL2NhcmQtZG93bmxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUdBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSko7QURPRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtBQ05KO0FEU0U7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUNSTjtBRFdJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDVk47QURhSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUNaTiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtZG93bmxvYWQvY2FyZC1kb3dubG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4JTtcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICByaWdodDogNSU7XHJcbiAgICAvLyBsZWZ0OjUlO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MiU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VidGl0bGUyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUyJTtcclxuICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc3VidGl0bGUzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDQyJTtcclxuICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc3VidGl0bGU0IHtcclxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDcyJTtcclxuICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlMyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlNCB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MiU7XG4gIHJpZ2h0OiA1JTtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/card-download/card-download.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/card-download/card-download.page.ts ***!
  \*****************************************************/
/*! exports provided: CardDownloadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDownloadPage", function() { return CardDownloadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");







let CardDownloadPage = class CardDownloadPage {
    constructor(route, apiService, platform, toast, navCtrl, screenshot) {
        this.route = route;
        this.apiService = apiService;
        this.platform = platform;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.screenshot = screenshot;
        this.state = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.cardSO = params['card'];
        });
        console.log('id', this.cardSO);
        this.viewCard(this.id);
    }
    // ionViewWillEnter(){
    //   this.save();
    // }
    viewCard(ids) {
        console.log(ids);
        this.apiService.getCard(ids)
            .subscribe((data) => //Start Service
         {
            this.cardid = data[0]['_id'];
            this.card = data[0]['card'];
            this.cellNoSharing = data[0]['card'].cellNoSharing;
            this.multipleShare = data[0]['card'].mutipleShare;
            console.log(!this.multipleShare);
        }, err => {
            console.log(err);
            console.log(err.statusText);
        });
        // this.save();
    }
    save() {
        // alert("done;");
        if (this.card['download'] == true || this.card['download'] == undefined || this.cardSO == "own") {
            if (this.card['mutipleShare'] == false)
                this.updatedownload(this.cardid, this.multipleShare);
            console.log('run');
            this.screenshot.save('jpg', 80, this.cardid).then(res => {
                this.screen = res.filePath;
                this.state = true;
                this.toast.show('Card Save', '5000', 'bottom').subscribe(toast => {
                    console.log(toast);
                });
                this.navCtrl.navigateForward(['card-list/']);
                this.reset();
            });
        }
        else
            this.toast.show('Download not Allowed', '5000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
    }
    updatedownload(cardid, multipleShare) {
        console.log(multipleShare);
        this.apiService.updateDownload(cardid, multipleShare)
            .subscribe((data) => //Start Service
         {
            console.log(data);
        }, err => {
            console.log(err);
            console.log(err.statusText);
        });
    }
    reset() {
        var self = this;
        setTimeout(function () {
            self.state = false;
            this.download = false;
        }, 1000);
    }
};
CardDownloadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_4__["Screenshot"] }
];
CardDownloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-download',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-download.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-download.page.scss */ "./src/app/card-download/card-download.page.scss")).default]
    })
], CardDownloadPage);



/***/ })

}]);
//# sourceMappingURL=card-download-card-download-module-es2015.js.map