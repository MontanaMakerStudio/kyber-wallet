(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-init-authorize-init-authorize-module"],{

/***/ "BMJR":
/*!***************************************************************!*\
  !*** ./src/app/pages/init-authorize/init-authorize.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0LWF1dGhvcml6ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "VHmJ":
/*!***********************************************************************!*\
  !*** ./src/app/pages/init-authorize/init-authorize-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InitAuthorizePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAuthorizePageRoutingModule", function() { return InitAuthorizePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _init_authorize_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-authorize.page */ "xHFg");




const routes = [
    {
        path: '',
        component: _init_authorize_page__WEBPACK_IMPORTED_MODULE_3__["InitAuthorizePage"]
    }
];
let InitAuthorizePageRoutingModule = class InitAuthorizePageRoutingModule {
};
InitAuthorizePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InitAuthorizePageRoutingModule);



/***/ }),

/***/ "a39h":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/init-authorize/init-authorize.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>init-authorize</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "iEEo":
/*!***************************************************************!*\
  !*** ./src/app/pages/init-authorize/init-authorize.module.ts ***!
  \***************************************************************/
/*! exports provided: InitAuthorizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAuthorizePageModule", function() { return InitAuthorizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _init_authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init-authorize-routing.module */ "VHmJ");
/* harmony import */ var _init_authorize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init-authorize.page */ "xHFg");







let InitAuthorizePageModule = class InitAuthorizePageModule {
};
InitAuthorizePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _init_authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitAuthorizePageRoutingModule"]
        ],
        declarations: [_init_authorize_page__WEBPACK_IMPORTED_MODULE_6__["InitAuthorizePage"]]
    })
], InitAuthorizePageModule);



/***/ }),

/***/ "xHFg":
/*!*************************************************************!*\
  !*** ./src/app/pages/init-authorize/init-authorize.page.ts ***!
  \*************************************************************/
/*! exports provided: InitAuthorizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAuthorizePage", function() { return InitAuthorizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_init_authorize_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./init-authorize.page.html */ "a39h");
/* harmony import */ var _init_authorize_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-authorize.page.scss */ "BMJR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InitAuthorizePage = class InitAuthorizePage {
    constructor() { }
    ngOnInit() {
    }
};
InitAuthorizePage.ctorParameters = () => [];
InitAuthorizePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-init-authorize',
        template: _raw_loader_init_authorize_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_init_authorize_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InitAuthorizePage);



/***/ })

}]);
//# sourceMappingURL=pages-init-authorize-init-authorize-module.js.map