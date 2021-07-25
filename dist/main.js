/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Data = /*#__PURE__*/function () {\n  function Data() {\n    _classCallCheck(this, Data);\n  }\n\n  _createClass(Data, [{\n    key: \"eventKeyData\",\n    value: function eventKeyData(e) {\n      var key = e.key;\n      var keyCode = e.keyCode;\n      var code = e.code;\n      return {\n        key: key,\n        keyCode: keyCode,\n        code: code\n      };\n    }\n  }]);\n\n  return Data;\n}();\n\nvar data = new Data();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, [{\n    key: \"selectors\",\n    value: function selectors() {\n      var textBoxElm = document.querySelector('.textBox');\n      var textPElm = document.querySelector('.textP');\n      return {\n        textBoxElm: textBoxElm,\n        textPElm: textPElm\n      };\n    }\n  }, {\n    key: \"getData\",\n    value: function getData(key, keyCode, code) {\n      var _this$selectors = this.selectors(),\n          textPElm = _this$selectors.textPElm,\n          textBoxElm = _this$selectors.textBoxElm;\n\n      var elm = \"\\n            <span class=\\\"keytext\\\">key&nbsp;&nbsp;&nbsp;<i class=\\\"fas fa-arrow-right\\\"></i></span>\\n            <span class=\\\"box\\\">g</span>\\n            <span class=\\\"keytext\\\">keyCode&nbsp;&nbsp;&nbsp;<i class=\\\"fas fa-arrow-right\\\"></i></span>\\n            <span class=\\\"box\\\">h</span>\\n            <span class=\\\"keytext\\\">code&nbsp;&nbsp;&nbsp;<i class=\\\"fas fa-arrow-right\\\"></i></span>\\n            <span class=\\\"box\\\">12</span>\\n        \";\n      textPElm.style.display = 'none';\n      textBoxElm.style.display = 'block';\n      textBoxElm.innerHTML = elm;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      window.addEventListener('keyup', function (e) {\n        var _data$eventKeyData = _data__WEBPACK_IMPORTED_MODULE_0__.default.eventKeyData(e),\n            key = _data$eventKeyData.key,\n            keyCode = _data$eventKeyData.keyCode,\n            code = _data$eventKeyData.code;\n\n        _this.getData(key, keyCode, code);\n      });\n    }\n  }]);\n\n  return UI;\n}();\n\nvar ui = new UI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;