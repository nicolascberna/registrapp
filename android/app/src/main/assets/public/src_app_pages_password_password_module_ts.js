"use strict";
(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_password_password_module_ts"],{

/***/ 6506:
/*!***********************************************************!*\
  !*** ./src/app/pages/password/password-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": () => (/* binding */ PasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": () => (/* binding */ PasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 6506);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 9931);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": () => (/* binding */ PasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./password.page.html */ 6250);
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss */ 4949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);






let PasswordPage = class PasswordPage {
    constructor(router, alertController, toastController) {
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    submit() {
        console.log('Correo ingresado es ' + this.correo);
    }
    correoEnviado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.correo == null) {
                const toast = yield this.toastController.create({
                    message: 'Debe ingresar un correo valido.',
                    position: 'bottom',
                    duration: 2000
                });
                yield toast.present();
            }
            else {
                const alert = yield this.alertController.create({
                    backdropDismiss: false,
                    message: 'Correo enviado satisfactoriamente',
                    buttons: [{
                            text: 'Aceptar',
                            handler: () => {
                                this.router.navigate(['/login']);
                            }
                        }]
                });
                yield alert.present();
            }
        });
    }
};
PasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-password',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordPage);



/***/ }),

/***/ 6250:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/password/password.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n\r\n  <app-header titulo = \"\"></app-header>\r\n\r\n  <ion-content class=\"ion-padding\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"pass-info\">\r\n        <h1 id=\"titulo\">¿Olvidaste la contraseña?</h1>\r\n        <p>Ingresa el correo registrado a la cuenta para recuperar la contraseña</p>\r\n      </div>\r\n\r\n      <form #formulario=\"ngForm\" (ngSubmit)=\"submit()\">\r\n    \r\n        <ion-item>\r\n          <ion-input \r\n                    type=\"email\"  \r\n                    placeholder=\"correo@correo.com\"\r\n                    name=\"email\"\r\n                    [(ngModel)]=\"correo\"\r\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                    required>\r\n          </ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-button (click)=\"correoEnviado()\" \r\n                    type=\"submit\" \r\n                    expand=\"block\"\r\n                    [disabled]=\"formulario.invalid\">\r\n          Enviar\r\n        </ion-button>\r\n      </form>\r\n\r\n    </div>\r\n    \r\n  </ion-content>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ 4949:
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.pass-info {\n  margin-top: 60px;\n  text-align: center;\n}\n\n.pass-info h1 {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n\n.pass-info p {\n  font-size: 14px;\n  color: #636363;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 40px;\n}\n\n.pass-inputs {\n  margin-top: 40px;\n}\n\n.icono {\n  margin-left: 10px;\n  margin-top: 40px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFBbkIiLCJmaWxlIjoicGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhc3MtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFzcy1pbmZvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5wYXNzLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzYzNjM2MztcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5wYXNzLWlucHV0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLmljb25vIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_password_password_module_ts.js.map