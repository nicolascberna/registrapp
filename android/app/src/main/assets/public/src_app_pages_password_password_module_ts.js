(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_password_password_module_ts"],{

/***/ 6506:
/*!***********************************************************!*\
  !*** ./src/app/pages/password/password-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": () => (/* binding */ PasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page */ 9931);




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ 2302:
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": () => (/* binding */ PasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 6506);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 9931);







let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
    })
], PasswordPageModule);



/***/ }),

/***/ 9931:
/*!*************************************************!*\
  !*** ./src/app/pages/password/password.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./password.page.html */ 5565);
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss */ 2140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let PasswordPage = class PasswordPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    correoEnviado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Correo enviado satisfactoriamente',
                buttons: [{
                        text: 'Aceptar',
                        handler: () => {
                            this.router.navigate(['/restore-password']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    navigate(page) {
        this.router.navigate(page);
    }
};
PasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-password',
        template: _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PasswordPage);



/***/ }),

/***/ 2140:
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.pass-info {\n  margin-top: 60px;\n  text-align: center;\n}\n\n.pass-info h1 {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n\n.pass-info p {\n  font-size: 14px;\n  color: #636363;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n  margin-top: 40px;\n}\n\n.pass-inputs {\n  margin-top: 40px;\n}\n\n.back {\n  padding-left: 10px;\n}\n\n.icono {\n  margin-left: 10px;\n  margin-top: 40px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXNzLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhc3MtaW5mbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucGFzcy1pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2MzYzNjM7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucGFzcy1pbnB1dHMge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmJhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ubyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 5565:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password/password.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-app>\r\n\r\n    <ion-toolbar class=\"back ion-text-start\" >\r\n      <ion-icon (click)=\"navigate(['/login'])\" class=\"icono\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-toolbar>\r\n\r\n  <ion-content>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"pass-info\">\r\n        <h1>¿Olvidaste la contraseña?</h1>\r\n        <p>Ingresa el correo registrado a la cuenta para recuperar la contraseña</p>\r\n      </div>\r\n      <div class=\"pass-inputs\">\r\n        <ion-item>\r\n          <ion-input placeholder=\"ejemplo@registrapp.cl\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click)=\"correoEnviado()\" expand=\"block\">ENVIAR</ion-button>\r\n      </div>\r\n    </div>\r\n    \r\n  </ion-content>\r\n\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_password_password_module_ts.js.map