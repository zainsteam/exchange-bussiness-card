function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-list-card-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardListCardListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>CardList</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Your cards\r\n    </ion-label>\r\n  </ion-item-divider>\r\n  <ion-label *ngIf=\"!flag1\" style=\"text-align: center;\">----   no cards added   ----</ion-label>\r\n  <ion-list *ngFor=\"let item of cards\">\r\n    <ion-item lines=\"none\" style=\"border-bottom: 1px solid #dbdada;\">\r\n      <ion-label class=\"ion-text-wrap\" (click)=\"viewCard(item._id)\">\r\n        <ion-text color=\"primary\">\r\n          <h1  style=\"font-size: 20px;\"><b>Full Name : </b> {{item.card.name}} {{item.card.surname}}</h1>\r\n        </ion-text>\r\n        <!-- <p>{{item.card.cellNo}}</p> -->\r\n        <ion-text color=\"secondary\">\r\n          <p><b>Workplace : </b>{{item.card.Workplace}}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"presentModal(item._id)\">Edit</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n  </ion-item-group>\r\n  <ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Your Shared cards\r\n    </ion-label>\r\n  </ion-item-divider>\r\n  <ion-label *ngIf=\"!flag2\" style=\"text-align: center;\">----   no cards added   ----</ion-label>\r\n  <ion-list *ngFor=\"let item of yourcards\">\r\n    <ion-item lines=\"none\" style=\"border-bottom: 1px solid #dbdada;\">\r\n      <ion-label class=\"ion-text-wrap\" (click)=\"sharedviewCard(item._id)\">\r\n        <ion-text color=\"primary\">\r\n          <h1  style=\"font-size: 20px;\"><b>Full Name : </b> {{item.card.name}} {{item.card.surname}}</h1>\r\n        </ion-text>\r\n        <!-- <p>{{item.card.cellNo}}</p> -->\r\n        <ion-text color=\"secondary\">\r\n          <p><b>Workplace : </b>{{item.card.Workplace}}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  </ion-item-group>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/card-list/card-list-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/card-list/card-list-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CardListPageRoutingModule */

  /***/
  function srcAppCardListCardListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListPageRoutingModule", function () {
      return CardListPageRoutingModule;
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


    var _card_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-list.page */
    "./src/app/card-list/card-list.page.ts");

    var routes = [{
      path: '',
      component: _card_list_page__WEBPACK_IMPORTED_MODULE_3__["CardListPage"]
    }];

    var CardListPageRoutingModule = function CardListPageRoutingModule() {
      _classCallCheck(this, CardListPageRoutingModule);
    };

    CardListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CardListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/card-list/card-list.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/card-list/card-list.module.ts ***!
    \***********************************************/

  /*! exports provided: CardListPageModule */

  /***/
  function srcAppCardListCardListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListPageModule", function () {
      return CardListPageModule;
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


    var _card_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card-list-routing.module */
    "./src/app/card-list/card-list-routing.module.ts");
    /* harmony import */


    var _card_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-list.page */
    "./src/app/card-list/card-list.page.ts");

    var CardListPageModule = function CardListPageModule() {
      _classCallCheck(this, CardListPageModule);
    };

    CardListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _card_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardListPageRoutingModule"]],
      declarations: [_card_list_page__WEBPACK_IMPORTED_MODULE_6__["CardListPage"]]
    })], CardListPageModule);
    /***/
  },

  /***/
  "./src/app/card-list/card-list.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/card-list/card-list.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardListCardListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-label {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1saXN0L0U6XFxleGNoYW5nZS1idXNzaW5lc3MtY2FyZC9zcmNcXGFwcFxcY2FyZC1saXN0XFxjYXJkLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDBCQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWxhYmVsIHtcclxucGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn0iLCIuaXRlbS1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/card-list/card-list.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/card-list/card-list.page.ts ***!
    \*********************************************/

  /*! exports provided: CardListPage */

  /***/
  function srcAppCardListCardListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListPage", function () {
      return CardListPage;
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


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../edit-card/edit-card.page */
    "./src/app/edit-card/edit-card.page.ts");

    var CardListPage = /*#__PURE__*/function () {
      function CardListPage(apiService, route, modalCtrl, navCtrl) {
        _classCallCheck(this, CardListPage);

        //   this.cardname = [{
        //     name : "zain",
        //    number : "03122880329",
        //    email : "zain@gmail.com",
        //    place : "malir"
        //  },{
        //     name : "basit",
        //    number : "03122880329",
        //    email : "basit@gmail.com",
        //    place : "malir"
        //  },{
        //     name : "arij",
        //    number : "03122880329",
        //    email : "arij@gmail.com",
        //    place : "nazimabad"
        //  },{
        //     name : "kamran",
        //    number : "03122880329",
        //    email : "kamran@gmail.com",
        //    place : "safora"
        //  }] 
        this.apiService = apiService;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.userId = JSON.parse(localStorage.getItem('userId'));
        console.log('userId', this.userId);
      }

      _createClass(CardListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCards();
        }
      }, {
        key: "sharedviewCard",
        value: function sharedviewCard(id) {
          console.log(id);
          var parm = "shared";
          this.navCtrl.navigateForward(['shared-card-view/'] + id + '/' + parm);
        }
      }, {
        key: "viewCard",
        value: function viewCard(id) {
          console.log(id);
          var parm = "own";
          this.navCtrl.navigateForward(['card-view/'] + id + '/' + parm); // this.route.navigate(['view-card',{id:id}])
          // this.navCtrl.back();
        }
      }, {
        key: "getCards",
        value: function getCards() {
          var _this = this;

          this.apiService.getCards(this.userId).subscribe(function (data) //Start Service
          {
            console.log(data);
            _this.cards = data;

            _this.getSharedCard();

            if (_this.cards.length > 0) _this.flag1 = true;
          }, function (err) {
            console.log(err);
            console.log(err.statusText);
          });
        }
      }, {
        key: "getSharedCard",
        value: function getSharedCard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.getSharedCards(this.userId).subscribe(function (data) //Start Service
                    {
                      console.log('shared', data);
                      _this2.yourcards = data;
                      if (_this2.yourcards.length > 0) _this2.flag2 = true; // for(var i = 0 ; i < data.length; i++){
                      //   console.log('asdasd');
                      //   this.cards.push(data[i]);
                      // }
                    }, function (err) {
                      console.log(err);
                      console.log(err.statusText);
                    });

                  case 2:
                    console.log('after', this.cards);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // editCard(cardId) {
        //   console.log("editCard run");
        //   console.log("cardId ", cardId);
        //   this.navCtrl.navigateForward(['edit-card/']+cardId);
        // }

      }, {
        key: "presentModal",
        value: function presentModal(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _edit_card_edit_card_page__WEBPACK_IMPORTED_MODULE_5__["EditCardPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        id: id
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this3.ngOnInit();

                      console.log("hello again");
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CardListPage;
    }();

    CardListPage.ctorParameters = function () {
      return [{
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    CardListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-list/card-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-list.page.scss */
      "./src/app/card-list/card-list.page.scss"))["default"]]
    })], CardListPage);
    /***/
  }
}]);
//# sourceMappingURL=card-list-card-list-module-es5.js.map