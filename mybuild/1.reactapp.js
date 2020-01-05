(window["webpackJsonpreactapp"] = window["webpackJsonpreactapp"] || []).push([[1],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \" Hello from React App\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://reactapp/./src/App.js?");

/***/ }),

/***/ "./src/main.app.js":
/*!*************************!*\
  !*** ./src/main.app.js ***!
  \*************************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrap\", function() { return bootstrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unmount\", function() { return unmount; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"./node_modules/single-spa-react/lib/single-spa-react.js\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component.js */ \"./src/root.component.js\");\n\n\n\n\n\nfunction domElementGetter() {\n  return document.getElementById(\"root\");\n}\n\nvar reactLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({\n  React: react__WEBPACK_IMPORTED_MODULE_0___default.a,\n  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1___default.a,\n  rootComponent: _root_component_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  domElementGetter: domElementGetter\n});\nvar bootstrap = [reactLifecycles.bootstrap];\nvar mount = [reactLifecycles.mount];\nvar unmount = [reactLifecycles.unmount];\n\n//# sourceURL=webpack://reactapp/./src/main.app.js?");

/***/ }),

/***/ "./src/root.component.js":
/*!*******************************!*\
  !*** ./src/root.component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\nfunction rootApp() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootApp);\n\n//# sourceURL=webpack://reactapp/./src/root.component.js?");

/***/ })

}]);