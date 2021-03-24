function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-card-view-shared-card-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCardViewSharedCardViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"!download\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Shared Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"card\" class=\"card-background-page\">\r\n  <!-- <p>card downloading</p>\r\n  <p><b>Full Name: </b></p>\r\n  <p><b>CellNo: </b>{{card.cellNo}}</p>\r\n <p><b>Workplace: </b></p> -->\r\n \r\n <ion-card>\r\n  <img src=\"../../assets/img/cardimage.jpg  \"  style=\"max-width: none;\"/>\r\n  <div class=\"card-title\" style=\"margin: 2% 0 ;\"><b>Name: </b>{{card.name}} {{card.surname}}</div>\r\n  <div class=\"card-subtitle2\" style=\"margin: 2% 0 ;\"><b>Workplace: </b>{{card.Workplace}}</div>\r\n  <div class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Mobile no: </b>{{card.cellNo}}</div>\r\n  <div class=\"card-subtitle\" style=\"margin: 2% 0 ;\"><b>Email: </b>{{card.email}}</div>\r\n</ion-card>\r\n\r\n  <!-- <ion-item *ngIf=\"code\">\r\n    <p>{{code}}</p>\r\n  </ion-item> -->\r\n  <ion-row style=\"justify-content: center;margin-top: 5%;\" *ngIf=\"!download\">\r\n    <ion-button class=\"custom-buttom\" type=\"button\" shape=\"round\" (click)=\"gotoDownload(card)\">\r\n      View Full Card\r\n    </ion-button>\r\n    <!-- <ion-button expand=\"block\" type=\"button\" (click)=\"gencode(cardid)\" shape=\"round\">Generate Code / QRcode  </ion-button> -->\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/shared-card-view/shared-card-view-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared-card-view/shared-card-view-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SharedCardViewPageRoutingModule */

  /***/
  function srcAppSharedCardViewSharedCardViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedCardViewPageRoutingModule", function () {
      return SharedCardViewPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_card_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-card-view.page */
    "./src/app/shared-card-view/shared-card-view.page.ts");

    var routes = [{
      path: '',
      component: _shared_card_view_page__WEBPACK_IMPORTED_MODULE_3__["SharedCardViewPage"]
    }];

    var SharedCardViewPageRoutingModule = function SharedCardViewPageRoutingModule() {
      _classCallCheck(this, SharedCardViewPageRoutingModule);
    };

    SharedCardViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharedCardViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shared-card-view/shared-card-view.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared-card-view/shared-card-view.module.ts ***!
    \*************************************************************/

  /*! exports provided: SharedCardViewPageModule */

  /***/
  function srcAppSharedCardViewSharedCardViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedCardViewPageModule", function () {
      return SharedCardViewPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared-card-view-routing.module */
    "./src/app/shared-card-view/shared-card-view-routing.module.ts");
    /* harmony import */


    var _shared_card_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared-card-view.page */
    "./src/app/shared-card-view/shared-card-view.page.ts");

    var SharedCardViewPageModule = function SharedCardViewPageModule() {
      _classCallCheck(this, SharedCardViewPageModule);
    };

    SharedCardViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_card_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharedCardViewPageRoutingModule"]],
      declarations: [_shared_card_view_page__WEBPACK_IMPORTED_MODULE_6__["SharedCardViewPage"]]
    })], SharedCardViewPageModule);
    /***/
  },

  /***/
  "./src/app/shared-card-view/shared-card-view.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shared-card-view/shared-card-view.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCardViewSharedCardViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-background-page .card-title {\n  top: 18%;\n  font-size: 2em;\n  right: 5%;\n  font-weight: bold;\n  color: #000;\n  text-transform: capitalize;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  top: 62%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle2 {\n  font-size: 1.5em;\n  top: 52%;\n  right: 5%;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNhcmQtdmlldy9FOlxcaW9uaWNcXGV4Y2hhbmdlLWJ1c3NpbmVzcy1jYXJkL3NyY1xcYXBwXFxzaGFyZWQtY2FyZC12aWV3XFxzaGFyZWQtY2FyZC12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNhcmQtdmlldy9zaGFyZWQtY2FyZC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUVFLFFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUdBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDWk47QURlSTtFQUNJLGdCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY2FyZC12aWV3L3NoYXJlZC1jYXJkLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE4JTtcclxuICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAvLyBsZWZ0OjUlO1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA2MiU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXN1YnRpdGxlMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MiU7XHJcbiAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcblxyXG4gIH0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGUge1xuICB0b3A6IDE4JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRvcDogNjIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRvcDogNTIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared-card-view/shared-card-view.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared-card-view/shared-card-view.page.ts ***!
    \***********************************************************/

  /*! exports provided: SharedCardViewPage */

  /***/
  function srcAppSharedCardViewSharedCardViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedCardViewPage", function () {
      return SharedCardViewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SharedCardViewPage = /*#__PURE__*/function () {
      function SharedCardViewPage(route, barcodeScanner, screenshot, apiService, navCtrl) {
        _classCallCheck(this, SharedCardViewPage);

        this.route = route;
        this.barcodeScanner = barcodeScanner;
        this.screenshot = screenshot;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.state = false;
        this.download = false;
      }

      _createClass(SharedCardViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.cardSO = params['card'];
          });
          console.log(this.cardSO);
          this.viewCard(this.id);
        }
      }, {
        key: "viewCard",
        value: function viewCard(ids) {
          var _this2 = this;

          console.log(ids);
          this.apiService.getCard(ids).subscribe(function (data) //Start Service
          {
            _this2.cardid = data[0]['_id'];
            _this2.card = data[0]['card'];
            console.log(_this2.card);
          }, function (err) {
            console.log(err);
            console.log(err.statusText);
          });
        } // gencode(id){
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

      }, {
        key: "encodedText",
        value: function encodedText(code) {
          this.encodeData = code;
          this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            console.log(encodedData);
          }, function (err) {
            console.log("Error occured : " + err);
          });
        } // Download(){
        //   this.download = true;
        //    setTimeout(function(){ 
        //     // self.state = false;
        //     alert('console.log');
        //     // this.download = false;
        //     this.save();
        //   }, 3000);
        // }

      }, {
        key: "gotoDownload",
        value: function gotoDownload() {
          // console.log(this.cardid);
          this.navCtrl.navigateForward(['card-download/'] + this.cardid + '/' + this.cardSO);
        }
      }]);

      return SharedCardViewPage;
    }();

    SharedCardViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
      }, {
        type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_5__["Screenshot"]
      }, {
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    SharedCardViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shared-card-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shared-card-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-card-view/shared-card-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shared-card-view.page.scss */
      "./src/app/shared-card-view/shared-card-view.page.scss"))["default"]]
    })], SharedCardViewPage);
    /***/
  }
}]);
//# sourceMappingURL=shared-card-view-shared-card-view-module-es5.js.map