"use strict";
(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_nicol_Desktop_Ionic_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 2032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);







let LoginPage = class LoginPage {
    constructor(loadingController, router, alertController, toastController, animationCtrl, navCtrl) {
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.animationCtrl = animationCtrl;
        this.navCtrl = navCtrl;
        /* objeto que guardara el usuario y contraseña */
        this.user = {
            usuario: '',
            pass: ''
        };
        this.guardado = false;
    }
    ngAfterViewInit() {
        const animation = this.animationCtrl
            .create()
            .addElement(this.logo.nativeElement)
            .duration(2000)
            .iterations(Infinity)
            .keyframes([
            { offset: 0.7, transform: 'scale(1)', opacity: '1' },
            { offset: 0.8, transform: 'scale(1.1)', opacity: '0.8' },
            { offset: 0.9, transform: 'scale(1)', opacity: '1' }
        ]);
        animation.play();
    }
    recovery(page) {
        this.router.navigate(page);
    }
    /* validado en bruto usuarios 'malcom', 'nicolas', contraseña '123', donde se muestra un */
    ingresar(page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Cargando...',
                duration: 2000
            });
            yield loading.present();
            yield loading.onDidDismiss();
            if (this.user.usuario === 'malcom' && this.user.pass === '123' || this.user.usuario === 'nicolas' && this.user.pass === '123') {
                localStorage.setItem('usuario', this.user.usuario);
                localStorage.setItem('ingresado', 'true');
                const navigationExtras = {
                    state: {
                        user: this.user.usuario
                    }
                };
                this.navCtrl.navigateRoot(page, navigationExtras);
            }
            else if (this.user.usuario !== 'malcom' && this.user.usuario !== 'nicolas' || this.user.pass !== '123') {
                this.router.navigate(['/login']);
                const toast = yield this.toastController.create({
                    message: 'Credenciales no validas',
                    position: 'bottom',
                    duration: 2000
                });
                yield toast.present();
                this.user.usuario = '';
                this.user.pass = '';
            }
        });
    }
    guardarUsuario() {
        console.log(this.guardado);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
LoginPage.propDecorators = {
    logo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['logo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef, static: true },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _C_Users_nicol_Desktop_Ionic_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  \r\n  <ion-grid class=\"logo\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col>\r\n        <ion-img #logo src=\"\\assets\\icon\\logo.svg\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div>\r\n    <form #formulario=\"ngForm\" (ngSubmit)=\"submit()\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Usuario</ion-label>\r\n        <ion-input  required \r\n                    name=\"user\"\r\n                    [(ngModel)]=\"user.usuario\" \r\n                    minlength=3 \r\n                    maxlength=15 \r\n                    clear-input='true'>\r\n        </ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Contraseña</ion-label>\r\n        <ion-input  required \r\n                    name=\"pass\"\r\n                    [(ngModel)]=\"user.pass\" \r\n                    type=\"password\" \r\n                    clear-input='true'>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-button (click)=\"ingresar(['/home'])\" \r\n                  type=\"submit\"\r\n                  expand=\"block\"\r\n                  [disabled]=\"formulario.invalid\">\r\n          INICIAR SESION\r\n      </ion-button>\r\n      \r\n    </form>\r\n    <ion-item>\r\n      <ion-checkbox (click)=\"guardarUsuario()\"\r\n                    [(ngModel)]=\"guardado\"\r\n                    color=\"secondary\" \r\n                    slot=\"start\"></ion-checkbox>\r\n      <ion-label>Guardar sesión</ion-label>\r\n    </ion-item>\r\n    \r\n    <p class=\"pass-hover\" (click)=\"recovery(['/password'])\">Recuperar contraseña</p>\r\n  </div>\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 2032:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".logo {\n  margin-top: 130px;\n  margin-bottom: 40px;\n  width: 45%;\n}\n\n.user-inputs {\n  margin-left: 20px;\n  margin-right: 25px;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 40px;\n}\n\np {\n  margin-top: 35px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.pass-hover {\n  color: #00162b;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNkOztBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBRXBCOztBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBR25COztBQUFBO0VBQ0ksY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0FBR25CIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi51c2VyLWlucHV0cyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wYXNzLWhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAxNjJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map