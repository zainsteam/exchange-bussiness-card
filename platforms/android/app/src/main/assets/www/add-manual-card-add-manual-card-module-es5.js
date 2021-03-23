function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-manual-card-add-manual-card-module"], {
  /***/
  "./src/app/add-manual-card/add-manual-card-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/add-manual-card/add-manual-card-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddManualCardPageRoutingModule */

  /***/
  function srcAppAddManualCardAddManualCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddManualCardPageRoutingModule", function () {
      return AddManualCardPageRoutingModule;
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


    var _add_manual_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-manual-card.page */
    "./src/app/add-manual-card/add-manual-card.page.ts");

    var routes = [{
      path: '',
      component: _add_manual_card_page__WEBPACK_IMPORTED_MODULE_3__["AddManualCardPage"]
    }];

    var AddManualCardPageRoutingModule = function AddManualCardPageRoutingModule() {
      _classCallCheck(this, AddManualCardPageRoutingModule);
    };

    AddManualCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddManualCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-manual-card/add-manual-card.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-manual-card/add-manual-card.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddManualCardPageModule */

  /***/
  function srcAppAddManualCardAddManualCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddManualCardPageModule", function () {
      return AddManualCardPageModule;
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


    var _add_manual_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-manual-card-routing.module */
    "./src/app/add-manual-card/add-manual-card-routing.module.ts");
    /* harmony import */


    var _add_manual_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-manual-card.page */
    "./src/app/add-manual-card/add-manual-card.page.ts");

    var AddManualCardPageModule = function AddManualCardPageModule() {
      _classCallCheck(this, AddManualCardPageModule);
    };

    AddManualCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_manual_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddManualCardPageRoutingModule"]],
      declarations: [_add_manual_card_page__WEBPACK_IMPORTED_MODULE_6__["AddManualCardPage"]]
    })], AddManualCardPageModule);
    /***/
  }
}]);
//# sourceMappingURL=add-manual-card-add-manual-card-module-es5.js.map