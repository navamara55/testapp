webpackHotUpdate("main",{

/***/ "./single-spa.config.js":
/*!******************************!*\
  !*** ./single-spa.config.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n\nvar registerApplication = single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"],\n    start = single_spa__WEBPACK_IMPORTED_MODULE_0__[\"start\"];\ndebugger;\nregisterApplication('test', function () {\n  return Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n}, function () {\n  return true;\n});\nstart();\n\n//# sourceURL=webpack:///./single-spa.config.js?");

/***/ })

})