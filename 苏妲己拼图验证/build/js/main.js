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

/***/ "./src/css/a.css":
/*!***********************!*\
  !*** ./src/css/a.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/a.css?");

/***/ }),

/***/ "./src/css/iconfont.css":
/*!******************************!*\
  !*** ./src/css/iconfont.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/iconfont.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/iconfont.css */ \"./src/css/iconfont.css\");\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/a.css */ \"./src/css/a.css\");\n\r\n\r\n\r\nlet shouldMove = false;//用来判断是否在点击的状态下\r\nconst captcha = document.querySelector('#captcha');\r\nconst handle = document.querySelector('#handle');\r\nconst button = document.querySelector('#handle span');\r\nconst anniu = document.querySelectorAll('.anniu img');\r\nlet jia = document.querySelectorAll('.s');\r\nconst iconfont =document.querySelector('.iconfont');\r\n\r\n// 鼠标按下\r\nbutton.addEventListener('mousedown',(e)=>{\r\n    shouldMove = true;\r\n    // console.log(jia)\r\n    \r\n})\r\nbutton.addEventListener('touchstart',(e)=>{\r\n    shouldMove = true;\r\n    \r\n})\r\n\r\n// 换一套\r\nlet dd =0;\r\nlet ff =0;\r\nfunction iconbtn(){\r\n    iconfont.classList.toggle('icon-return');\r\n    iconfont.classList.toggle('icon-resonserate');\r\n    if(dd==0){dd=3;}else{dd=0;}\r\n    jia.forEach((btn,index)=>{\r\n     if(dd==3){\r\n        ff=index+dd;\r\n        jia[index].classList.add('a'+ff);\r\n        jia[index].classList.remove('a'+index);\r\n        captcha.classList.add('huan'+dd);\r\n        captcha.classList.remove('huan'+0);\r\n        captcha.classList.remove('passed');\r\n        captcha.style.setProperty('--moved','0px');\r\n     }else{\r\n         ff=index+3;\r\n         jia[index].classList.add('a'+index);\r\n         jia[index].classList.remove('a'+ff);\r\n         captcha.classList.remove('huan'+3);\r\n         captcha.classList.add('huan'+0);\r\n         captcha.classList.remove('huan'+ff);\r\n         captcha.classList.remove('passed');\r\n         captcha.style.setProperty('--moved','0px');\r\n     }\r\n    //}\r\n})\r\n}\r\niconfont.addEventListener('mousedown',()=>{\r\n    iconbtn();\r\n})\r\niconfont.addEventListener('touchstart',(e)=>{\r\n    e.preventDefault();\r\n    iconbtn()\r\n})\r\n\r\n// 换图\r\nlet ass=0;\r\nfunction mousedownTouchstart(index){\r\n    captcha.classList.add('huan'+`${index+dd}`);\r\n    // console.log(dd);\r\n    for(let i =0;i<jia.length;i++){\r\n        if(i==index){\r\n         // ass = i-1;\r\n         if(i==0){\r\n             ass = i+1+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             ass = i+2+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             captcha.classList.remove('passed');\r\n             captcha.style.setProperty('--moved','0px');\r\n             ass=0;\r\n         }else if(i==1){\r\n             ass = i-1+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             ass = i+1+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             captcha.classList.remove('passed');\r\n             captcha.style.setProperty('--moved','0px');\r\n             ass=0;\r\n         }else{\r\n             ass = i-1+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             ass = i-2+dd;\r\n             captcha.classList.remove('huan'+ass);\r\n             captcha.classList.remove('passed');\r\n             captcha.style.setProperty('--moved','0px');\r\n             ass=0;\r\n         }\r\n         // captcha.classList.remove('huan'+ass);\r\n         // console.log(ass);\r\n        }\r\n    }\r\n}\r\njia.forEach((btn,index) =>{\r\n    btn.addEventListener('mousedown',(e)=>{\r\n        mousedownTouchstart(index)\r\n    });\r\n    btn.addEventListener('touchstart',(e)=>{\r\n        mousedownTouchstart(index)\r\n    });\r\n});\r\n\r\n\r\n// 鼠标移动\r\nfunction mousemoveTouchmove (e){\r\n    if(shouldMove){\r\n        e.stopPropagation();\r\n        var touch ; \r\n        if(e.touches){\r\n            touch = e.changedTouches[0]\r\n        }else{\r\n            touch=e;\r\n        }\r\n        // 定义常量 获取拉到杆与动画左边的位移\r\n        const offsetLeft = handle.getBoundingClientRect().left;\r\n        // 定义常量 获取拉到杆的宽\r\n        const buttonWidth = button.getBoundingClientRect().width;\r\n        //修改captcha --moved的值\r\n        captcha.style.setProperty('--moved',`${touch.clientX/16 - offsetLeft/16 - buttonWidth/32}rem`)\r\n    }\r\n}\r\nwindow.addEventListener('touchmove',(e)=>{\r\n    mousemoveTouchmove (e)\r\n})\r\nwindow.addEventListener('mousemove',(e)=>{\r\n    mousemoveTouchmove (e)\r\n})\r\n\r\n// 鼠标放开\r\nfunction mouseupTouchend (e){\r\n    if(shouldMove){\r\n        var touch ;\r\n        if(e.touches){\r\n            touch = e.changedTouches[0]\r\n        }else {\r\n            touch = e;\r\n        }\r\n        const finalOffset = touch.clientX - handle.getBoundingClientRect().left\r\n        if(finalOffset>=captcha.clientWidth&&finalOffset<=captcha.clientWidth+button.clientWidth){\r\n            captcha.classList.add('passed');\r\n        }else{\r\n            captcha.style.setProperty('--moved','0px');\r\n        }\r\n        shouldMove = false;\r\n        // console.log(shouldMove)\r\n    }\r\n}\r\nwindow.addEventListener('touchend',(e)=>{\r\n    mouseupTouchend(e)\r\n})\r\nwindow.addEventListener('mouseup',(e)=>{\r\n    mouseupTouchend(e)\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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