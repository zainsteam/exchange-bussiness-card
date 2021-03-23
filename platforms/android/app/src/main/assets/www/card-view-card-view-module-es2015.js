(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-view-card-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-view/card-view.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-view/card-view.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!download\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"card\" class=\"card-background-page\">\r\n  <!-- <p>card downloading</p>\r\n  <p><b>Full Name: </b></p>\r\n  <p><b>CellNo: </b>{{card.cellNo}}</p>\r\n <p><b>Workplace: </b></p> -->\r\n \r\n <ion-card>\r\n  <img src=\"../../assets/img/cardimage.jpg  \"  style=\"max-width: none;\"/>\r\n  <div class=\"card-title\" style=\"margin: 2% 0 ;\"><b>Name: </b>{{card.name}} {{card.surname}}</div>\r\n  <div class=\"card-subtitle2\" style=\"margin: 2% 0 ;\"><b>Workplace: </b>{{card.Workplace}}</div>\r\n  <div *ngIf=\"cellNoSharing == true\" class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Mobile no: </b>{{card.cellNo}}</div>\r\n  <div class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Email: </b>{{card.email}}</div>\r\n\r\n</ion-card>\r\n\r\n<ion-row style=\"justify-content: center;margin-top: 2%;\">\r\n  <ion-checkbox  [(ngModel)]=\"Multiple\" ></ion-checkbox> <ion-label style=\"margin-left: 10px;\">Allow Multiple Download</ion-label>\r\n</ion-row  >\r\n\r\n  <!-- <ion-item *ngIf=\"code\">\r\n    <p>{{code}}</p>\r\n  </ion-item> -->\r\n  <ion-row style=\"justify-content: center;margin-top: 5%;\" *ngIf=\"!download\">\r\n    <ion-button class=\"custom-buttom\" type=\"button\" shape=\"round\" (click)=\"gotoDownload(card)\">\r\n      View Full Card\r\n    </ion-button>\r\n    <ion-button expand=\"block\" type=\"button\" (click)=\"gencode(cardid)\" shape=\"round\">Generate Code / QRcode  </ion-button>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/card-view/card-view-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/card-view/card-view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CardViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewPageRoutingModule", function() { return CardViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-view.page */ "./src/app/card-view/card-view.page.ts");




const routes = [
    {
        path: '',
        component: _card_view_page__WEBPACK_IMPORTED_MODULE_3__["CardViewPage"]
    }
];
let CardViewPageRoutingModule = class CardViewPageRoutingModule {
};
CardViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardViewPageRoutingModule);



/***/ }),

/***/ "./src/app/card-view/card-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/card-view/card-view.module.ts ***!
  \***********************************************/
/*! exports provided: CardViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewPageModule", function() { return CardViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-view-routing.module */ "./src/app/card-view/card-view-routing.module.ts");
/* harmony import */ var _card_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-view.page */ "./src/app/card-view/card-view.page.ts");







let CardViewPageModule = class CardViewPageModule {
};
CardViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardViewPageRoutingModule"]
        ],
        declarations: [_card_view_page__WEBPACK_IMPORTED_MODULE_6__["CardViewPage"]]
    })
], CardViewPageModule);



/***/ }),

/***/ "./src/app/card-view/card-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/card-view/card-view.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page .card-title {\n  top: 18%;\n  font-size: 2em;\n  right: 5%;\n  font-weight: bold;\n  color: #000;\n  text-transform: capitalize;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  top: 62%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle2 {\n  font-size: 1.5em;\n  top: 52%;\n  right: 5%;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC12aWV3L0U6XFxleGNoYW5nZS1idXNzaW5lc3MtY2FyZC9zcmNcXGFwcFxcY2FyZC12aWV3XFxjYXJkLXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkLXZpZXcvY2FyZC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUVFLFFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUdBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDWk47QURlSTtFQUNJLGdCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXZpZXcvY2FyZC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxOCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLy8gbGVmdDo1JTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNjIlO1xyXG4gICAgICByaWdodDogNSU7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1zdWJ0aXRsZTIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIlO1xyXG4gICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG5cclxuICB9IiwiLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICByaWdodDogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0b3A6IDYyJTtcbiAgcmlnaHQ6IDUlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZTIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0b3A6IDUyJTtcbiAgcmlnaHQ6IDUlO1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/card-view/card-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/card-view/card-view.page.ts ***!
  \*********************************************/
/*! exports provided: CardViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewPage", function() { return CardViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let CardViewPage = class CardViewPage {
    constructor(route, barcodeScanner, screenshot, apiService, navCtrl) {
        this.route = route;
        this.barcodeScanner = barcodeScanner;
        this.screenshot = screenshot;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.state = false;
        this.Multiple = false;
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
            this.cellNoSharing = data[0]['card'].cellNoSharing;
        }, err => {
            console.log(err);
            console.log(err.statusText);
        });
    }
    gencode(id) {
        console.log('multiple', this.Multiple);
        console.log(id);
        this.apiService.genCode(id, this.Multiple)
            .subscribe((data) => //Start Service
         {
            this.code = data['card'].code;
            this.encodedText(this.code);
            console.log(this.code);
        }, err => {
            console.log(err);
            console.log(err.statusText);
        });
    }
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
CardViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__["Screenshot"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
CardViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card-view/card-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-view.page.scss */ "./src/app/card-view/card-view.page.scss")).default]
    })
], CardViewPage);



/***/ })

}]);
//# sourceMappingURL=card-view-card-view-module-es2015.js.map