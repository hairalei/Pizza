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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHomePage\": () => (/* binding */ showHomePage)\n/* harmony export */ });\nfunction showHomePage() {\r\n  const container = document.querySelector(\"#container\");\r\n  const markup = `\r\n    <div class=\"content--home\">\r\n        <h1 class=\"headline\">\r\n          The best <strong>Pizza and Beer</strong> in town!\r\n        </h1>\r\n        <button class=\"btn--order\">Order now!</button>\r\n        <div class=\"details\">\r\n          <div class=\"schedule\">\r\n            <ion-icon class=\"icon--time\" name=\"time-outline\"></ion-icon>\r\n            <p class=\"hours\">Mon to Fri: 10:00am-8pm</p>\r\n            <p class=\"hours\">Sat to Sun: 10:00am-10pm</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n  container.innerHTML = markup;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n//--------Open and Close Nav-------\\\\\r\nconst btnOpenMenu = document.querySelector(\".icon--open\");\r\nconst btnCloseMenu = document.querySelector(\".icon--close\");\r\n\r\nfunction showMenu() {\r\n  const menu = document.querySelector(\".links\");\r\n\r\n  btnOpenMenu.style.visibility = \"hidden\";\r\n  btnCloseMenu.style.visibility = \"visible\";\r\n  menu.style.transform = \"translateX(0)\";\r\n}\r\n\r\nfunction hideMenu() {\r\n  const menu = document.querySelector(\".links\");\r\n\r\n  btnOpenMenu.style.visibility = \"visible\";\r\n  btnCloseMenu.style.visibility = \"hidden\";\r\n  menu.style.transform = \"translateX(100%)\";\r\n}\r\n\r\nbtnOpenMenu.addEventListener(\"click\", showMenu);\r\nbtnCloseMenu.addEventListener(\"click\", hideMenu);\r\n\r\n//--------Show pages-------\\\\\r\nconst links = document.querySelectorAll(\".link\");\r\nconst home = document.querySelector(\".link--home\");\r\nconst menu = document.querySelector(\".link--menu\");\r\nconst contact = document.querySelector(\".link--contact\");\r\n\r\nlinks.forEach((link) => {\r\n  if (\r\n    link.classList.contains(\"active\") &&\r\n    link.classList.contains(\"link--home\")\r\n  )\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHomePage)();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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