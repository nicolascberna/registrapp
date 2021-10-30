"use strict";
(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 9090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 6613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _horario_horario_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horario/horario.page */ 6492);
/* harmony import */ var src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/horario.service */ 8856);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);










let HomePage = class HomePage {
    constructor(horarioService, alertController, router, modalController, activeroute, barcodeScanner) {
        this.horarioService = horarioService;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.barcodeScanner = barcodeScanner;
        this.activeroute.queryParams.subscribe(params => {
            /* validar si la navegacion tiene parametros */
            if (this.router.getCurrentNavigation().extras.state) {
                /* si existen parametros los rescata en una variable */
                this.dato = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.dato);
            }
        });
    }
    /* se dispara cuando ya la page carga */
    ionViewDidEnter() {
        this.horarioService.getUsuario().subscribe(resp => {
            console.log('usuario', resp);
            this.usuario = resp;
        });
    }
    /* se dispara apenas entra */
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.scan();
    }
    /* metodo para escanear QR */
    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }
    /* este metodo llamara al metodo mostrar por medio de una alert */
    salir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: '¿Seguro deseas salir?',
                buttons: [{
                        text: 'Cancelar'
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.router.navigate(['/login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _horario_horario_page__WEBPACK_IMPORTED_MODULE_2__.HorarioPage,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_3__.HorarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n\r\n    <ion-header>\r\n      <ion-toolbar class=\"ion-text-end\">\r\n          <ion-icon (click)=\"salir()\" class=\"set\" name=\"exit-outline\"></ion-icon>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n  <ion-content class=\"ion-padding\" scroll-y=\"false\" [fullscreen]=true>\r\n\r\n    <div class=\"avatar ion-text-center\">\r\n      <img src=\"\\assets\\img\\profile.png\">\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 style=\"text-transform: capitalize;\"><b> Bienvenido {{dato}} </b></h3>\r\n          <h6><b>Analista Programador Computacional</b></h6>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-text-center\">\r\n        <ion-col> \r\n            <ion-icon name=\"location\"></ion-icon>\r\n            Sede Viña del Mar\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  <!-- <ion-grid class=\"ion-text-center\">\r\n    <ion-row class=\"text\">\r\n      <ion-col>\r\n        <h6>Asistencia</h6>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h6><b>11</b></h6>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h6>Inasistencia</h6>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h6><b>0</b></h6>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <div class=\"verHorario\">\r\n    <ion-label>\r\n      <p class=\"pass-hover\" (click)=\"presentModal()\">Ver horario de clases</p>\r\n    </ion-label>\r\n  </div>\r\n  \r\n  <ion-label>\r\n    <ion-button (click)=\"scan()\"\r\n                expand=\"full\">\r\n      ESCANEAR CODIGO QR\r\n    </ion-button>\r\n  </ion-label>\r\n    \r\n  </ion-content>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ 6613:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".container {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.avatar {\n  margin-top: 10px;\n}\n\n.avatar img {\n  height: 80px;\n  border-radius: 40px;\n}\n\n.set {\n  margin-right: 12px;\n  font-size: 22px;\n  color: white;\n}\n\np {\n  margin-top: 35px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.pass-hover {\n  margin-top: 0px;\n  color: #00162b;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.text {\n  font-size: 6px;\n}\n\n.verHorario {\n  margin-top: 60px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQXBCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQWxCOztBQURBO0VBR0ksWUFBWTtFQUNaLG1CQUFtQjtBQUV2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQWpCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUFqQjs7QUFHQTtFQUNFLGNBQWM7QUFBaEI7O0FBR0E7RUFDRSxnQkFBZ0I7QUFBbEIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGltZ3tcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2V0e1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucGFzcy1ob3ZlciB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGNvbG9yOiAjMDAxNjJiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogNnB4O1xyXG59XHJcblxyXG4udmVySG9yYXJpbyB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map