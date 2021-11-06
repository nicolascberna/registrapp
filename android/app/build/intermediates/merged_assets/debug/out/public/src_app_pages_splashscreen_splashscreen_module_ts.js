"use strict";
(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_splashscreen_splashscreen_module_ts"],{

/***/ 520:
/*!*******************************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageRoutingModule": () => (/* binding */ SplashscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageModule": () => (/* binding */ SplashscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPage": () => (/* binding */ SplashscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_nicol_Desktop_Ionic_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./splashscreen.page.html */ 7291);
/* harmony import */ var _splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page.scss */ 8935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





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
        template: _C_Users_nicol_Desktop_Ionic_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashscreenPage);



/***/ }),

/***/ 7291:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/splashscreen/splashscreen.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"firstScreen\" [fullscreen]=\"true\">\r\n\r\n  <ion-grid class=\"logo\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col>\r\n        <ion-img src=\"\\assets\\icon\\light-logo.svg\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ 8935:
/*!***********************************************************!*\
  !*** ./src/app/pages/splashscreen/splashscreen.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  margin-top: 250px;\n  width: 35%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsVUFBVTtBQUNkIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splashscreen_splashscreen_module_ts.js.map