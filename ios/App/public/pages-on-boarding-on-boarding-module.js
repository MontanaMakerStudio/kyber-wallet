(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-on-boarding-on-boarding-module"],{

/***/ "3foo":
/*!*****************************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OnBoardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPageRoutingModule", function() { return OnBoardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-boarding.page */ "Y9t2");




const routes = [
    {
        path: '',
        component: _on_boarding_page__WEBPACK_IMPORTED_MODULE_3__["OnBoardingPage"]
    }
];
let OnBoardingPageRoutingModule = class OnBoardingPageRoutingModule {
};
OnBoardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnBoardingPageRoutingModule);



/***/ }),

/***/ "Ihqs":
/*!*********************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.module.ts ***!
  \*********************************************************/
/*! exports provided: OnBoardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPageModule", function() { return OnBoardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-boarding-routing.module */ "3foo");
/* harmony import */ var _on_boarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding.page */ "Y9t2");







let OnBoardingPageModule = class OnBoardingPageModule {
};
OnBoardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnBoardingPageRoutingModule"]
        ],
        declarations: [_on_boarding_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingPage"]]
    })
], OnBoardingPageModule);



/***/ }),

/***/ "Wx8Y":
/*!*********************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbi1ib2FyZGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Y9t2":
/*!*******************************************************!*\
  !*** ./src/app/pages/on-boarding/on-boarding.page.ts ***!
  \*******************************************************/
/*! exports provided: OnBoardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPage", function() { return OnBoardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./on-boarding.page.html */ "b0wP");
/* harmony import */ var _on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-boarding.page.scss */ "Wx8Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OnBoardingPage = class OnBoardingPage {
    constructor() { }
    ngOnInit() {
    }
};
OnBoardingPage.ctorParameters = () => [];
OnBoardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-on-boarding',
        template: _raw_loader_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OnBoardingPage);



/***/ }),

/***/ "b0wP":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/on-boarding/on-boarding.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>on-boarding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-on-boarding-on-boarding-module.js.map