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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContactPage\": () => (/* binding */ showContactPage)\n/* harmony export */ });\nfunction showContactPage() {\r\n  const body = document.querySelector(\".overlay\");\r\n\r\n  const container = document.querySelector(\"#container\");\r\n\r\n  const markup = `\r\n  <div class=\"contact__container\">\r\n  <div class=\"contact___details\">\r\n    <h2>Visit Us!</h2>\r\n    <h4>Location</h4>\r\n    <p>15 Yemen road. Yemen</p>\r\n    <h4>Telephone No.</h4>\r\n    <p>77-77777777</p>\r\n  </div>\r\n  <iframe\r\n    class=\"map\"\r\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13738.329721045395!2d-97.45052856695997!3d30.58933117662142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ddfe5076ef75%3A0x94d9ff7e03b58c85!2sYemen%20Rd%2C%20Taylor%2C%20TX%2076574%2C%20USA!5e0!3m2!1sen!2sph!4v1655730910235!5m2!1sen!2sph\"\r\n    style=\"border: 0\"\r\n    allowfullscreen=\"\"\r\n    loading=\"lazy\"\r\n    referrerpolicy=\"no-referrer-when-downgrade\"\r\n  ></iframe>\r\n</div>\r\n</div>\r\n    `;\r\n\r\n  container.innerHTML = markup;\r\n\r\n  body.style.background = `url(/img/contact.jpg) no-repeat`;\r\n  body.style.backgroundSize = `cover`;\r\n  body.style.backgroundPosition = `center`;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHomePage\": () => (/* binding */ showHomePage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\nfunction showHomePage() {\r\n  const body = document.querySelector(\".overlay\");\r\n\r\n  const container = document.querySelector(\"#container\");\r\n\r\n  const markup = `\r\n    <div class=\"content--home\">\r\n        <h1 class=\"headline\">\r\n          The best <strong>Pizza and Beer</strong> in town!\r\n        </h1>\r\n        <button class=\"btn--order\">Order now!</button>\r\n        <div class=\"details\">\r\n          <div class=\"schedule\">\r\n            <ion-icon class=\"icon--time\" name=\"time-outline\"></ion-icon>\r\n            <p class=\"hours\">Mon to Fri: 10:00am-8pm</p>\r\n            <p class=\"hours\">Sat to Sun: 10:00am-10pm</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n  container.innerHTML = markup;\r\n\r\n  body.style.background = `url(img/home.jpg) no-repeat`;\r\n  body.style.backgroundSize = `cover`;\r\n  body.style.backgroundPosition = `center`;\r\n\r\n  const menu = document.querySelector(\".link--menu\");\r\n\r\n  const btnOrder = document.querySelector(\".btn--order\");\r\n  btnOrder.addEventListener(\"click\", () => {\r\n    (0,___WEBPACK_IMPORTED_MODULE_1__.removeActive)();\r\n    menu.classList.add(\"active\");\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.showMenuPage)();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeActive\": () => (/* binding */ removeActive)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n//--------Open and Close Nav-------\\\\\r\nconst btnOpenMenu = document.querySelector(\".icon--open\");\r\nconst btnCloseMenu = document.querySelector(\".icon--close\");\r\n\r\nfunction showMenu() {\r\n  const menu = document.querySelector(\".links\");\r\n\r\n  btnOpenMenu.style.visibility = \"hidden\";\r\n  btnCloseMenu.style.visibility = \"visible\";\r\n  menu.style.transform = \"translateX(0)\";\r\n}\r\n\r\nfunction hideMenu() {\r\n  const menu = document.querySelector(\".links\");\r\n\r\n  btnOpenMenu.style.visibility = \"visible\";\r\n  btnCloseMenu.style.visibility = \"hidden\";\r\n  menu.style.transform = \"translateX(100%)\";\r\n}\r\n\r\nbtnOpenMenu.addEventListener(\"click\", showMenu);\r\nbtnCloseMenu.addEventListener(\"click\", hideMenu);\r\n\r\n//--------Show pages-------\\\\\r\nconst links = document.querySelectorAll(\".link\");\r\n\r\nlinks.forEach((link) => {\r\n  link.addEventListener(\"click\", function (e) {\r\n    removeActive();\r\n    this.classList.add(\"active\");\r\n\r\n    if (\r\n      link.classList.contains(\"active\") &&\r\n      link.classList.contains(\"link--home\")\r\n    )\r\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHomePage)();\r\n    else if (\r\n      link.classList.contains(\"active\") &&\r\n      link.classList.contains(\"link--menu\")\r\n    )\r\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.showMenuPage)();\r\n    else if (\r\n      link.classList.contains(\"active\") &&\r\n      link.classList.contains(\"link--contact\")\r\n    )\r\n      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.showContactPage)();\r\n  });\r\n});\r\n\r\nfunction removeActive() {\r\n  links.forEach((link) => link.classList.remove(\"active\"));\r\n}\r\n\r\n//Init\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.showHomePage)();\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenuPage\": () => (/* binding */ showMenuPage)\n/* harmony export */ });\nfunction showMenuPage() {\r\n  const body = document.querySelector(\".overlay\");\r\n\r\n  const container = document.querySelector(\"#container\");\r\n\r\n  const markup = `\r\n    <h2 class=\"menu__heading\">Pizza</h2>\r\n    <div class=\"menu__list\">\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Classic Cheese</span>\r\n          <small>\r\n            This stripped-down American version of pizza deserves a tasty\r\n            American Pale Ale.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $2</p>\r\n          <p>Whole: <strong>$15</strong></p>\r\n          <p>Combo: $3.5</p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Classic Pepperoni</span>\r\n          <small>\r\n            The slightly spicy notes of the pepperoni go really well with a\r\n            malty beer.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $2.5</p>\r\n          <p>Whole: <strong>$19</strong></p>\r\n          <p>Combo: $4</p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Vegetarian</span>\r\n          <small>\r\n            A nice summer kolsch that plays second fiddle to the delicate\r\n            veggies.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $2.8</p>\r\n          <p>Whole: <strong>$22</strong></p>\r\n          <p>Combo: $4.5</p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Mushroom</span>\r\n          <small>\r\n            An English Ale like Old Speckled Hen which has a bit of sweetness\r\n            to brighten up the pizza.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $3</p>\r\n          <p>Whole: <strong>$23</strong></p>\r\n          <p>Combo: $4.9</p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Seafood</span>\r\n          <small>\r\n            Off Color’s Fierce, a Berliner Weiss known for its super tart\r\n            acidity with heavy lemon character.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $4</p>\r\n          <p>Whole: <strong>$33</strong></p>\r\n          <p>Combo: $5.5</p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Meat Lovers</span>\r\n          <small>\r\n            So much meat, so little time…reach for a dark smoked beer in this\r\n            situation to give the various toppings a more authentic smoky\r\n            backbone.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Slice: $5</p>\r\n          <p>Whole: <strong>$40</strong></p>\r\n          <p>Combo: $6</p>\r\n        </div>\r\n      </li>\r\n    </div>\r\n\r\n    <h2 class=\"menu__heading\">Beer</h2>\r\n    <div class=\"menu__list\">\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>American Pale Ale</span>\r\n          <small>\r\n            Alter Brewing Hopular Kid has just enough bitterness to cut\r\n            through some of the richness of the cheese.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Malty beer</span>\r\n          <small>\r\n            Ale Asylum’s Madtown Nut Brown and its light caramel sweetness.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Summer kolsch</span>\r\n          <small>\r\n            Around the Bend Ghost of Lectricity, which is a very delicate\r\n            Kolsch that won't overpower the veggies.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>English Ale</span>\r\n          <small>\r\n            An English Ale like Old Speckled Hen which has a subtle earthy hop\r\n            profile and a bit of sweetness to brighten up the pizza.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Berliner Weiss</span>\r\n          <small>\r\n            Off Color's Fierce, a Berliner Weiss known for its super tart\r\n            acidity with heavy lemon character.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n      <li class=\"pizza\">\r\n        <div class=\"pizza_details\">\r\n          <span>Dark smoked beer</span>\r\n          <small>\r\n            Schlenkerla Marzen has an aroma of bacon and char and finishes\r\n            with a roasty sweetness that is perfect.\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"pizza__price\">\r\n          <p>Bottle: $2</p>\r\n          <p>Bucket: <strong>$15</strong></p>\r\n        </div>\r\n      </li>\r\n    </div>\r\n      `;\r\n\r\n  container.innerHTML = markup;\r\n\r\n  body.style.background = `url(/img/menu.jpg) no-repeat`;\r\n  body.style.backgroundSize = `cover`;\r\n  body.style.backgroundPosition = `center`;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;