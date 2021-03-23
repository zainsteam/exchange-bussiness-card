(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-card-view-shared-card-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!download\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Shared Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"card\" class=\"card-background-page\">\r\n  <!-- <p>card downloading</p>\r\n  <p><b>Full Name: </b></p>\r\n  <p><b>CellNo: </b>{{card.cellNo}}</p>\r\n <p><b>Workplace: </b></p> -->\r\n \r\n <ion-card>\r\n  <img src=\"../../assets/img/cardimage.jpg  \"  style=\"max-width: none;\"/>\r\n  <div class=\"card-title\" style=\"margin: 2% 0 ;\"><b>Name: </b>{{card.name}} {{card.surname}}</div>\r\n  <div class=\"card-subtitle2\" style=\"margin: 2% 0 ;\"><b>Workplace: </b>{{card.Workplace}}</div>\r\n  <div class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Mobile no: </b>{{card.cellNo}}</div>\r\n  <div class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Email: </b>{{card.email}}</div>\r\n</ion-card>\r\n\r\n  <!-- <ion-item *ngIf=\"code\">\r\n    <p>{{code}}</p>\r\n  </ion-item> -->\r\n  <ion-row style=\"justify-content: center;margin-top: 5%;\" *ngIf=\"!download\">\r\n    <ion-button class=\"custom-buttom\" type=\"button\" shape=\"round\" (click)=\"gotoDownload(card)\">\r\n      View Full Card\r\n    </ion-button>\r\n    <!-- <ion-button expand=\"block\" type=\"button\" (click)=\"gencode(cardid)\" shape=\"round\">Generate Code / QRcode  </ion-button> -->\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/shared-card-view/shared-card-view-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared-card-view/shared-card-view-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SharedCardViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCardViewPageRoutingModule", function() { return SharedCardViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_card_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-card-view.page */ "./src/app/shared-card-view/shared-card-view.page.ts");




const routes = [
    {
        path: '',
        component: _shared_card_view_page__WEBPACK_IMPORTED_MODULE_3__["SharedCardViewPage"]
    }
];
let SharedCardViewPageRoutingModule = class SharedCardViewPageRoutingModule {
};
SharedCardViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SharedCardViewPageRoutingModule);



/***/ }),

/***/ "./src/app/shared-card-view/shared-card-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-card-view/shared-card-view.module.ts ***!
  \*************************************************************/
/*! exports provided: SharedCardViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCardViewPageModule", function() { return SharedCardViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-card-view-routing.module */ "./src/app/shared-card-view/shared-card-view-routing.module.ts");
/* harmony import */ var _shared_card_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-card-view.page */ "./src/app/shared-card-view/shared-card-view.page.ts");







let SharedCardViewPageModule = class SharedCardViewPageModule {
};
SharedCardViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharedCardViewPageRoutingModule"]
        ],
        declarations: [_shared_card_view_page__WEBPACK_IMPORTED_MODULE_6__["SharedCardViewPage"]]
    })
], SharedCardViewPageModule);



/***/ }),

/***/ "./src/app/shared-card-view/shared-card-view.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared-card-view/shared-card-view.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page .card-title {\n  top: 18%;\n  font-size: 2em;\n  right: 5%;\n  font-weight: bold;\n  color: #000;\n  text-transform: capitalize;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  top: 62%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle2 {\n  font-size: 1.5em;\n  top: 52%;\n  right: 5%;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNhcmQtdmlldy9FOlxcZXhjaGFuZ2UtYnVzc2luZXNzLWNhcmQvc3JjXFxhcHBcXHNoYXJlZC1jYXJkLXZpZXdcXHNoYXJlZC1jYXJkLXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY2FyZC12aWV3L3NoYXJlZC1jYXJkLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9JO0VBRUUsUUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBR0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNUTjtBRFlJO0VBQ0UsZ0JBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUNaTjtBRGVJO0VBQ0ksZ0JBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUNmUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jYXJkLXZpZXcvc2hhcmVkLWNhcmQtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTglO1xyXG4gICAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgICByaWdodDogNSU7XHJcbiAgICAgIC8vIGxlZnQ6NSU7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDYyJTtcclxuICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc3VidGl0bGUyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUyJTtcclxuICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgfSIsIi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHRvcDogMTglO1xuICBmb250LXNpemU6IDJlbTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdG9wOiA2MiU7XG4gIHJpZ2h0OiA1JTtcbiAgY29sb3I6ICMwMDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdG9wOiA1MiU7XG4gIHJpZ2h0OiA1JTtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-card-view/shared-card-view.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared-card-view/shared-card-view.page.ts ***!
  \***********************************************************/
/*! exports provided: SharedCardViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCardViewPage", function() { return SharedCardViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let SharedCardViewPage = class SharedCardViewPage {
    constructor(route, barcodeScanner, screenshot, apiService, navCtrl) {
        this.route = route;
        this.barcodeScanner = barcodeScanner;
        this.screenshot = screenshot;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.state = false;
        this.download = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.cardSO = params['card'];
        });
        console.log(this.cardSO);
        this.viewCard(this.id);
    }
    viewCard(ids) {
        console.log(ids);
        this.apiService.getCard(ids)
            .subscribe((data) => //Start Service
         {
            this.cardid = data[0]['_id'];
            this.card = data[0]['card'];
            console.log(this.card);
        }, err => {
            console.log(err);
            console.log(err.statusText);
        });
    }
    // gencode(id){
    //   console.log(id);
    //   this.apiService.genCode(id)
    //   .subscribe((data:any) => //Start Service
    //   {
    //     this.code = data['card'].code;
    //     this.encodedText(this.code);
    //     console.log(this.code);
    //   },
    //   err => {
    //     console.log(err);
    //     console.log(err.statusText);
    //   });
    // }
    encodedText(code) {
        this.encodeData = code;
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
            .then(encodedData => {
            console.log(encodedData);
        }, err => {
            console.log("Error occured : " + err);
        });
    }
    // Download(){
    //   this.download = true;
    //    setTimeout(function(){ 
    //     // self.state = false;
    //     alert('console.log');
    //     // this.download = false;
    //     this.save();
    //   }, 3000);
    // }
    gotoDownload() {
        // console.log(this.cardid);
        this.navCtrl.navigateForward(['card-download/'] + this.cardid + '/' + this.cardSO);
    }
};
SharedCardViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__["Screenshot"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
SharedCardViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shared-card-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shared-card-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shared-card-view.page.scss */ "./src/app/shared-card-view/shared-card-view.page.scss")).default]
    })
], SharedCardViewPage);



/***/ })

}]);
//# sourceMappingURL=shared-card-view-shared-card-view-module-es2015.js.map