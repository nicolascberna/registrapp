(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_restore-password_restore-password_module_ts"],{

/***/ 8463:
/*!***************************************************************************!*\
  !*** ./src/app/pages/restore-password/restore-password-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestorePasswordPageRoutingModule": () => (/* binding */ RestorePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _restore_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restore-password.page */ 7491);




const routes = [
    {
        path: '',
        component: _restore_password_page__WEBPACK_IMPORTED_MODULE_0__.RestorePasswordPage
    }
];
let RestorePasswordPageRoutingModule = class RestorePasswordPageRoutingModule {
};
RestorePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestorePasswordPageRoutingModule);



/***/ }),

/***/ 9670:
/*!*******************************************************************!*\
  !*** ./src/app/pages/restore-password/restore-password.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestorePasswordPageModule": () => (/* binding */ RestorePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _restore_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restore-password-routing.module */ 8463);
/* harmony import */ var _restore_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restore-password.page */ 7491);







let RestorePasswordPageModule = class RestorePasswordPageModule {
};
RestorePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restore_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestorePasswordPageRoutingModule
        ],
        declarations: [_restore_password_page__WEBPACK_IMPORTED_MODULE_1__.RestorePasswordPage]
    })
], RestorePasswordPageModule);



/***/ }),

/***/ 7491:
/*!*****************************************************************!*\
  !*** ./src/app/pages/restore-password/restore-password.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestorePasswordPage": () => (/* binding */ RestorePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_restore_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./restore-password.page.html */ 4033);
/* harmony import */ var _restore_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restore-password.page.scss */ 8819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let RestorePasswordPage = class RestorePasswordPage {
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    /* este metodo llamara al metodo mostrar por medio de una alert */
    crearPass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Contraseña reestablecida',
                position: 'bottom',
                //duration: 10000,
                buttons: [{
                        text: 'Aceptar',
                        handler: () => {
                            this.router.navigate(['/login']);
                        }
                    }
                ]
            });
            yield toast.present();
        });
    }
    navigate(page) {
        this.router.navigate(page);
    }
};
RestorePasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
RestorePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-restore-password',
        template: _raw_loader_restore_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_restore_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RestorePasswordPage);



/***/ }),

/***/ 8819:
/*!*******************************************************************!*\
  !*** ./src/app/pages/restore-password/restore-password.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.pass-info {\n  margin-top: 60px;\n  text-align: center;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n  margin-top: 40px;\n}\n\n.pass-info h1 {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n\n.pass-info p {\n  font-size: 14px;\n  color: #636363;\n}\n\n.pass-inputs {\n  margin-top: 40px;\n}\n\n.back {\n  padding-left: 10px;\n}\n\n.icono {\n  margin-left: 10px;\n  margin-top: 40px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RvcmUtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoicmVzdG9yZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGFzcy1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucGFzcy1pbmZvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5wYXNzLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzYzNjM2MztcclxufVxyXG5cclxuLnBhc3MtaW5wdXRzIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */");

/***/ }),

/***/ 4033:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restore-password/restore-password.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-app>\r\n\r\n    <ion-toolbar class=\"back ion-text-start\" >\r\n      <ion-icon (click)=\"navigate(['/password'])\" class=\"icono\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-toolbar>\r\n\r\n  <ion-content>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"pass-info\">\r\n        <h1>Crear nueva contraseña</h1>\r\n        <p>La contraseña debe ser diferente a la utilizada anteriormente</p>\r\n      </div>\r\n      <div class=\"pass-inputs\">\r\n        <ion-item>\r\n          <ion-input  type=\"password\" placeholder=\"Nueva contraseña\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input  type=\"password\" placeholder=\"Confirme contraseña\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click)=\"crearPass()\" expand=\"block\">CREAR</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_restore-password_restore-password_module_ts.js.map