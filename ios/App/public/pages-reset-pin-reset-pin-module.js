(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-pin-reset-pin-module"],{

/***/ "1WLT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-pin/reset-pin.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reset-pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "CUEd":
/*!*****************************************************!*\
  !*** ./src/app/pages/reset-pin/reset-pin.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1waW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GBg5":
/*!*****************************************************!*\
  !*** ./src/app/pages/reset-pin/reset-pin.module.ts ***!
  \*****************************************************/
/*! exports provided: ResetPinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPinPageModule", function() { return ResetPinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-pin-routing.module */ "demv");
/* harmony import */ var _reset_pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-pin.page */ "rvma");







let ResetPinPageModule = class ResetPinPageModule {
};
ResetPinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPinPageRoutingModule"]
        ],
        declarations: [_reset_pin_page__WEBPACK_IMPORTED_MODULE_6__["ResetPinPage"]]
    })
], ResetPinPageModule);



/***/ }),

/***/ "demv":
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-pin/reset-pin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ResetPinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPinPageRoutingModule", function() { return ResetPinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-pin.page */ "rvma");




const routes = [
    {
        path: '',
        component: _reset_pin_page__WEBPACK_IMPORTED_MODULE_3__["ResetPinPage"]
    }
];
let ResetPinPageRoutingModule = class ResetPinPageRoutingModule {
};
ResetPinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPinPageRoutingModule);



/***/ }),

/***/ "rvma":
/*!***************************************************!*\
  !*** ./src/app/pages/reset-pin/reset-pin.page.ts ***!
  \***************************************************/
/*! exports provided: ResetPinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPinPage", function() { return ResetPinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-pin.page.html */ "1WLT");
/* harmony import */ var _reset_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-pin.page.scss */ "CUEd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ResetPinPage = class ResetPinPage {
    constructor() { }
    ngOnInit() {
    }
};
ResetPinPage.ctorParameters = () => [];
ResetPinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-pin',
        template: _raw_loader_reset_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPinPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-pin-reset-pin-module.js.map