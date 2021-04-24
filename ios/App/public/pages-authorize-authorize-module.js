(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authorize-authorize-module"],{

/***/ "/ZGU":
/*!*****************************************************!*\
  !*** ./src/app/pages/authorize/authorize.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "/aA8":
/*!***************************************************!*\
  !*** ./src/app/pages/authorize/authorize.page.ts ***!
  \***************************************************/
/*! exports provided: AuthorizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizePage", function() { return AuthorizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_authorize_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./authorize.page.html */ "hGK2");
/* harmony import */ var _authorize_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize.page.scss */ "/ZGU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthorizePage = class AuthorizePage {
    constructor() { }
    ngOnInit() {
    }
};
AuthorizePage.ctorParameters = () => [];
AuthorizePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-authorize',
        template: _raw_loader_authorize_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authorize_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthorizePage);



/***/ }),

/***/ "N1d0":
/*!*************************************************************!*\
  !*** ./src/app/pages/authorize/authorize-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthorizePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizePageRoutingModule", function() { return AuthorizePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authorize_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorize.page */ "/aA8");




const routes = [
    {
        path: '',
        component: _authorize_page__WEBPACK_IMPORTED_MODULE_3__["AuthorizePage"]
    }
];
let AuthorizePageRoutingModule = class AuthorizePageRoutingModule {
};
AuthorizePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthorizePageRoutingModule);



/***/ }),

/***/ "hGK2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authorize/authorize.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>authorize</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "x+Bk":
/*!*****************************************************!*\
  !*** ./src/app/pages/authorize/authorize.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthorizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizePageModule", function() { return AuthorizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorize-routing.module */ "N1d0");
/* harmony import */ var _authorize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorize.page */ "/aA8");







let AuthorizePageModule = class AuthorizePageModule {
};
AuthorizePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthorizePageRoutingModule"]
        ],
        declarations: [_authorize_page__WEBPACK_IMPORTED_MODULE_6__["AuthorizePage"]]
    })
], AuthorizePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-authorize-authorize-module.js.map