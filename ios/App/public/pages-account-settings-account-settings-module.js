(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-settings-account-settings-module"],{

/***/ "3ZRc":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageModule", function() { return AccountSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-settings-routing.module */ "MBq6");
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-settings.page */ "Z72i");







let AccountSettingsPageModule = class AccountSettingsPageModule {
};
AccountSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsPageRoutingModule"]
        ],
        declarations: [_account_settings_page__WEBPACK_IMPORTED_MODULE_6__["AccountSettingsPage"]]
    })
], AccountSettingsPageModule);



/***/ }),

/***/ "L8ZL":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "MBq6":
/*!***************************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccountSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageRoutingModule", function() { return AccountSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-settings.page */ "Z72i");




const routes = [
    {
        path: '',
        component: _account_settings_page__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsPage"]
    }
];
let AccountSettingsPageRoutingModule = class AccountSettingsPageRoutingModule {
};
AccountSettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountSettingsPageRoutingModule);



/***/ }),

/***/ "ObPO":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-settings/account-settings.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>account-settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "Z72i":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.ts ***!
  \*****************************************************************/
/*! exports provided: AccountSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPage", function() { return AccountSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-settings.page.html */ "ObPO");
/* harmony import */ var _account_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-settings.page.scss */ "L8ZL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AccountSettingsPage = class AccountSettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountSettingsPage.ctorParameters = () => [];
AccountSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-settings',
        template: _raw_loader_account_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountSettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-account-settings-account-settings-module.js.map