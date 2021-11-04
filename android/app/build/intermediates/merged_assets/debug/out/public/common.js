"use strict";
(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["common"],{

/***/ 631:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 6842);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 9502);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 8910);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 5709:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_Users_malco_Desktop_registrapp_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 151);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 693);



const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_malco_Desktop_registrapp_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ 9502:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 5907:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 3784:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var C_Users_malco_Desktop_registrapp_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 151);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,C_Users_malco_Desktop_registrapp_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 7759:
/*!***************************************************************!*\
  !*** ./src/app/components/asignatura/asignatura.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaComponent": () => (/* binding */ AsignaturaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_asignatura_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./asignatura.component.html */ 6893);
/* harmony import */ var _asignatura_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura.component.scss */ 8601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let AsignaturaComponent = class AsignaturaComponent {
    constructor() { }
    ngOnInit() { }
};
AsignaturaComponent.ctorParameters = () => [];
AsignaturaComponent.propDecorators = {
    asignatura: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AsignaturaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-asignatura',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_asignatura_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_asignatura_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3646);
/* harmony import */ var _horario_horario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario/horario.component */ 23);
/* harmony import */ var _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignatura/asignatura.component */ 7759);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _horario_horario_component__WEBPACK_IMPORTED_MODULE_1__.HorarioComponent,
            _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_2__.AsignaturaComponent
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _horario_horario_component__WEBPACK_IMPORTED_MODULE_1__.HorarioComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let HeaderComponent = class HeaderComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 23:
/*!*********************************************************!*\
  !*** ./src/app/components/horario/horario.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioComponent": () => (/* binding */ HorarioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horario_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./horario.component.html */ 1720);
/* harmony import */ var _horario_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario.component.scss */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let HorarioComponent = class HorarioComponent {
    constructor() {
        this.horario = [];
    }
    ngOnInit() { }
};
HorarioComponent.ctorParameters = () => [];
HorarioComponent.propDecorators = {
    horario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HorarioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-horarioclases',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horario_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_horario_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HorarioComponent);



/***/ }),

/***/ 3362:
/*!******************************************!*\
  !*** ./src/app/models/registro.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Registro": () => (/* binding */ Registro)
/* harmony export */ });
class Registro {
    constructor(format, text) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.tipoRegistro();
    }
    tipoRegistro() {
        const ini = this.text.substr(0, 4);
        console.log(ini);
        switch (ini) {
            case 'http':
                this.type = 'http';
                break;
            case 'text:':
                this.type = 'text';
                break;
            default:
                this.type = 'No reconocido';
                break;
        }
    }
}


/***/ }),

/***/ 7846:
/*!***********************************************!*\
  !*** ./src/app/pages/escaneo/escaneo.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscaneoPage": () => (/* binding */ EscaneoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_escaneo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./escaneo.page.html */ 2926);
/* harmony import */ var _escaneo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escaneo.page.scss */ 711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_data_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-local.service */ 9324);







let EscaneoPage = class EscaneoPage {
    constructor(modalController, dataLocal, router) {
        this.modalController = modalController;
        this.dataLocal = dataLocal;
        this.router = router;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    verEscaneo(escaneo) {
        console.log(escaneo);
    }
    error404() {
        this.router.navigate(['/404']);
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
EscaneoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_data_local_service__WEBPACK_IMPORTED_MODULE_2__.DataLocalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
EscaneoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-escaneo',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_escaneo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_escaneo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EscaneoPage);



/***/ }),

/***/ 6492:
/*!***********************************************!*\
  !*** ./src/app/pages/horario/horario.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPage": () => (/* binding */ HorarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./horario.page.html */ 1638);
/* harmony import */ var _horario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario.page.scss */ 4713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/horario.service */ 8856);






let HorarioPage = class HorarioPage {
    constructor(modalController, horarioService) {
        this.modalController = modalController;
        this.horarioService = horarioService;
        this.horario = [];
        this.date = new Date();
    }
    ngOnInit() {
        this.horarioService.getUsuario().subscribe(resp => {
            console.log(resp.horario);
            this.horario.push(...resp.horario);
            //this.usuario = resp;
        });
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
HorarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_2__.HorarioService }
];
HorarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-horario',
        template: _C_Users_malco_Desktop_registrapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_horario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_horario_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HorarioPage);



/***/ }),

/***/ 9324:
/*!************************************************!*\
  !*** ./src/app/services/data-local.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLocalService": () => (/* binding */ DataLocalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 2314);
/* harmony import */ var _models_registro_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/registro.model */ 3362);




let DataLocalService = class DataLocalService {
    /* private memoria: Storage | null = null; */
    constructor(storage) {
        this.storage = storage;
        /* se declara un arreglo vacio que guardara los escaneos QR realizados */
        this.guardados = [];
        /* CARGAR REGISTROS (PERSISTENCIA DE DATOS)*/
        this.cargarEscaneo();
    }
    /* funcion para guardar los escaneos */
    /* async */ guardarRegistro(fomat, texto) {
        const nuevoRegistro = new _models_registro_model__WEBPACK_IMPORTED_MODULE_0__.Registro(fomat, texto); /* se crea un nuevo objeto de tipo Registro */
        this.guardados.unshift(nuevoRegistro); /* para siempre mostrar el ultimo escaneo en la parte superior */
        console.log(this.guardados);
        /* await this.cargarEscaneo(); */ /* se guarda en el arreglo */
        this.storage.set('registros', this.guardados); /* 'GUARDAR REGISTROS (PERSISTENCIA DE DATOS)' */
    }
    cargarEscaneo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /* this.storage.clear(); */ /* limpiar la memoria */
            this.guardados = (yield this.storage.get('registros')) || [];
        });
    }
};
DataLocalService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
DataLocalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataLocalService);



/***/ }),

/***/ 8856:
/*!*********************************************!*\
  !*** ./src/app/services/horario.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioService": () => (/* binding */ HorarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);



let HorarioService = class HorarioService {
    constructor(http) {
        this.http = http;
    }
    getUsuario() {
        return this.http.get('https://malcompozo.github.io/Data/db.json');
    }
    getUsuarioo(username) {
        return this.http.get(`https://malcompozo.github.io/Data/db.json=${username}`);
    }
};
HorarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
HorarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HorarioService);



/***/ }),

/***/ 6893:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/asignatura/asignatura.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-item>\r\n    <ion-icon name=\"book-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>{{asignatura.nombre}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-card-content class=\"ion-text-center\">\r\n    <p>FECHA: 02/11/2021</p>\r\n    <p>HORARIO: {{asignatura.horaInicio}} - {{asignatura.horaTermino}}</p>\r\n    <p>ESTADO: {{asignatura.estado}}</p>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 669:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header/header.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n    \r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button \r\n            color=\"light\"\r\n            text=\"Atras\"\r\n            mode=\"ios\"\r\n            defaultHref=\"/\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title class=\"ion-text-capitalize\" color=\"light\">\r\n            {{ titulo }}\r\n        </ion-title>\r\n    \r\n    </ion-toolbar>\r\n</ion-header>\r\n");

/***/ }),

/***/ 1720:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/horario/horario.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid fixed>\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let asignatura of horario\" size=\"12\" sizeLg=\"3\" sizeMd=\"4\" sizeSm=\"6\" sizeXs=\"12\">\r\n      <app-asignatura [asignatura]=\"asignatura\"></app-asignatura>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid> ");

/***/ }),

/***/ 2926:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/escaneo/escaneo.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"light\">QR Escaneados</ion-title>\n    <h6 class=\"cerrar\" (click)=\"dismiss()\" slot=\"end\">Cerrar</h6>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let escaneo of dataLocal.guardados\">\n      <ion-icon name=\"book-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>{{escaneo.text}}</h2>\n        <p>{{escaneo.created | date: 'medium'}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n\n</ion-content>\n\n<ion-label>\n  <ion-button (click)=\"error404()\"\n              expand=\"full\">\n    Borrar Historial\n  </ion-button>\n</ion-label>\n");

/***/ }),

/***/ 1638:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/horario/horario.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"light\">{{date | date: 'dd/MM/YYYY'}}</ion-title>\r\n    <h6 class=\"cerrar\" (click)=\"dismiss()\" slot=\"end\">Cerrar</h6>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <app-horarioclases [horario]=\"horario\"></app-horarioclases>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8601:
/*!*****************************************************************!*\
  !*** ./src/app/components/asignatura/asignatura.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 294:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6362:
/*!***********************************************************!*\
  !*** ./src/app/components/horario/horario.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3JhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 711:
/*!*************************************************!*\
  !*** ./src/app/pages/escaneo/escaneo.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-size: 16px;\n}\n\n.cerrar {\n  cursor: pointer;\n  color: white;\n  margin-right: 14px;\n  margin-bottom: 18px;\n}\n\nion-icon {\n  color: #FFB800;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzY2FuZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZXNjYW5lby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2VycmFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICNGRkI4MDA7XHJcbn0iXX0= */";

/***/ }),

/***/ 4713:
/*!*************************************************!*\
  !*** ./src/app/pages/horario/horario.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-size: 16px;\n}\n\n.cerrar {\n  cursor: pointer;\n  color: white;\n  margin-right: 14px;\n  margin-bottom: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcmFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJob3JhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jZXJyYXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=common.js.map