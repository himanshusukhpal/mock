(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPage = void 0;
    let LoginPage = class LoginPage {
        constructor() { }
        ngOnInit() {
        }
    };
    LoginPage.ctorParameters = () => [];
    LoginPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie").default,
            styles: [__webpack_require__(/*! ./login.page.scss */ "r67e").default]
        })
    ], LoginPage);
    exports.LoginPage = LoginPage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Log In</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-md=\"6\" offset-md=\"3\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <form>\r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">Email</ion-label>\r\n                <ion-input type=\"text\" required id=\"email\" #email></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"full\">\r\n                <ion-label position=\"floating\">Password</ion-label>\r\n                <ion-input type=\"password\" id=\"password\" required></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button type=\"submit\" color=\"danger\" expand=\"block\" >Sign In</ion-button>\r\n                  <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a>\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @ionic/angular */ "TEn/"), __webpack_require__(/*! ./login-routing.module */ "euwS"), __webpack_require__(/*! ./login.page */ "34Y5")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, login_routing_module_1, login_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPageModule = void 0;
    let LoginPageModule = class LoginPageModule {
    };
    LoginPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                login_routing_module_1.LoginPageRoutingModule
            ],
            declarations: [login_page_1.LoginPage]
        })
    ], LoginPageModule);
    exports.LoginPageModule = LoginPageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./login.page */ "34Y5")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, login_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginPageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: login_page_1.LoginPage
        }
    ];
    let LoginPageRoutingModule = class LoginPageRoutingModule {
    };
    LoginPageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], LoginPageRoutingModule);
    exports.LoginPageRoutingModule = LoginPageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=3.js.map