(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "2bN1":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForgotPasswordPage = void 0;
    let ForgotPasswordPage = class ForgotPasswordPage {
        constructor() { }
        ngOnInit() {
        }
    };
    ForgotPasswordPage.ctorParameters = () => [];
    ForgotPasswordPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "l7ks").default,
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "hxgU").default]
        })
    ], ForgotPasswordPage);
    exports.ForgotPasswordPage = ForgotPasswordPage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "JgOp":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @ionic/angular */ "TEn/"), __webpack_require__(/*! ./forgot-password-routing.module */ "RtEn"), __webpack_require__(/*! ./forgot-password.page */ "2bN1")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, forgot_password_routing_module_1, forgot_password_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForgotPasswordPageModule = void 0;
    let ForgotPasswordPageModule = class ForgotPasswordPageModule {
    };
    ForgotPasswordPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                forgot_password_routing_module_1.ForgotPasswordPageRoutingModule
            ],
            declarations: [forgot_password_page_1.ForgotPasswordPage]
        })
    ], ForgotPasswordPageModule);
    exports.ForgotPasswordPageModule = ForgotPasswordPageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "RtEn":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./forgot-password.page */ "2bN1")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, forgot_password_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForgotPasswordPageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: forgot_password_page_1.ForgotPasswordPage
        }
    ];
    let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
    };
    ForgotPasswordPageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ForgotPasswordPageRoutingModule);
    exports.ForgotPasswordPageRoutingModule = ForgotPasswordPageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "hxgU":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "l7ks":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reset Your Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"email\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Send</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <small>\r\n      Please provide the username or email address that you used when you signed\r\n      up .\r\n    </small>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=0.js.map