(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row className=\"ion-align-items-center\">\r\n      <ion-col size-md=\"6\" offset-md=\"3\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <form>\r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">First name</ion-label>\r\n                <ion-input type=\"text\" required></ion-input>\r\n              </ion-item>\r\n          \r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">Last name</ion-label>\r\n                <ion-input type=\"text\" required></ion-input>\r\n              </ion-item>\r\n          \r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">Email</ion-label>\r\n                <ion-input type=\"text\" required></ion-input>\r\n              </ion-item>\r\n          \r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">Password</ion-label>\r\n                <ion-input type=\"password\" required></ion-input>\r\n              </ion-item>\r\n          \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Sign Up</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./signup.page */ "yL7A")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, signup_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignupPageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: signup_page_1.SignupPage
        }
    ];
    let SignupPageRoutingModule = class SignupPageRoutingModule {
    };
    SignupPageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], SignupPageRoutingModule);
    exports.SignupPageRoutingModule = SignupPageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @ionic/angular */ "TEn/"), __webpack_require__(/*! ./signup-routing.module */ "RPFs"), __webpack_require__(/*! ./signup.page */ "yL7A")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, signup_routing_module_1, signup_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignupPageModule = void 0;
    let SignupPageModule = class SignupPageModule {
    };
    SignupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                signup_routing_module_1.SignupPageRoutingModule
            ],
            declarations: [signup_page_1.SignupPage]
        })
    ], SignupPageModule);
    exports.SignupPageModule = SignupPageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignupPage = void 0;
    let SignupPage = class SignupPage {
        constructor() { }
        ngOnInit() {
        }
    };
    SignupPage.ctorParameters = () => [];
    SignupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i").default,
            styles: [__webpack_require__(/*! ./signup.page.scss */ "fJgH").default]
        })
    ], SignupPage);
    exports.SignupPage = SignupPage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=4.js.map