(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "4ggA":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Jc7R":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./homepage.page */ "YlBd")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, homepage_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomepagePageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: homepage_page_1.HomepagePage
        }
    ];
    let HomepagePageRoutingModule = class HomepagePageRoutingModule {
    };
    HomepagePageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], HomepagePageRoutingModule);
    exports.HomepagePageRoutingModule = HomepagePageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "MnQ5":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>homepage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "YlBd":
/*!*******************************************!*\
  !*** ./src/app/homepage/homepage.page.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomepagePage = void 0;
    let HomepagePage = class HomepagePage {
        constructor() { }
        ngOnInit() {
        }
    };
    HomepagePage.ctorParameters = () => [];
    HomepagePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.page.html */ "MnQ5").default,
            styles: [__webpack_require__(/*! ./homepage.page.scss */ "4ggA").default]
        })
    ], HomepagePage);
    exports.HomepagePage = HomepagePage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "myIj":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @ionic/angular */ "TEn/"), __webpack_require__(/*! ./homepage-routing.module */ "Jc7R"), __webpack_require__(/*! ./homepage.page */ "YlBd")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, angular_1, homepage_routing_module_1, homepage_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomepagePageModule = void 0;
    let HomepagePageModule = class HomepagePageModule {
    };
    HomepagePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                homepage_routing_module_1.HomepagePageRoutingModule
            ],
            declarations: [homepage_page_1.HomepagePage]
        })
    ], HomepagePageModule);
    exports.HomepagePageModule = HomepagePageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=2.js.map