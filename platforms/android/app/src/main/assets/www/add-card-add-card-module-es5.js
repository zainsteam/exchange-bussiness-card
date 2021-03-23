function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-card-add-card-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddCardAddCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>AddCard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin: 0 18% 0 18%;\" (click)=\"QRscan()\">\r\n    <ion-item lines=\"none\" style=\" padding:0 !important\">\r\n      <img src=\"assets/qr.png\" style=\"margin: 10% auto 3%;width: 155px;\" />\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" >\r\n      <ion-icon name=\"camera\" style=\"font-size: 72px;margin-left: 5%;\"></ion-icon> \r\n      <p style=\"margin: 0 6%;\">use your phone to scan a QR code</p>\r\n    </ion-item>\r\n  </div>\r\n  <ion-input style=\"padding-left: 15px !important;border: 1px solid #888888;width: 50%; margin: 12px auto;border-radius: 22px\" placeholder=\"Enter The Code\" value=\"{{code}}\" [(ngModel)]=\"code\" type=\"text\" maxlength=\"4\" (ngModelChange)=\"codefun(code)\"></ion-input>\r\n  <ion-row style=\"justify-content: center;margin-top: 5%;\">\r\n  <ion-button expand=\"block\" type=\"button\" (click)=\"presentModal()\"  shape=\"round\">Add Visiting Card Manualy </ion-button>\r\n  </ion-row>\r\n \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-card/add-card-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-card/add-card-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddCardPageRoutingModule */

  /***/
  function srcAppAddCardAddCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function () {
      return AddCardPageRoutingModule;
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


    var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-card.page */
    "./src/app/add-card/add-card.page.ts");

    var routes = [{
      path: '',
      component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }];

    var AddCardPageRoutingModule = function AddCardPageRoutingModule() {
      _classCallCheck(this, AddCardPageRoutingModule);
    };

    AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-card/add-card.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-card/add-card.module.ts ***!
    \*********************************************/

  /*! exports provided: AddCardPageModule */

  /***/
  function srcAppAddCardAddCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function () {
      return AddCardPageModule;
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


    var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-card-routing.module */
    "./src/app/add-card/add-card-routing.module.ts");
    /* harmony import */


    var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-card.page */
    "./src/app/add-card/add-card.page.ts");

    var AddCardPageModule = function AddCardPageModule() {
      _classCallCheck(this, AddCardPageModule);
    };

    AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]],
      declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })], AddCardPageModule);
    /***/
  },

  /***/
  "./src/app/add-card/add-card.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-card/add-card.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddCardAddCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/add-card/add-card.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-card/add-card.page.ts ***!
    \*******************************************/

  /*! exports provided: AddCardPage */

  /***/
  function srcAppAddCardAddCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPage", function () {
      return AddCardPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_manual_card_add_manual_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add-manual-card/add-manual-card.page */
    "./src/app/add-manual-card/add-manual-card.page.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");

    var AddCardPage = /*#__PURE__*/function () {
      function AddCardPage(modalController, barcodeScanner, apiService, toast, navCtrl) {
        _classCallCheck(this, AddCardPage);

        this.modalController = modalController;
        this.barcodeScanner = barcodeScanner;
        this.apiService = apiService;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.Multiple = true;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        console.log('userId', this.userId);
      }

      _createClass(AddCardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _add_manual_card_add_manual_card_page__WEBPACK_IMPORTED_MODULE_3__["AddManualCardPage"],
                      cssClass: 'my-custom-class'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "QRscan",
        value: function QRscan() {
          var _this = this;

          console.log("QR code scanning");
          var id = this.userId;
          var flag = false;
          this.barcodeScanner.scan().then(function (barcodeData) {
            _this.code = barcodeData.text;

            _this.api(_this.code, id);
          })["catch"](function (err) {
            console.log('Error', err);
          });
        }
      }, {
        key: "api",
        value: function api(input, id) {
          var _this2 = this;

          this.apiService.cardAddbyCode(input, id).subscribe(function (data) //Start Service
          {
            console.log('data', data);

            _this2.toast.show("Card Successfully Added ", '5000', 'bottom').subscribe(function (toast) {
              console.log(toast);
            });

            _this2.navCtrl.navigateRoot('/card-list');
          }, function (err) {
            console.log('error 1', err);

            _this2.toast.show(err.statusText, '5000', 'bottom').subscribe(function (toast) {
              console.log(toast);
            });

            console.log('error 2', err.statusText);
          });
        }
      }, {
        key: "codefun",
        value: function codefun(input) {
          this.code = input;
          var id = this.userId;

          if (this.code.length == 4) {
            this.api(input, id);
          }
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          console.log("fetching data");
        }
      }]);

      return AddCardPage;
    }();

    AddCardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
      }, {
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-card.page.scss */
      "./src/app/add-card/add-card.page.scss"))["default"]]
    })], AddCardPage);
    /***/
  }
}]);
//# sourceMappingURL=add-card-add-card-module-es5.js.map