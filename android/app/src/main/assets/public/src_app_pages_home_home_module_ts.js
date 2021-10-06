(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6977:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/bootstrap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9870:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/common.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 9849:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 1784:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 9418:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 4234:
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 5938:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 6264:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 399:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* reexport safe */ _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__.IonicNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 6977);
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-native-plugin */ 2948);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 4234);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 9849);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 1784);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 9418);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 5938);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 6264);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2948:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/ionic-native-plugin.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* binding */ IonicNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 9746);


var IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    IonicNativePlugin.pluginName = '';
    IonicNativePlugin.pluginRef = '';
    IonicNativePlugin.plugin = '';
    IonicNativePlugin.repo = '';
    IonicNativePlugin.platforms = [];
    IonicNativePlugin.install = '';
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),

/***/ 9746:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/util.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 7160:
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRScanner": () => (/* binding */ QRScanner)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);





var QRScanner = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRScanner.prototype.prepare = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "prepare", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.scan = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scan", { "callbackStyle": "node", "observable": true, "clearFunction": "cancelScan" }, arguments); };
    QRScanner.prototype.show = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {}, arguments); };
    QRScanner.prototype.hide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", {}, arguments); };
    QRScanner.prototype.enableLight = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.destroy = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "destroy", {}, arguments); };
    QRScanner.prototype.disableLight = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useFrontCamera = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useFrontCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useBackCamera = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBackCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useCamera = function (camera) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.pausePreview = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "pausePreview", {}, arguments); };
    QRScanner.prototype.resumePreview = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "resumePreview", {}, arguments); };
    QRScanner.prototype.getStatus = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getStatus", {}, arguments); };
    QRScanner.prototype.openSettings = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "openSettings", { "sync": true }, arguments); };
    QRScanner.pluginName = "QRScanner";
    QRScanner.plugin = "cordova-plugin-qrscanner";
    QRScanner.pluginRef = "QRScanner";
    QRScanner.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
    QRScanner.platforms = ["Android", "Browser", "iOS", "Windows"];
QRScanner.ɵfac = /*@__PURE__*/ function () { var ɵQRScanner_BaseFactory; return function QRScanner_Factory(t) { return (ɵQRScanner_BaseFactory || (ɵQRScanner_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](QRScanner)))(t || QRScanner); }; }();
QRScanner.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QRScanner, factory: function (t) { return QRScanner.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRScanner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return QRScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcXItc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUdTLElBNkdzQiw2QkFBaUI7QUFBQztBQUU5QjtBQUdoQjtBQUFNLElBR1AsMkJBQU87QUFLOEIsSUFRckMsd0JBQUk7QUFLdUYsSUFJM0Ysd0JBQUk7QUFLSyxJQUlULHdCQUFJO0FBS0ssSUFNVCwrQkFBVztBQU1MLElBR04sMkJBQU87QUFLSyxJQU1aLGdDQUFZO0FBTVEsSUFLcEIsa0NBQWM7QUFNUyxJQUt2QixpQ0FBYTtBQU1FLElBTWYsNkJBQVMsYUFBQyxNQUFjO0FBS0csSUFJM0IsZ0NBQVk7QUFLSyxJQUlqQixpQ0FBYTtBQUtLLElBSWxCLDZCQUFTO0FBS0ssSUFLZCxnQ0FBWTtBQUUyRDtBQUF3QztBQUFtRDtBQUF1QztBQUEyRTs2Q0FoSnJSLFVBQVU7Ozs7MEJBQ0w7QUFBQyxvQkFuSFA7QUFBRSxFQW1INkIsaUJBQWlCO0FBQy9DLFNBRFksU0FBUztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUVJTY2FubmVyU3RhdHVzIHtcbiAgLyoqXG4gICAqIE9uIGlPUyBhbmQgQW5kcm9pZCA2LjArLCBjYW1lcmEgYWNjZXNzIGlzIGdyYW50ZWQgYXQgcnVudGltZSBieSB0aGUgdXNlciAoYnkgY2xpY2tpbmcgXCJBbGxvd1wiIGF0IHRoZSBkaWFsb2cpLlxuICAgKiBUaGUgYXV0aG9yaXplZCBwcm9wZXJ0eSBpcyBhIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBvbmx5IHdoZW4gdGhlIHVzZXIgaGFzIGFsbG93ZWQgY2FtZXJhIGFjY2VzcyB0byB5b3VyIGFwcCAoQVZBdXRob3JpemF0aW9uU3RhdHVzLkF1dGhvcml6ZWQpLlxuICAgKiBPbiBwbGF0Zm9ybXMgd2l0aCBwZXJtaXNzaW9ucyBncmFudGVkIGF0IGluc3RhbGwgKEFuZHJvaWQgcHJlLTYuMCwgV2luZG93cyBQaG9uZSkgdGhpcyBwcm9wZXJ0eSBpcyBhbHdheXMgdHJ1ZS5cbiAgICovXG4gIGF1dGhvcml6ZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgdXNlciBwZXJtYW5lbnRseSBkZW5pZWQgY2FtZXJhIGFjY2VzcyB0byB0aGUgYXBwIChBVkF1dGhvcml6YXRpb25TdGF0dXMuRGVuaWVkKS5cbiAgICogT25jZSBkZW5pZWQsIGNhbWVyYSBhY2Nlc3MgY2FuIG9ubHkgYmUgZ2FpbmVkIGJ5IHJlcXVlc3RpbmcgdGhlIHVzZXIgY2hhbmdlIHRoZWlyIGRlY2lzaW9uIChjb25zaWRlciBvZmZlcmluZyBhIGxpbmsgdG8gdGhlIHNldHRpbmcgdmlhIG9wZW5TZXR0aW5ncygpKS5cbiAgICovXG4gIGRlbmllZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIHRoZSB1c2VyIGlzIHVuYWJsZSB0byBncmFudCBwZXJtaXNzaW9ucyBkdWUgdG8gcGFyZW50YWwgY29udHJvbHMsIG9yZ2FuaXphdGlvbiBzZWN1cml0eSBjb25maWd1cmF0aW9uIHByb2ZpbGVzLCBvciBzaW1pbGFyIHJlYXNvbnMuXG4gICAqL1xuICByZXN0cmljdGVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgUVJTY2FubmVyIGlzIHByZXBhcmVkIHRvIGNhcHR1cmUgdmlkZW8gYW5kIHJlbmRlciBpdCB0byB0aGUgdmlldy5cbiAgICovXG4gIHByZXBhcmVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgd2hlbiB0aGUgcHJldmlldyBsYXllciBpcyB2aXNpYmxlIChhbmQgb24gYWxsIHBsYXRmb3JtcyBidXQgYnJvd3NlciwgdGhlIG5hdGl2ZSB3ZWJ2aWV3IGJhY2tncm91bmQgaXMgdHJhbnNwYXJlbnQpLlxuICAgKi9cbiAgc2hvd2luZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIFFSU2Nhbm5lciBpcyBhY3RpdmVseSBzY2FubmluZyBmb3IgYSBRUiBjb2RlLlxuICAgKi9cbiAgc2Nhbm5pbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiBRUlNjYW5uZXIgaXMgZGlzcGxheWluZyBhIGxpdmUgcHJldmlldyBmcm9tIHRoZSBkZXZpY2UncyBjYW1lcmEuIFNldCB0byBmYWxzZSB3aGVuIHRoZSBwcmV2aWV3IGlzIHBhdXNlZC5cbiAgICovXG4gIHByZXZpZXdpbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgbGlnaHQgaXMgZW5hYmxlZC5cbiAgICovXG4gIGxpZ2h0RW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIG9ubHkgaWYgdGhlIHVzZXJzJyBvcGVyYXRpbmcgc3lzdGVtIGlzIGFibGUgdG8gUVJTY2FubmVyLm9wZW5TZXR0aW5ncygpLlxuICAgKi9cbiAgY2FuT3BlblNldHRpbmdzOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSBpZiB0aGUgdXNlcnMnIGRldmljZSBjYW4gZW5hYmxlIGEgbGlnaHQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgY3VycmVudENhbWVyYS5cbiAgICovXG4gIGNhbkVuYWJsZUxpZ2h0OiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSBpZiB0aGUgY3VycmVudCBkZXZpY2UgXCJzaG91bGRcIiBoYXZlIGEgZnJvbnQgY2FtZXJhLlxuICAgKiBUaGUgY2FtZXJhIG1heSBzdGlsbCBub3QgYmUgY2FwdHVyYWJsZSwgd2hpY2ggd291bGQgZW1pdCBlcnJvciBjb2RlIDMsIDQsIG9yIDUgd2hlbiB0aGUgc3dpdGNoIGlzIGF0dGVtcHRlZC5cbiAgICogKE9uIHRoZSBicm93c2VyIHBsYXRmb3JtLCB0aGlzIHZhbHVlIGlzIGZhbHNlIHVudGlsIHRoZSBwcmVwYXJlIG1ldGhvZCBpcyBjYWxsZWQuKVxuICAgKi9cbiAgY2FuQ2hhbmdlQ2FtZXJhOiBib29sZWFuO1xuICAvKipcbiAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudENhbWVyYS4gMCBpcyB0aGUgYmFjayBjYW1lcmEsIDEgaXMgdGhlIGZyb250LlxuICAgKi9cbiAgY3VycmVudENhbWVyYTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFFSIFNjYW5uZXJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGZhc3QsIGVuZXJneSBlZmZpY2llbnQsIGhpZ2hseS1jb25maWd1cmFibGUgUVIgY29kZSBzY2FubmVyIGZvciBDb3Jkb3ZhIGFwcHMuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbUVIgU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2JpdHBheS9jb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gKiB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAqICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gKiAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICogICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gKlxuICpcbiAqICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICogICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnU2Nhbm5lZCBzb21ldGhpbmcnLCB0ZXh0KTtcbiAqXG4gKiAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAqICAgICAgICAgIHNjYW5TdWIudW5zdWJzY3JpYmUoKTsgLy8gc3RvcCBzY2FubmluZ1xuICogICAgICAgIH0pO1xuICpcbiAqICAgICAgfSBlbHNlIGlmIChzdGF0dXMuZGVuaWVkKSB7XG4gKiAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIHBlcm1hbmVudGx5IGRlbmllZFxuICogICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gKiAgICAgICAgLy8gdGhlbiB0aGV5IGNhbiBncmFudCB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZXJlXG4gKiAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gKiAgICAgIH1cbiAqICAgfSlcbiAqICAgLmNhdGNoKChlOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBpcycsIGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogUVJTY2FubmVyU3RhdHVzXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUVJTY2FubmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnUVJTY2FubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRwYXkvY29yZG92YS1wbHVnaW4tcXJzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRUlNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gdXNlIFFSIHNjYW5uZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBlbmFibGUgc2Nhbm5pbmcuIFlvdSBtdXN0IHRoZW4gY2FsbCB0aGUgYHNob3dgIG1ldGhvZCB0byBtYWtlIHRoZSBjYW1lcmEgcHJldmlldyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPHN0cmluZz59IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzY2FubmVkIHRleHQuIFVuc3Vic2NyaWJlIGZyb20gdGhlIG9ic2VydmFibGUgdG8gc3RvcCBzY2FubmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2FuY2VsU2NhbicsXG4gIH0pXG4gIHNjYW4oKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgbmF0aXZlIHdlYnZpZXcgdG8gaGF2ZSBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQsIHRoZW4gc2V0cyB0aGUgYmFja2dyb3VuZCBvZiB0aGUgPGJvZHk+IGFuZCA8aHRtbD4gRE9NIGVsZW1lbnRzIHRvIHRyYW5zcGFyZW50LCBhbGxvd2luZyB0aGUgd2VidmlldyB0byByZS1yZW5kZXIgd2l0aCB0aGUgdHJhbnNwYXJlbnQgYmFja2dyb3VuZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBuYXRpdmUgd2VidmlldyB0byBiZSBvcGFxdWUgd2l0aCBhIHdoaXRlIGJhY2tncm91bmQsIGNvdmVyaW5nIHRoZSB2aWRlbyBwcmV2aWV3LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgZGV2aWNlJ3MgbGlnaHQgKGZvciBzY2FubmluZyBpbiBsb3ctbGlnaHQgZW52aXJvbm1lbnRzKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGVuYWJsZUxpZ2h0KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHNjYW5uZXIgaW5zdGFuY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgZGV2aWNlJ3MgbGlnaHQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGRpc2FibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgZnJvbnQgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIHVzZUZyb250Q2FtZXJhKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSBiYWNrIGNhbWVyYVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICB1c2VCYWNrQ2FtZXJhKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjYW1lcmEgdG8gYmUgdXNlZC5cbiAgICogQHBhcmFtIGNhbWVyYSB7bnVtYmVyfSBQcm92aWRlIGAwYCBmb3IgYmFjayBjYW1lcmEsIGFuZCBgMWAgZm9yIGZyb250IGNhbWVyYS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJyxcbiAgfSlcbiAgdXNlQ2FtZXJhKGNhbWVyYTogbnVtYmVyKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB2aWRlbyBwcmV2aWV3IG9uIHRoZSBjdXJyZW50IGZyYW1lIGFuZCBwYXVzZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VQcmV2aWV3KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3Vtc2UgdGhlIHZpZGVvIHByZXZpZXcgYW5kIHJlc3VtZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lUHJldmlldygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBlcm1pc3Npb24gc3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3RhdHVzKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNldHRpbmdzIHRvIGVkaXQgYXBwIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG9wZW5TZXR0aW5ncygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ 7160);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
        providers: [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.QRScanner]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _horario_horario_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horario/horario.page */ 879);
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ 7160);



/* eslint-disable @typescript-eslint/member-ordering */






let HomePage = class HomePage {
    constructor(qrScanner, alertController, router, modalController, activeroute, animationCtrl) {
        this.qrScanner = qrScanner;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.animationCtrl = animationCtrl;
        this.activeroute.queryParams.subscribe(params => {
            /* validar si la navegacion tiene parametros */
            if (this.router.getCurrentNavigation().extras.state) {
                /* si existen parametros los rescata en una variable */
                this.dato = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.dato);
            }
        });
    }
    ngAfterViewInit() {
        const animation = this.animationCtrl
            .create()
            .addElement(this.title.nativeElement)
            .duration(1500)
            .iterations(Infinity)
            .fromTo('transform', 'scaled3d(1,1,1)', 'scaled3d(2,2,2)')
            .fromTo('opacity', 0.2, 1);
        animation.play();
    }
    /* este metodo llamara al metodo mostrar por medio de una alert */
    salir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _horario_horario_page__WEBPACK_IMPORTED_MODULE_2__.HorarioPage,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    scanCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.qrScanner.prepare()
                .then((status) => {
                if (status.authorized) {
                    // camera permission was granted
                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text) => {
                        console.log('Scanned something', text);
                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
                .catch((e) => console.log('Error is', e));
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.QRScanner },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController }
];
HomePage.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['title', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-icon {\n  align-content: flex-end;\n  margin-top: 20px;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n  margin-top: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.avatar {\n  margin-top: 10px;\n}\n\n.avatar img {\n  height: 80px;\n  height: 80px;\n  border-radius: 40px;\n}\n\n.set {\n  margin-right: 15px;\n  margin-top: 50px;\n  font-size: 24px;\n}\n\n.sede {\n  margin-top: 7px;\n}\n\n.sede h6 {\n  font-size: 70%;\n}\n\n.icon {\n  padding-bottom: 25px;\n  margin-left: 15px;\n}\n\np {\n  margin-top: 35px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.pass-hover {\n  margin-top: 0px;\n  color: #4698e4;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.clases {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-right: 40px;\n  margin-left: 40px;\n}\n\n.text {\n  font-size: 6px;\n}\n\n.digitos {\n  margin-bottom: 0px;\n}\n\nh4 {\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRkE7RUFHSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUd2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUVqQjs7QUFDQTtFQUNFLGVBQWU7QUFFakI7O0FBSEE7RUFHSSxjQUFjO0FBSWxCOztBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUduQjs7QUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUdqQjs7QUFBQTtFQUNFLGVBQWU7RUFDZixjQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUdqQjs7QUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUduQjs7QUFBQTtFQUNFLGNBQWM7QUFHaEI7O0FBQUE7RUFDRSxrQkFBa0I7QUFHcEI7O0FBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBR3JCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc2VkZXtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgaDZ7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wYXNzLWhvdmVyIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6IHJnYig3MCwgMTUyLCAyMjgpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsYXNlcyB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250LXNpemU6IDZweDtcclxufVxyXG5cclxuLmRpZ2l0b3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app [fullscreen]=\"true\">\r\n\r\n    <ion-toolbar class=\"ion-text-end\">\r\n      <ion-icon (click)=\"salir()\" class=\"set\" name=\"exit-outline\"></ion-icon>\r\n    </ion-toolbar>\r\n\r\n  <ion-content  scroll-y=\"false\">\r\n\r\n    <div class=\"avatar ion-text-center\">\r\n      <img src=\"\\assets\\img\\profile.png\">\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 #title ><b> {{dato}} </b></h3>\r\n          <h6>Analista programador computacional</h6>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"icon ion-text-end\" size=\"3\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"sede ion-text-start\">\r\n            <h6>SEDE VIÑA DEL MAR</h6>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  <ion-grid class=\"ion-text-center clases\">\r\n    <ion-row class=\"digitos\">\r\n      <ion-col>\r\n        <h4><b>11</b></h4>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h4><b>0</b></h4>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"text\">\r\n      <ion-col>\r\n        <h6>Asistencia</h6>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h6>Inasistencia</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"pass-hover\" (click)=\"presentModal()\">Ver horario de clases</p>\r\n  </ion-grid>\r\n\r\n    <ion-button (click)=\"scanCode()\" expand=\"block\" >ESCANEAR CODIGO QR</ion-button>\r\n\r\n  </ion-content>\r\n\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map