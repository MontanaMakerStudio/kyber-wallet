(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-pass-reset-pass-module"],{

/***/ "BFa7":
/*!*****************************************************!*\
  !*** ./src/app/pages/reset-pass/reset-pass.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPage", function() { return ResetPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_pass_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-pass.page.html */ "QtSt");
/* harmony import */ var _reset_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-pass.page.scss */ "Qjch");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ResetPassPage = class ResetPassPage {
    constructor() { }
    ngOnInit() {
    }
};
ResetPassPage.ctorParameters = () => [];
ResetPassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-pass',
        template: _raw_loader_reset_pass_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPassPage);



/***/ }),

/***/ "Plc9":
/*!*******************************************************!*\
  !*** ./src/app/pages/reset-pass/reset-pass.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageModule", function() { return ResetPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-pass-routing.module */ "ffFZ");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-pass.page */ "BFa7");







let ResetPassPageModule = class ResetPassPageModule {
};
ResetPassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPassPageRoutingModule"]
        ],
        declarations: [_reset_pass_page__WEBPACK_IMPORTED_MODULE_6__["ResetPassPage"]]
    })
], ResetPassPageModule);



/***/ }),

/***/ "Qjch":
/*!*******************************************************!*\
  !*** ./src/app/pages/reset-pass/reset-pass.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "QtSt":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-pass/reset-pass.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reset-pass</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "ffFZ":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-pass/reset-pass-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageRoutingModule", function() { return ResetPassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-pass.page */ "BFa7");




const routes = [
    {
        path: '',
        component: _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__["ResetPassPage"]
    }
];
let ResetPassPageRoutingModule = class ResetPassPageRoutingModule {
};
ResetPassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPassPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-reset-pass-reset-pass-module.js.map