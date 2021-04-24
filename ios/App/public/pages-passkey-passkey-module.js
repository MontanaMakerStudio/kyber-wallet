(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-passkey-passkey-module"],{

/***/ "2IFA":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passkey/passkey.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>passkey</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "CIOo":
/*!*********************************************************!*\
  !*** ./src/app/pages/passkey/passkey-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PasskeyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasskeyPageRoutingModule", function() { return PasskeyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _passkey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passkey.page */ "mwBA");




const routes = [
    {
        path: '',
        component: _passkey_page__WEBPACK_IMPORTED_MODULE_3__["PasskeyPage"]
    }
];
let PasskeyPageRoutingModule = class PasskeyPageRoutingModule {
};
PasskeyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasskeyPageRoutingModule);



/***/ }),

/***/ "P4L1":
/*!*************************************************!*\
  !*** ./src/app/pages/passkey/passkey.module.ts ***!
  \*************************************************/
/*! exports provided: PasskeyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasskeyPageModule", function() { return PasskeyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _passkey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passkey-routing.module */ "CIOo");
/* harmony import */ var _passkey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passkey.page */ "mwBA");







let PasskeyPageModule = class PasskeyPageModule {
};
PasskeyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _passkey_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasskeyPageRoutingModule"]
        ],
        declarations: [_passkey_page__WEBPACK_IMPORTED_MODULE_6__["PasskeyPage"]]
    })
], PasskeyPageModule);



/***/ }),

/***/ "mwBA":
/*!***********************************************!*\
  !*** ./src/app/pages/passkey/passkey.page.ts ***!
  \***********************************************/
/*! exports provided: PasskeyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasskeyPage", function() { return PasskeyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_passkey_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./passkey.page.html */ "2IFA");
/* harmony import */ var _passkey_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passkey.page.scss */ "v8Re");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PasskeyPage = class PasskeyPage {
    constructor() { }
    ngOnInit() {
    }
};
PasskeyPage.ctorParameters = () => [];
PasskeyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passkey',
        template: _raw_loader_passkey_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passkey_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PasskeyPage);



/***/ }),

/***/ "v8Re":
/*!*************************************************!*\
  !*** ./src/app/pages/passkey/passkey.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNza2V5LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-passkey-passkey-module.js.map