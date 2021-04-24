(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pin-pin-module"],{

/***/ "1Z18":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pin/pin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "WXuu":
/*!*************************************************!*\
  !*** ./src/app/pages/pin/pin-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageRoutingModule", function() { return PinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin.page */ "v7pT");




const routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_3__["PinPage"]
    }
];
let PinPageRoutingModule = class PinPageRoutingModule {
};
PinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PinPageRoutingModule);



/***/ }),

/***/ "oKaW":
/*!*****************************************!*\
  !*** ./src/app/pages/pin/pin.module.ts ***!
  \*****************************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pin-routing.module */ "WXuu");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "v7pT");







let PinPageModule = class PinPageModule {
};
PinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pin_routing_module__WEBPACK_IMPORTED_MODULE_5__["PinPageRoutingModule"]
        ],
        declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
    })
], PinPageModule);



/***/ }),

/***/ "pxm7":
/*!*****************************************!*\
  !*** ./src/app/pages/pin/pin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "v7pT":
/*!***************************************!*\
  !*** ./src/app/pages/pin/pin.page.ts ***!
  \***************************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pin.page.html */ "1Z18");
/* harmony import */ var _pin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin.page.scss */ "pxm7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PinPage = class PinPage {
    constructor() { }
    ngOnInit() {
    }
};
PinPage.ctorParameters = () => [];
PinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pin',
        template: _raw_loader_pin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PinPage);



/***/ })

}]);
//# sourceMappingURL=pages-pin-pin-module.js.map