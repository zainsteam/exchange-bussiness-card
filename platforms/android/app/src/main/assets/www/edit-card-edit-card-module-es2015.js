(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-card-edit-card-module"],{

/***/ "./src/app/edit-card/edit-card-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-card/edit-card-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCardPageRoutingModule", function() { return EditCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-card.page */ "./src/app/edit-card/edit-card.page.ts");




const routes = [
    {
        path: '',
        component: _edit_card_page__WEBPACK_IMPORTED_MODULE_3__["EditCardPage"]
    }
];
let EditCardPageRoutingModule = class EditCardPageRoutingModule {
};
EditCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditCardPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-card/edit-card.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-card/edit-card.module.ts ***!
  \***********************************************/
/*! exports provided: EditCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCardPageModule", function() { return EditCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-card-routing.module */ "./src/app/edit-card/edit-card-routing.module.ts");
/* harmony import */ var _edit_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-card.page */ "./src/app/edit-card/edit-card.page.ts");







let EditCardPageModule = class EditCardPageModule {
};
EditCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCardPageRoutingModule"]
        ],
        declarations: [_edit_card_page__WEBPACK_IMPORTED_MODULE_6__["EditCardPage"]]
    })
], EditCardPageModule);



/***/ })

}]);
//# sourceMappingURL=edit-card-edit-card-module-es2015.js.map