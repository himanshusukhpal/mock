(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./home.page */ "zpKS")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, home_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomePageRoutingModule = void 0;
    const routes = [
        {
            path: '',
            component: home_page_1.HomePage,
        }
    ];
    let HomePageRoutingModule = class HomePageRoutingModule {
    };
    HomePageRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HomePageRoutingModule);
    exports.HomePageRoutingModule = HomePageRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-title >\r\n      Home Page\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"auth-form\">\r\n\r\n  <ion-grid style=\"height: 50; padding: 10vw;\" >\r\n    <ion-row class=\"ion-align-items-center\">\r\n\r\n      <ion-col size-md=\"6\" offset-md=\"3\">\r\n        <div>\r\n          <ion-card style=\"height: 200%;\" class=\"design\" >\r\n\r\n            <ion-card-content>\r\n\r\n              <ion-button [routerLink]=\"['/signup']\" expand=\"block\" color=\"primary\" >Register</ion-button>\r\n\r\n          <ion-item-divider color=\"none\">Or</ion-item-divider>\r\n\r\n\r\n          <span class=\"already\">Already a user?</span>\r\n\r\n          <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"secondary\" >Sign In</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @ionic/angular */ "TEn/"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! ./home.page */ "zpKS"), __webpack_require__(/*! ./home-routing.module */ "A3+G")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, angular_1, forms_1, home_page_1, home_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomePageModule = void 0;
    let HomePageModule = class HomePageModule {
    };
    HomePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                home_routing_module_1.HomePageRoutingModule
            ],
            declarations: [home_page_1.HomePage]
        })
    ], HomePageModule);
    exports.HomePageModule = HomePageModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --background: url(\"https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/36%20Beautiful%20Big%20Background%20Image%20Website%20Designs.jpg\") 0 0/100% 100% no-repeat !important;\n  background-color: #fff;\n}\n\n#design {\n  background-size: 100%;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  width: 105vw !important;\n  height: 100vh !important;\n  margin-left: -10% !important;\n  background-attachment: fixed !important;\n  margin-top: -10% !important;\n  background-position: center center !important;\n  background-image: \"https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-blue-simple-solid-color-background-color-image_48192.jpg\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU1BO0VBQ0Usc0xBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0pBQUE7QUFIRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vY2RuMi5odWJzcG90Lm5ldC9odWJmcy80Mzk3ODgvQmxvZy9GZWF0dXJlZCUyMEltYWdlcy8zNiUyMEJlYXV0aWZ1bCUyMEJpZyUyMEJhY2tncm91bmQlMjBJbWFnZSUyMFdlYnNpdGUlMjBEZXNpZ25zLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2Rlc2lnbntcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwNXZ3IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTEwJSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTEwJSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogJ2h0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL3RodW1iX2JhY2svZnc4MDAvYmFja2dyb3VuZC8yMDE5MDIyMS9vdXJtaWQvcG5ndHJlZS1ibHVlLXNpbXBsZS1zb2xpZC1jb2xvci1iYWNrZ3JvdW5kLWNvbG9yLWltYWdlXzQ4MTkyLmpwZyc7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "mrSG"), __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomePage = void 0;
    let HomePage = class HomePage {
        constructor() { }
    };
    HomePage.ctorParameters = () => [];
    HomePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3").default,
            styles: [__webpack_require__(/*! ./home.page.scss */ "f6od").default]
        })
    ], HomePage);
    exports.HomePage = HomePage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=1.js.map