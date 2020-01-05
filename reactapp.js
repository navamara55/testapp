define("reactapp", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".reactapp.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "navamara55.github.io/testapp";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpreactapp"] = window["webpackJsonpreactapp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/single-spa/lib/esm/single-spa.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \***********************************************************/
/*! exports provided: BOOTSTRAPPING, LOADING_SOURCE_CODE, LOAD_ERROR, MOUNTED, MOUNTING, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, SKIP_BECAUSE_BROKEN, UNMOUNTING, UPDATING, addErrorHandler, checkActivityFunctions, declareChildApplication, ensureJQuerySupport, getAppNames, getAppStatus, getMountedApps, mountRootParcel, navigateToUrl, registerApplication, removeErrorHandler, setBootstrapMaxTime, setMountMaxTime, setUnloadMaxTime, setUnmountMaxTime, start, triggerAppChange, unloadApplication, unloadChildApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOTSTRAPPING\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_SOURCE_CODE\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_ERROR\", function() { return N; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTED\", function() { return P; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTING\", function() { return O; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_BOOTSTRAPPED\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_LOADED\", function() { return g; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_MOUNTED\", function() { return E; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SKIP_BECAUSE_BROKEN\", function() { return j; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNMOUNTING\", function() { return A; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATING\", function() { return T; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorHandler\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkActivityFunctions\", function() { return Ut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"declareChildApplication\", function() { return Dt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureJQuerySupport\", function() { return bt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppNames\", function() { return jt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppStatus\", function() { return _t; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMountedApps\", function() { return Nt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountRootParcel\", function() { return et; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToUrl\", function() { return ft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerApplication\", function() { return xt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeErrorHandler\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBootstrapMaxTime\", function() { return G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMountMaxTime\", function() { return q; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnloadMaxTime\", function() { return W; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnmountMaxTime\", function() { return k; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return Wt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triggerAppChange\", function() { return Gt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unloadApplication\", function() { return Lt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unloadChildApplication\", function() { return Rt; });\nvar t = Object.freeze({\n  __proto__: null,\n\n  get start() {\n    return Wt;\n  },\n\n  get ensureJQuerySupport() {\n    return bt;\n  },\n\n  get setBootstrapMaxTime() {\n    return G;\n  },\n\n  get setMountMaxTime() {\n    return q;\n  },\n\n  get setUnmountMaxTime() {\n    return k;\n  },\n\n  get setUnloadMaxTime() {\n    return W;\n  },\n\n  get registerApplication() {\n    return xt;\n  },\n\n  get getMountedApps() {\n    return Nt;\n  },\n\n  get getAppStatus() {\n    return _t;\n  },\n\n  get unloadApplication() {\n    return Lt;\n  },\n\n  get checkActivityFunctions() {\n    return Ut;\n  },\n\n  get getAppNames() {\n    return jt;\n  },\n\n  get declareChildApplication() {\n    return Dt;\n  },\n\n  get unloadChildApplication() {\n    return Rt;\n  },\n\n  get navigateToUrl() {\n    return ft;\n  },\n\n  get triggerAppChange() {\n    return Gt;\n  },\n\n  get addErrorHandler() {\n    return h;\n  },\n\n  get removeErrorHandler() {\n    return d;\n  },\n\n  get mountRootParcel() {\n    return et;\n  },\n\n  get NOT_LOADED() {\n    return g;\n  },\n\n  get LOADING_SOURCE_CODE() {\n    return w;\n  },\n\n  get NOT_BOOTSTRAPPED() {\n    return y;\n  },\n\n  get BOOTSTRAPPING() {\n    return b;\n  },\n\n  get NOT_MOUNTED() {\n    return E;\n  },\n\n  get MOUNTING() {\n    return O;\n  },\n\n  get UPDATING() {\n    return T;\n  },\n\n  get LOAD_ERROR() {\n    return N;\n  },\n\n  get MOUNTED() {\n    return P;\n  },\n\n  get UNMOUNTING() {\n    return A;\n  },\n\n  get SKIP_BECAUSE_BROKEN() {\n    return j;\n  }\n\n}),\n    n = (\"undefined\" != typeof globalThis ? globalThis : \"undefined\" != typeof window ? window : \"undefined\" != typeof global ? global : \"undefined\" != typeof self ? self : {}).CustomEvent;\nvar e = function () {\n  try {\n    var t = new n(\"cat\", {\n      detail: {\n        foo: \"bar\"\n      }\n    });\n    return \"cat\" === t.type && \"bar\" === t.detail.foo;\n  } catch (t) {}\n\n  return !1;\n}() ? n : \"undefined\" != typeof document && \"function\" == typeof document.createEvent ? function (t, n) {\n  var e = document.createEvent(\"CustomEvent\");\n  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;\n} : function (t, n) {\n  var e = document.createEventObject();\n  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;\n};\n\nfunction r(t) {\n  return (r = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (t) {\n    return typeof t;\n  } : function (t) {\n    return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t;\n  })(t);\n}\n\nfunction o(t, n, e) {\n  return n in t ? Object.defineProperty(t, n, {\n    value: e,\n    enumerable: !0,\n    configurable: !0,\n    writable: !0\n  }) : t[n] = e, t;\n}\n\nfunction i(t, n) {\n  var e = Object.keys(t);\n\n  if (Object.getOwnPropertySymbols) {\n    var r = Object.getOwnPropertySymbols(t);\n    n && (r = r.filter(function (n) {\n      return Object.getOwnPropertyDescriptor(t, n).enumerable;\n    })), e.push.apply(e, r);\n  }\n\n  return e;\n}\n\nfunction u(t) {\n  for (var n = 1; n < arguments.length; n++) {\n    var e = null != arguments[n] ? arguments[n] : {};\n    n % 2 ? i(e, !0).forEach(function (n) {\n      o(t, n, e[n]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(e).forEach(function (n) {\n      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));\n    });\n  }\n\n  return t;\n}\n\nfunction a(t) {\n  return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {\n    return t.__proto__ || Object.getPrototypeOf(t);\n  })(t);\n}\n\nfunction c(t, n) {\n  return (c = Object.setPrototypeOf || function (t, n) {\n    return t.__proto__ = n, t;\n  })(t, n);\n}\n\nfunction s(t, n, e) {\n  return (s = function () {\n    if (\"undefined\" == typeof Reflect || !Reflect.construct) return !1;\n    if (Reflect.construct.sham) return !1;\n    if (\"function\" == typeof Proxy) return !0;\n\n    try {\n      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;\n    } catch (t) {\n      return !1;\n    }\n  }() ? Reflect.construct : function (t, n, e) {\n    var r = [null];\n    r.push.apply(r, n);\n    var o = new (Function.bind.apply(t, r))();\n    return e && c(o, e.prototype), o;\n  }).apply(null, arguments);\n}\n\nfunction f(t) {\n  var n = \"function\" == typeof Map ? new Map() : void 0;\n  return (f = function (t) {\n    if (null === t || (e = t, -1 === Function.toString.call(e).indexOf(\"[native code]\"))) return t;\n    var e;\n    if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\");\n\n    if (void 0 !== n) {\n      if (n.has(t)) return n.get(t);\n      n.set(t, r);\n    }\n\n    function r() {\n      return s(t, arguments, a(this).constructor);\n    }\n\n    return r.prototype = Object.create(t.prototype, {\n      constructor: {\n        value: r,\n        enumerable: !1,\n        writable: !0,\n        configurable: !0\n      }\n    }), c(r, t);\n  })(t);\n}\n\nfunction l(t, n) {\n  return !n || \"object\" != typeof n && \"function\" != typeof n ? function (t) {\n    if (void 0 === t) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    return t;\n  }(t) : n;\n}\n\nvar p = [];\n\nfunction m(t, n) {\n  var e = v(t, n);\n  p.length ? p.forEach(function (t) {\n    return t(e);\n  }) : setTimeout(function () {\n    throw e;\n  });\n}\n\nfunction h(t) {\n  if (\"function\" != typeof t) throw Error(\"a single-spa error handler must be a function\");\n  p.push(t);\n}\n\nfunction d(t) {\n  if (\"function\" != typeof t) throw Error(\"a single-spa error handler must be a function\");\n  var n = !1;\n  return p = p.filter(function (e) {\n    var r = e === t;\n    return n = n || r, !r;\n  }), n;\n}\n\nfunction v(t, n) {\n  var e,\n      r = n.unmountThisParcel ? \"Parcel\" : \"Application\",\n      o = \"\".concat(r, \" '\").concat(n.name, \"' died in status \").concat(n.status, \": \");\n\n  if (t instanceof Error) {\n    try {\n      t.message = o + t.message;\n    } catch (t) {}\n\n    e = t;\n  } else {\n    console.warn(\"While \".concat(n.status, \", '\").concat(n.name, \"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate.\"));\n\n    try {\n      e = Error(o + JSON.stringify(t));\n    } catch (n) {\n      e = t;\n    }\n  }\n\n  e.appName = n.name, e.appOrParcelName = n.name;\n\n  try {\n    e.name = n.name;\n  } catch (t) {}\n\n  return e;\n}\n\nvar g = \"NOT_LOADED\",\n    w = \"LOADING_SOURCE_CODE\",\n    y = \"NOT_BOOTSTRAPPED\",\n    b = \"BOOTSTRAPPING\",\n    E = \"NOT_MOUNTED\",\n    O = \"MOUNTING\",\n    P = \"MOUNTED\",\n    T = \"UPDATING\",\n    A = \"UNMOUNTING\",\n    S = \"UNLOADING\",\n    N = \"LOAD_ERROR\",\n    j = \"SKIP_BECAUSE_BROKEN\";\n\nfunction _(t) {\n  return t.status === P;\n}\n\nfunction D(t) {\n  return !_(t);\n}\n\nfunction x(t) {\n  return t.status !== g && t.status !== w && t.status !== N;\n}\n\nfunction U(t) {\n  return !x(t);\n}\n\nfunction C(t) {\n  try {\n    return t.activeWhen(window.location);\n  } catch (n) {\n    m(n, t), t.status = j;\n  }\n}\n\nfunction R(t) {\n  try {\n    return !t.activeWhen(window.location);\n  } catch (n) {\n    m(n, t), t.status = j;\n  }\n}\n\nfunction L(t) {\n  return t !== j && (!t || t.status !== j);\n}\n\nfunction I(t) {\n  return t.status !== N || new Date().getTime() - t.loadErrorTime >= 200;\n}\n\nfunction M(t) {\n  return t.name;\n}\n\nvar B = {\n  bootstrap: {\n    millis: 4e3,\n    dieOnTimeout: !1\n  },\n  mount: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  },\n  unmount: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  },\n  unload: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  }\n};\n\nfunction G(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"bootstrap max time must be a positive integer number of milliseconds\");\n  B.bootstrap = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction q(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"mount max time must be a positive integer number of milliseconds\");\n  B.mount = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction k(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"unmount max time must be a positive integer number of milliseconds\");\n  B.unmount = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction W(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"unload max time must be a positive integer number of milliseconds\");\n  B.unload = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction F(t, n, e) {\n  var r = 1e3;\n  return new Promise(function (o, i) {\n    var u = !1,\n        a = !1;\n\n    function c(t) {\n      if (!u) if (!0 === t) a = !0, e.dieOnTimeout ? i(\"\".concat(n, \" did not resolve or reject for \").concat(e.millis, \" milliseconds\")) : console.error(\"\".concat(n, \" did not resolve or reject for \").concat(e.millis, \" milliseconds -- we're no longer going to warn you about it.\"));else if (!a) {\n        var o = t,\n            s = o * r;\n        console.warn(\"\".concat(n, \" did not resolve or reject within \").concat(s, \" milliseconds\")), s + r < e.millis && setTimeout(function () {\n          return c(o + 1);\n        }, r);\n      }\n    }\n\n    t.then(function (t) {\n      u = !0, o(t);\n    }).catch(function (t) {\n      u = !0, i(t);\n    }), setTimeout(function () {\n      return c(1);\n    }, r), setTimeout(function () {\n      return c(!0);\n    }, e.millis);\n  });\n}\n\nfunction K() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};\n  return u({}, B, {}, t);\n}\n\nfunction $(t, n) {\n  for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];\n\n  return null;\n}\n\nfunction H(t) {\n  return t && (\"function\" == typeof t || (n = t, Array.isArray(n) && !$(n, function (t) {\n    return \"function\" != typeof t;\n  })));\n  var n;\n}\n\nfunction J(t, n) {\n  return 0 === (t = Array.isArray(t) ? t : [t]).length && (t = [function () {\n    return Promise.resolve();\n  }]), function (e) {\n    return new Promise(function (r, o) {\n      !function i(u) {\n        var a = t[u](e);\n        Q(a) ? a.then(function () {\n          u === t.length - 1 ? r() : i(u + 1);\n        }).catch(o) : o(\"\".concat(n, \" at index \").concat(u, \" did not return a promise\"));\n      }(0);\n    });\n  };\n}\n\nfunction Q(t) {\n  return t && \"function\" == typeof t.then && \"function\" == typeof t.catch;\n}\n\nfunction V(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    return t.status !== y ? t : (t.status = b, F(t.bootstrap(it(t)), \"Bootstrapping appOrParcel '\".concat(t.name, \"'\"), t.timeouts.bootstrap).then(function () {\n      return t.status = E, t;\n    }).catch(function (e) {\n      if (t.status = j, n) throw v(e, t);\n      return m(e, t), t;\n    }));\n  });\n}\n\nfunction z(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    if (t.status !== P) return t;\n    t.status = A;\n    var e = Object.keys(t.parcels).map(function (n) {\n      return t.parcels[n].unmountThisParcel();\n    });\n    return Promise.all(e).then(r, function (e) {\n      return r().then(function () {\n        var r = Error(e.message);\n\n        if (n) {\n          var o = v(r, t);\n          throw t.status = j, o;\n        }\n\n        m(r, t), t.status = j;\n      });\n    }).then(function () {\n      return t;\n    });\n\n    function r() {\n      return F(t.unmount(it(t)), \"Unmounting application \".concat(t.name, \"'\"), t.timeouts.unmount).then(function () {\n        t.status = E;\n      }).catch(function (e) {\n        if (n) {\n          var r = v(e, t);\n          throw t.status = j, r;\n        }\n\n        m(e, t), t.status = j;\n      });\n    }\n  });\n}\n\nvar X = !1,\n    Y = !1;\n\nfunction Z(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    return t.status !== E ? t : (X || (window.dispatchEvent(new e(\"single-spa:before-first-mount\")), X = !0), F(t.mount(it(t)), \"Mounting application '\".concat(t.name, \"'\"), t.timeouts.mount).then(function () {\n      return t.status = P, Y || (window.dispatchEvent(new e(\"single-spa:first-mount\")), Y = !0), t;\n    }).catch(function (e) {\n      return t.status = P, z(t).then(r, r);\n\n      function r() {\n        if (n) {\n          var r = v(e, t);\n          throw t.status = j, r;\n        }\n\n        return m(e, t), t.status = j, t;\n      }\n    }));\n  });\n}\n\nvar tt = 0,\n    nt = {\n  parcels: {}\n};\n\nfunction et() {\n  return rt.apply(nt, arguments);\n}\n\nfunction rt(t, n) {\n  var e = this;\n  if (!t || \"object\" !== r(t) && \"function\" != typeof t) throw Error(\"Cannot mount parcel without a config object or config loading function\");\n  if (t.name && \"string\" != typeof t.name) throw Error(\"Parcel name must be a string, if provided\");\n  if (\"object\" !== r(n)) throw Error(\"Parcel \".concat(name, \" has invalid customProps -- must be an object\"));\n  if (!n.domElement) throw Error(\"Parcel \".concat(name, \" cannot be mounted without a domElement provided as a prop\"));\n  var o,\n      i = tt++,\n      u = \"function\" == typeof t,\n      a = u ? t : function () {\n    return Promise.resolve(t);\n  },\n      c = {\n    id: i,\n    parcels: {},\n    status: u ? w : y,\n    customProps: n,\n    parentName: e.name,\n    unmountThisParcel: function () {\n      if (c.status !== P) throw Error(\"Cannot unmount parcel '\".concat(name, \"' -- it is in a \").concat(c.status, \" status\"));\n      return z(c, !0).then(function (t) {\n        return c.parentName && delete e.parcels[c.id], t;\n      }).then(function (t) {\n        return f(t), t;\n      }).catch(function (t) {\n        throw c.status = j, l(t), t;\n      });\n    }\n  };\n  e.parcels[i] = c;\n  var s = a();\n  if (!s || \"function\" != typeof s.then) throw Error(\"When mounting a parcel, the config loading function must return a promise that resolves with the parcel config\");\n  var f,\n      l,\n      p = (s = s.then(function (t) {\n    if (!t) throw Error(\"When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config\");\n    var n = t.name || \"parcel-\".concat(i);\n    if (!H(t.bootstrap)) throw Error(\"Parcel \".concat(n, \" must have a valid bootstrap function\"));\n    if (!H(t.mount)) throw Error(\"Parcel \".concat(n, \" must have a valid mount function\"));\n    if (!H(t.unmount)) throw Error(\"Parcel \".concat(n, \" must have a valid unmount function\"));\n    if (t.update && !H(t.update)) throw Error(\"Parcel \".concat(n, \" provided an invalid update function\"));\n    var e = J(t.bootstrap),\n        r = J(t.mount),\n        u = J(t.unmount);\n    c.status = y, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = u, c.timeouts = K(t.timeouts), t.update && (c.update = J(t.update), o.update = function (t) {\n      return c.customProps = t, ot(function (t) {\n        return Promise.resolve().then(function () {\n          if (t.status !== P) throw Error(\"Cannot update parcel '\".concat(t.name, \"' because it is not mounted\"));\n          return t.status = T, F(t.update(it(t)), \"Updating parcel '\".concat(t.name, \"'\"), t.timeouts.mount).then(function () {\n            return t.status = P, t;\n          }).catch(function (n) {\n            var e = v(n, t);\n            throw t.status = j, e;\n          });\n        });\n      }(c));\n    });\n  })).then(function () {\n    return V(c, !0);\n  }),\n      m = p.then(function () {\n    return Z(c, !0);\n  }),\n      h = new Promise(function (t, n) {\n    f = t, l = n;\n  });\n  return o = {\n    mount: function () {\n      return ot(Promise.resolve().then(function () {\n        if (c.status !== E) throw Error(\"Cannot mount parcel '\".concat(name, \"' -- it is in a \").concat(c.status, \" status\"));\n        return e.parcels[i] = c, Z(c);\n      }));\n    },\n    unmount: function () {\n      return ot(c.unmountThisParcel());\n    },\n    getStatus: function () {\n      return c.status;\n    },\n    loadPromise: ot(s),\n    bootstrapPromise: ot(p),\n    mountPromise: ot(m),\n    unmountPromise: ot(h)\n  };\n}\n\nfunction ot(t) {\n  return t.then(function () {\n    return null;\n  });\n}\n\nfunction it(n) {\n  var e = u({}, n.customProps, {\n    name: n.name,\n    mountParcel: rt.bind(n),\n    singleSpa: t\n  });\n  return n.unmountThisParcel && (e.unmountSelf = n.unmountThisParcel), e;\n}\n\nvar ut = function (t) {\n  function n() {\n    return function (t, n) {\n      if (!(t instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n    }(this, n), l(this, a(n).apply(this, arguments));\n  }\n\n  return function (t, n) {\n    if (\"function\" != typeof n && null !== n) throw new TypeError(\"Super expression must either be null or a function\");\n    t.prototype = Object.create(n && n.prototype, {\n      constructor: {\n        value: t,\n        writable: !0,\n        configurable: !0\n      }\n    }), n && c(t, n);\n  }(n, f(Error)), n;\n}();\n\nfunction at(t) {\n  return Promise.resolve().then(function () {\n    return t.status !== g && t.status !== N ? t : (t.status = w, Promise.resolve().then(function () {\n      var e = t.loadImpl(it(t));\n      if (!Q(e)) throw new ut(\"single-spa loading function did not return a promise. Check the second argument to registerApplication('\".concat(t.name, \"', loadingFunction, activityFunction)\"));\n      return e.then(function (e) {\n        var o;\n        return t.loadErrorTime = null, \"object\" !== r(n = e) && (o = \"does not export anything\"), H(n.bootstrap) || (o = \"does not export a bootstrap function or array of functions\"), H(n.mount) || (o = \"does not export a mount function or array of functions\"), H(n.unmount) || (o = \"does not export an unmount function or array of functions\"), o ? (console.error(\"The loading function for single-spa application '\".concat(t.name, \"' resolved with the following, which does not have bootstrap, mount, and unmount functions\"), n), m(o, t), t.status = j, t) : (n.devtools && n.devtools.overlays && (t.devtools.overlays = u({}, t.devtools.overlays, {}, n.devtools.overlays)), t.status = y, t.bootstrap = J(n.bootstrap, \"App '\".concat(t.name, \"' bootstrap function\")), t.mount = J(n.mount, \"App '\".concat(t.name, \"' mount function\")), t.unmount = J(n.unmount, \"App '\".concat(t.name, \"' unmount function\")), t.unload = J(n.unload || [], \"App '\".concat(t.name, \"' unload function\")), t.timeouts = K(n.timeouts), t);\n      });\n    }).catch(function (n) {\n      return m(n, t), n instanceof ut ? t.status = j : (t.status = N, t.loadErrorTime = new Date().getTime()), t;\n    }));\n    var n;\n  });\n}\n\nvar ct = {\n  hashchange: [],\n  popstate: []\n},\n    st = [\"hashchange\", \"popstate\"];\n\nfunction ft(t) {\n  var n,\n      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};\n  if (\"string\" == typeof t) n = t;else if (this && this.href) n = this.href;else {\n    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(\"singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag\");\n    n = t.currentTarget.href, t.preventDefault();\n  }\n  var r = wt(window.location.href),\n      o = wt(n);\n  if (0 === n.indexOf(\"#\")) window.location.hash = \"#\" + o.anchor;else if (r.host !== o.host && o.host) {\n    if (e.isTestingEnv) return {\n      wouldHaveReloadedThePage: !0\n    };\n    window.location.href = n;\n  } else !function (t, n) {\n    return n === t || n === \"/\" + t;\n  }(o.path + \"?\" + o.query, r.path + \"?\" + r.query) ? window.history.pushState(null, null, n) : window.location.hash = \"#\" + o.anchor;\n}\n\nfunction lt(t) {\n  var n = this;\n\n  if (t) {\n    var e = t[0].type;\n    st.indexOf(e) >= 0 && ct[e].forEach(function (e) {\n      e.apply(n, t);\n    });\n  }\n}\n\nfunction pt() {\n  qt([], arguments);\n}\n\nwindow.addEventListener(\"hashchange\", pt), window.addEventListener(\"popstate\", pt);\nvar mt = window.addEventListener,\n    ht = window.removeEventListener;\nwindow.addEventListener = function (t, n) {\n  if (!(\"function\" == typeof n && st.indexOf(t) >= 0) || $(ct[t], function (t) {\n    return t === n;\n  })) return mt.apply(this, arguments);\n  ct[t].push(n);\n}, window.removeEventListener = function (t, n) {\n  if (!(\"function\" == typeof n && st.indexOf(t) >= 0)) return ht.apply(this, arguments);\n  ct[t] = ct[t].filter(function (t) {\n    return t !== n;\n  });\n};\nvar dt = window.history.pushState;\n\nwindow.history.pushState = function (t) {\n  var n = dt.apply(this, arguments);\n  return pt(gt(t)), n;\n};\n\nvar vt = window.history.replaceState;\n\nfunction gt(t) {\n  try {\n    return new PopStateEvent(\"popstate\", {\n      state: t\n    });\n  } catch (e) {\n    var n = document.createEvent(\"PopStateEvent\");\n    return n.initPopStateEvent(\"popstate\", !1, !1, t), n;\n  }\n}\n\nfunction wt(t) {\n  for (var n = {\n    strictMode: !0,\n    key: [\"source\", \"protocol\", \"authority\", \"userInfo\", \"user\", \"password\", \"host\", \"port\", \"relative\", \"path\", \"directory\", \"file\", \"query\", \"anchor\"],\n    q: {\n      name: \"queryKey\",\n      parser: /(?:^|&)([^&=]*)=?([^&]*)/g\n    },\n    parser: {\n      strict: /^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,\n      loose: /^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/\n    }\n  }, e = n.parser.strict.exec(t), r = {}, o = 14; o--;) r[n.key[o]] = e[o] || \"\";\n\n  return r[n.q.name] = {}, r[n.key[12]].replace(n.q.parser, function (t, e, o) {\n    e && (r[n.q.name][e] = o);\n  }), r;\n}\n\nwindow.history.replaceState = function (t) {\n  var n = vt.apply(this, arguments);\n  return pt(gt(t)), n;\n}, window.singleSpaNavigate = ft;\nvar yt = !1;\n\nfunction bt() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;\n\n  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !yt) {\n    var n = t.fn.on,\n        e = t.fn.off;\n    t.fn.on = function (t, e) {\n      return Et.call(this, n, window.addEventListener, t, e, arguments);\n    }, t.fn.off = function (t, n) {\n      return Et.call(this, e, window.removeEventListener, t, n, arguments);\n    }, yt = !0;\n  }\n}\n\nfunction Et(t, n, e, r, o) {\n  return \"string\" != typeof e ? t.apply(this, o) : (e.split(/\\s+/).forEach(function (t) {\n    st.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, \"\"));\n  }), \"\" === e.trim() ? this : t.apply(this, o));\n}\n\nvar Ot = {};\n\nfunction Pt(t) {\n  return Promise.resolve().then(function () {\n    var n = Ot[t.name];\n    return n ? t.status === g ? (Tt(t, n), t) : t.status === S ? n.promise.then(function () {\n      return t;\n    }) : t.status !== E ? t : (t.status = S, F(t.unload(it(t)), \"Unloading application '\".concat(t.name, \"'\"), t.timeouts.unload).then(function () {\n      return Tt(t, n), t;\n    }).catch(function (e) {\n      return function (t, n, e) {\n        delete Ot[t.name], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, m(e, t), t.status = j, n.reject(e);\n      }(t, n, e), t;\n    })) : t;\n  });\n}\n\nfunction Tt(t, n) {\n  delete Ot[t.name], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = g, n.resolve();\n}\n\nfunction At(t, n, e, r) {\n  Ot[t.name] = {\n    app: t,\n    resolve: e,\n    reject: r\n  }, Object.defineProperty(Ot[t.name], \"promise\", {\n    get: n\n  });\n}\n\nvar St = [];\n\nfunction Nt() {\n  return St.filter(_).map(M);\n}\n\nfunction jt() {\n  return St.map(M);\n}\n\nfunction _t(t) {\n  var n = $(St, function (n) {\n    return n.name === t;\n  });\n  return n ? n.status : null;\n}\n\nfunction Dt(t, n, e) {\n  return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use \"registerApplication\" instead'), xt(t, n, e);\n}\n\nfunction xt(t, n, e) {\n  var o,\n      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};\n  if (\"string\" != typeof t || 0 === t.length) throw Error(\"The first argument must be a non-empty string 'appName'\");\n  if (-1 !== jt().indexOf(t)) throw Error(\"There is already an app declared with name \".concat(t));\n  if (\"object\" !== r(i) || Array.isArray(i)) throw Error(\"customProps must be an object\");\n  if (!n) throw Error(\"The application or loading function is required\");\n  if (o = \"function\" != typeof n ? function () {\n    return Promise.resolve(n);\n  } : n, \"function\" != typeof e) throw Error(\"The activeWhen argument must be a function\");\n  St.push({\n    loadErrorTime: null,\n    name: t,\n    loadImpl: o,\n    activeWhen: e,\n    status: g,\n    parcels: {},\n    devtools: {\n      overlays: {\n        options: {},\n        selectors: []\n      }\n    },\n    customProps: i\n  }), bt(), qt();\n}\n\nfunction Ut(t) {\n  for (var n = [], e = 0; e < St.length; e++) St[e].activeWhen(t) && n.push(St[e].name);\n\n  return n;\n}\n\nfunction Ct() {\n  return St.filter(L).filter(I).filter(U).filter(C);\n}\n\nfunction Rt(t, n) {\n  return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use \"unloadApplication\" instead'), Lt(t, n);\n}\n\nfunction Lt(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {\n    waitForUnmount: !1\n  };\n  if (\"string\" != typeof t) throw Error(\"unloadApplication requires a string 'appName'\");\n  var e = $(St, function (n) {\n    return n.name === t;\n  });\n  if (!e) throw Error(\"Could not unload application '\".concat(t, \"' because no such application has been registered\"));\n\n  var r,\n      o = function (t) {\n    return Ot[t];\n  }(e.name);\n\n  if (n && n.waitForUnmount) {\n    if (o) return o.promise;\n    var i = new Promise(function (t, n) {\n      At(e, function () {\n        return i;\n      }, t, n);\n    });\n    return i;\n  }\n\n  return o ? (r = o.promise, It(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {\n    At(e, function () {\n      return r;\n    }, t, n), It(e, t, n);\n  }), r;\n}\n\nfunction It(t, n, e) {\n  z(t).then(Pt).then(function () {\n    n(), setTimeout(function () {\n      qt();\n    });\n  }).catch(e);\n}\n\nvar Mt = !1,\n    Bt = [];\n\nfunction Gt() {\n  return qt();\n}\n\nfunction qt() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],\n      n = arguments.length > 1 ? arguments[1] : void 0;\n  if (Mt) return new Promise(function (t, e) {\n    Bt.push({\n      resolve: t,\n      reject: e,\n      eventArguments: n\n    });\n  });\n  Mt = !0;\n  var r = !0;\n  return kt ? Promise.resolve().then(function () {\n    window.dispatchEvent(new e(\"single-spa:before-routing-event\", u()));\n    var n = Object.keys(Ot).map(function (t) {\n      return Ot[t].app;\n    }).filter(D).map(Pt),\n        a = St.filter(L).filter(_).filter(R).map(z).map(function (t) {\n      return t.then(Pt);\n    }).concat(n);\n    a.length > 0 && (r = !1);\n    var c = Promise.all(a),\n        s = Ct(),\n        f = s.map(function (t) {\n      return at(t).then(V).then(function (t) {\n        return c.then(function () {\n          return Z(t);\n        });\n      });\n    });\n    f.length > 0 && (r = !1);\n    var l = St.filter(L).filter(D).filter(x).filter(C).filter(function (t) {\n      return s.indexOf(t) < 0;\n    }).map(function (t) {\n      return V(t).then(function () {\n        return c;\n      }).then(function () {\n        return Z(t);\n      });\n    });\n    return l.length > 0 && (r = !1), c.catch(function (t) {\n      throw i(), t;\n    }).then(function () {\n      return i(), Promise.all(f.concat(l)).catch(function (n) {\n        throw t.forEach(function (t) {\n          return t.reject(n);\n        }), n;\n      }).then(function () {\n        return o(!1);\n      });\n    });\n  }) : Promise.resolve().then(function () {\n    var t = Ct().map(at);\n    return t.length > 0 && (r = !1), Promise.all(t).then(o).catch(function (t) {\n      throw i(), t;\n    });\n  });\n\n  function o() {\n    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],\n        o = Nt();\n    n && i(), t.forEach(function (t) {\n      return t.resolve(o);\n    });\n\n    try {\n      var a = r ? \"single-spa:no-app-change\" : \"single-spa:app-change\";\n      window.dispatchEvent(new e(a, u())), window.dispatchEvent(new e(\"single-spa:routing-event\", u()));\n    } catch (t) {\n      setTimeout(function () {\n        throw t;\n      });\n    }\n\n    if (Mt = !1, Bt.length > 0) {\n      var c = Bt;\n      Bt = [], qt(c);\n    }\n\n    return o;\n  }\n\n  function i() {\n    t.forEach(function (t) {\n      lt(t.eventArguments);\n    }), lt(n);\n  }\n\n  function u() {\n    var t = {\n      detail: {}\n    };\n    return n && n[0] && (t.detail.originalEvent = n[0]), t;\n  }\n}\n\nvar kt = !1;\n\nfunction Wt() {\n  kt = !0, qt();\n}\n\nsetTimeout(function () {\n  kt || console.warn(\"singleSpa.start() has not been called, \".concat(5e3, \"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start\"));\n}, 5e3);\nvar Ft = {\n  getRawAppData: function () {\n    return [].concat(St);\n  },\n  reroute: qt,\n  NOT_LOADED: g,\n  toLoadPromise: at,\n  toBootstrapPromise: V,\n  unregisterApplication: function (t) {\n    if (!St.find(function (n) {\n      return n.name === t;\n    })) throw Error(\"Cannot unregister application '\".concat(t, \"' because no such application has been registered\"));\n    return Lt(t).then(function () {\n      var n = St.findIndex(function (n) {\n        return n.name === t;\n      });\n      St.splice(n, 1);\n    });\n  }\n};\nwindow && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ft);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://reactapp/./node_modules/single-spa/lib/esm/single-spa.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack://reactapp/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./single-spa.config.js":
/*!******************************!*\
  !*** ./single-spa.config.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n\nvar registerApplication = single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"],\n    start = single_spa__WEBPACK_IMPORTED_MODULE_0__[\"start\"];\nregisterApplication('test', function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./src/main.app */ \"./src/main.app.js\"));\n}, function () {\n  return true;\n});\nstart();\n\n//# sourceURL=webpack://reactapp/./single-spa.config.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./single-spa.config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./single-spa.config.js */\"./single-spa.config.js\");\n\n\n//# sourceURL=webpack://reactapp/multi_./single-spa.config.js?");

/***/ })

/******/ })});;