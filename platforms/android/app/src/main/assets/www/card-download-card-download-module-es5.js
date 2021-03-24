function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-download-card-download-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardDownloadCardDownloadPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content *ngIf=\"card\" class=\"card-background-page\">\r\n  <!-- <p>card downloading</p>\r\n  <p><b>Full Name: </b></p>\r\n  <p><b>CellNo: </b>{{card.cellNo}}</p>\r\n <p><b>Workplace: </b></p> -->\r\n \r\n <ion-card (click)=\"save()\"  style=\"margin: 32vh 0;\">\r\n  <img src=\"../../assets/img/cardimage.jpg  \"   style=\"max-width: none;\"/>\r\n  <div class=\"card-title\">{{card.name}} {{card.surname}}</div>\r\n  <div class=\"card-subtitle2\">{{card.email}}</div>\r\n  <div class=\"card-subtitle\">{{card.Workplace}}</div>\r\n  <div *ngIf=\"cellNoSharing\" class=\"card-subtitle3\">{{card.cellNo}}</div>\r\n\r\n  <div  class=\"card-subtitle4\">\r\n  <ion-icon name=\"arrow-down-circle-outline\"></ion-icon>\r\n  </div>\r\n</ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/card-download/card-download-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/card-download/card-download-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CardDownloadPageRoutingModule */

  /***/
  function srcAppCardDownloadCardDownloadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDownloadPageRoutingModule", function () {
      return CardDownloadPageRoutingModule;
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


    var _card_download_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-download.page */
    "./src/app/card-download/card-download.page.ts");

    var routes = [{
      path: '',
      component: _card_download_page__WEBPACK_IMPORTED_MODULE_3__["CardDownloadPage"]
    }];

    var CardDownloadPageRoutingModule = function CardDownloadPageRoutingModule() {
      _classCallCheck(this, CardDownloadPageRoutingModule);
    };

    CardDownloadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CardDownloadPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/card-download/card-download.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/card-download/card-download.module.ts ***!
    \*******************************************************/

  /*! exports provided: CardDownloadPageModule */

  /***/
  function srcAppCardDownloadCardDownloadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDownloadPageModule", function () {
      return CardDownloadPageModule;
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


    var _card_download_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card-download-routing.module */
    "./src/app/card-download/card-download-routing.module.ts");
    /* harmony import */


    var _card_download_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-download.page */
    "./src/app/card-download/card-download.page.ts");

    var CardDownloadPageModule = function CardDownloadPageModule() {
      _classCallCheck(this, CardDownloadPageModule);
    };

    CardDownloadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _card_download_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardDownloadPageRoutingModule"]],
      declarations: [_card_download_page__WEBPACK_IMPORTED_MODULE_6__["CardDownloadPage"]]
    })], CardDownloadPageModule);
    /***/
  },

  /***/
  "./src/app/card-download/card-download.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/card-download/card-download.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardDownloadCardDownloadPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 18%;\n  font-size: 2em;\n  right: 5%;\n  font-weight: bold;\n  color: #000;\n  text-transform: capitalize;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 62%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle2 {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle3 {\n  font-size: 1em;\n  position: absolute;\n  top: 42%;\n  right: 5%;\n  color: #000;\n}\n.card-background-page .card-subtitle4 {\n  font-size: 2.5em;\n  position: absolute;\n  top: 72%;\n  right: 5%;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1kb3dubG9hZC9FOlxcaW9uaWNcXGV4Y2hhbmdlLWJ1c3NpbmVzcy1jYXJkL3NyY1xcYXBwXFxjYXJkLWRvd25sb2FkXFxjYXJkLWRvd25sb2FkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyZC1kb3dubG9hZC9jYXJkLWRvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFHQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUNOSjtBRFNFO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDUk47QURXSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtBQ1ZOO0FEYUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0FDWk4iLCJmaWxlIjoic3JjL2FwcC9jYXJkLWRvd25sb2FkL2NhcmQtZG93bmxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOCU7XHJcbiAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgLy8gbGVmdDo1JTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjIlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXN1YnRpdGxlMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXN1YnRpdGxlMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA0MiU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXN1YnRpdGxlNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA3MiU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICByaWdodDogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYyJTtcbiAgcmlnaHQ6IDUlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZTIge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgcmlnaHQ6IDUlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZTMge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQyJTtcbiAgcmlnaHQ6IDUlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZTQge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzIlO1xuICByaWdodDogNSU7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/card-download/card-download.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/card-download/card-download.page.ts ***!
    \*****************************************************/

  /*! exports provided: CardDownloadPage */

  /***/
  function srcAppCardDownloadCardDownloadPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDownloadPage", function () {
      return CardDownloadPage;
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


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");

    var CardDownloadPage = /*#__PURE__*/function () {
      function CardDownloadPage(route, apiService, platform, toast, navCtrl, screenshot) {
        _classCallCheck(this, CardDownloadPage);

        this.route = route;
        this.apiService = apiService;
        this.platform = platform;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.screenshot = screenshot;
        this.state = false;
      }

      _createClass(CardDownloadPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.cardSO = params['card'];
          });
          console.log('id', this.cardSO);
          this.viewCard(this.id);
        } // ionViewWillEnter(){
        //   this.save();
        // }

      }, {
        key: "viewCard",
        value: function viewCard(ids) {
          var _this2 = this;

          console.log(ids);
          this.apiService.getCard(ids).subscribe(function (data) //Start Service
          {
            _this2.cardid = data[0]['_id'];
            _this2.card = data[0]['card'];
            _this2.cellNoSharing = data[0]['card'].cellNoSharing;
            _this2.multipleShare = data[0]['card'].mutipleShare;
            console.log(!_this2.multipleShare);
          }, function (err) {
            console.log(err);
            console.log(err.statusText);
          }); // this.save();
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          // alert("done;");
          if (this.card['download'] == true || this.card['download'] == undefined || this.cardSO == "own") {
            if (this.card['mutipleShare'] == false) this.updatedownload(this.cardid, this.multipleShare);
            console.log('run');
            this.screenshot.save('jpg', 80, this.cardid).then(function (res) {
              _this3.screen = res.filePath;
              _this3.state = true;

              _this3.toast.show('Card Save', '5000', 'bottom').subscribe(function (toast) {
                console.log(toast);
              });

              _this3.navCtrl.navigateForward(['card-list/']);

              _this3.reset();
            });
          } else this.toast.show('Download not Allowed', '5000', 'bottom').subscribe(function (toast) {
            console.log(toast);
          });
        }
      }, {
        key: "updatedownload",
        value: function updatedownload(cardid, multipleShare) {
          console.log(multipleShare);
          this.apiService.updateDownload(cardid, multipleShare).subscribe(function (data) //Start Service
          {
            console.log(data);
          }, function (err) {
            console.log(err);
            console.log(err.statusText);
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          var self = this;
          setTimeout(function () {
            self.state = false;
            this.download = false;
          }, 1000);
        }
      }]);

      return CardDownloadPage;
    }();

    CardDownloadPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_4__["Screenshot"]
      }];
    };

    CardDownloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-download',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-download.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-download/card-download.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-download.page.scss */
      "./src/app/card-download/card-download.page.scss"))["default"]]
    })], CardDownloadPage);
    /***/
  }
}]);
//# sourceMappingURL=card-download-card-download-module-es5.js.map