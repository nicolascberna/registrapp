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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 9090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 6613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/horario.service */ 8856);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-local.service */ 9324);
/* harmony import */ var _horario_horario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../horario/horario.page */ 6492);
/* harmony import */ var _escaneo_escaneo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../escaneo/escaneo.page */ 7846);











let HomePage = class HomePage {
    constructor(horarioService, alertController, router, modalController, activeroute, barcodeScanner, dataLocal, navCtrl) {
        this.horarioService = horarioService;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.barcodeScanner = barcodeScanner;
        this.dataLocal = dataLocal;
        this.navCtrl = navCtrl;
        /* variable de tipo any que permite cualquiero tipo de dato */
        this.dato = localStorage.getItem('usuario');
        this.activeroute.queryParams.subscribe(params => {
            /* validar si la navegacion tiene parametros */
            if (this.router.getCurrentNavigation().extras.state) {
                /* si existen parametros los rescata en una variable */
                this.dato = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.dato);
            }
        });
    }
    /* se dispara apenas entra */
    ionViewWillEnter() {
        ;
        this.horarioService.getUsuario().subscribe(resp => {
            console.log('usuario', resp);
            this.usuario = resp;
        });
    }
    /* metodo para escanear QR */
    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            /* verificamos si el usuario no cancelo el escaneo guardamos el registro */
            if (!barcodeData.cancelled) {
                this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
            }
        }).catch(err => {
            console.log('Error', err);
            /* borrar despues de desplegar */
            this.dataLocal.guardarRegistro('QR', 'http://www.malcom.com');
        });
    }
    /* este metodo llamara al alert exit*/
    salir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                backdropDismiss: false,
                message: '¿Seguro deseas salir?',
                buttons: [{
                        text: 'Cancelar'
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            localStorage.removeItem('usuario');
                            localStorage.removeItem('ingresado');
                            this.navCtrl.navigateRoot('login');
                        }
                    }]
            });
            yield alert.present();
        });
    }
    /* llama al modal que muestra los horarios */
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _horario_horario_page__WEBPACK_IMPORTED_MODULE_5__.HorarioPage,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    /* llama al modal que muestra escaneos realizados */
    escaneos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _escaneo_escaneo_page__WEBPACK_IMPORTED_MODULE_6__.EscaneoPage
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_2__.HorarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner },
    { type: _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__.DataLocalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n\r\n    <ion-header>\r\n      \r\n      <ion-toolbar>\r\n        <ion-title slot=\"start\" color=\"light\">\r\n          RegistrApp\r\n        </ion-title>\r\n          <ion-icon slot=\"end\" (click)=\"salir()\" class=\"set\" name=\"exit-outline\"></ion-icon>\r\n      </ion-toolbar>\r\n      \r\n    </ion-header>\r\n\r\n  <ion-content class=\"ion-padding\" scroll-y=\"false\" [fullscreen]=true>\r\n\r\n    <div class=\"avatar ion-text-center\">\r\n      <img src=\"\\assets\\img\\profile.png\">\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 style=\"text-transform: capitalize;\"><b> Bienvenido {{dato}} </b></h3>\r\n          <h6><b>Analista Programador Computacional</b></h6>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-text-center\">\r\n        <ion-col> \r\n            <ion-icon name=\"location\"></ion-icon>\r\n            Sede Viña del Mar\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  <div class=\"verHorario\">\r\n    <ion-label>\r\n      <p class=\"pass-hover\" (click)=\"presentModal()\">Ver horario de clases</p>\r\n    </ion-label>\r\n  \r\n    <ion-label>\r\n      <p class=\"pass-hover\" (click)=\"escaneos()\">Historial de escaneos</p>\r\n    </ion-label>\r\n  </div>\r\n  \r\n  </ion-content>\r\n\r\n  <ion-label>\r\n    <ion-button (click)=\"scan()\"\r\n                expand=\"full\">\r\n      ESCANEAR CODIGO QR\r\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-label>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ 6613:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  font-weight: bold;\n  margin-top: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.avatar {\n  margin-top: 20%;\n  margin-bottom: 15%;\n}\n\n.avatar img {\n  height: 150px;\n  border-radius: 100px;\n}\n\n.set {\n  margin-right: 12px;\n  font-size: 22px;\n  color: white;\n}\n\np {\n  margin-top: 35px;\n  text-align: center;\n  font-size: 17px;\n}\n\n.pass-hover {\n  margin-top: 0px;\n  color: #00162b;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.verHorario {\n  margin-top: 60px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFEcEI7O0FBREE7RUFJSSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQWQ7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFEakI7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0FBRGpCOztBQUlBO0VBQ0UsZ0JBQWdCO0FBRGxCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNldHtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnBhc3MtaG92ZXIge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBjb2xvcjogIzAwMTYyYjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52ZXJIb3JhcmlvIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map