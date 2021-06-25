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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/a.css */ \"./src/css/a.css\");\n\r\n// import '../css/index.css';\r\n\r\nlet shouldMove = false;//用来判断是否在点击的状态下\r\nconst captcha = document.querySelector('#captcha');\r\nconst handle = document.querySelector('#handle');\r\nconst button = document.querySelector('#handle span');\r\n\r\n// 鼠标按下\r\nbutton.addEventListener('mousedown',(e)=>{\r\n    shouldMove = true;\r\n})\r\n\r\n// 鼠标移动\r\nwindow.addEventListener('mousemove',(e)=>{\r\n    if(shouldMove){\r\n        // 定义常量 获取拉到杆与动画左边的位移\r\n        const offsetLeft = handle.getBoundingClientRect().left;\r\n        // console.log('杆与动画左边的位移:'+offsetLeft);\r\n        // console.log(e.clientX);\r\n        // 定义常量 获取拉到杆的宽\r\n        const buttonWidth = button.getBoundingClientRect().width;\r\n        //修改captcha --moved的值\r\n        captcha.style.setProperty('--moved',`${e.clientX - offsetLeft - buttonWidth/2}px`)\r\n    }\r\n})\r\n\r\n// 鼠标放开\r\nwindow.addEventListener('mouseup',(e)=>{\r\n    if(shouldMove){\r\n        const finalOffset = e.clientX - handle.getBoundingClientRect().left\r\n        // console.log(finalOffset);\r\n        if(finalOffset>=430&&finalOffset<=450){\r\n            captcha.classList.add('passed');\r\n        }else{\r\n            captcha.style.setProperty('--moved','0px');\r\n        }\r\n        shouldMove = false;\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/css/a.css":
/*!***********************!*\
  !*** ./src/css/a.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/a.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;