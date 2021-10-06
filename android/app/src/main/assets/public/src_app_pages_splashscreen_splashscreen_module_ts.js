(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_splashscreen_splashscreen_module_ts"],{

/***/ 520:
/*!*******************************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageRoutingModule": () => (/* binding */ SplashscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen.page */ 1833);




const routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPage
    }
];
let SplashscreenPageRoutingModule = class SplashscreenPageRoutingModule {
};
SplashscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashscreenPageRoutingModule);



/***/ }),

/***/ 4236:
/*!***********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageModule": () => (/* binding */ SplashscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen-routing.module */ 520);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page */ 1833);







let SplashscreenPageModule = class SplashscreenPageModule {
};
SplashscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPageRoutingModule
        ],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_1__.SplashscreenPage]
    })
], SplashscreenPageModule);



/***/ }),

/***/ 1833:
/*!*********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPage": () => (/* binding */ SplashscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splashscreen.page.html */ 7021);
/* harmony import */ var _splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page.scss */ 5671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let SplashscreenPage = class SplashscreenPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.navigateToPage();
        }, 1000);
    }
    navigateToPage() {
        this.router.navigate(['/login']);
    }
};
SplashscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splashscreen',
        template: _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashscreenPage);



/***/ }),

/***/ 5671:
/*!***********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(#00EBB2, #109475);\n}\n\n.logo {\n  margin-top: 250px;\n  width: 35%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBYTtBQUNqQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixVQUFVO0FBQ2QiLCJmaWxlIjoic3BsYXNoc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMEVCQjIsICMxMDk0NzUpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn0iXX0= */");

/***/ }),

/***/ 7021:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splashscreen/splashscreen.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n\n  <ion-grid class=\"logo\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n        <ion-img src=\"\\assets\\icon\\light-logo.svg\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splashscreen_splashscreen_module_ts.js.map