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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('section');\n    main.appendChild(contact);\n\n    const phone = document.createElement('div');\n    phone.innerText = \"(123) 456-7890\"\n    phone.classList.add(\"contact-info\");\n    contact.appendChild(phone);\n\n    const address = document.createElement('div');\n    address.innerText = \"123 Main St. New York City, New York 54321\"\n    address.classList.add(\"contact-info\");\n    contact.appendChild(address);\n\n    return contact;\n}\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('section');\n    main.appendChild(home);\n\n    const chefImg = document.createElement('img');\n    chefImg.src = \"images/remy.png\";\n    chefImg.alt = \"Chef Remy\";\n    chefImg.classList.add(\"chefImg\");\n    home.appendChild(chefImg);\n\n    const chefText = document.createElement('div');\n    chefText.innerText = \"Chef Remy\";\n    home.appendChild(chefText);\n\n    return home;\n}\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// console.log(\"testing testing 123\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('section');\n    menu.appendChild(createMenuItem(\"Baked Beans\", \"Bean, Bacon, Brisket\"));\n    menu.appendChild(createMenuItem(\"Green Beans\", \"Green Beans, Bacon, Butter\"));\n\n    return menu;\n}\n\nfunction createMenuItem(name, description) {\n    const menuItem = document.createElement('article');\n    menuItem.classList.add(\"menu-item\");\n\n    const itemName = document.createElement('div');\n    itemName.classList.add(\"item-name\");\n    itemName.textContent = name;\n    const itemDescription = document.createElement('div');\n    itemDescription.classList.add(\"item-description\");\n    itemDescription.textContent = description;\n\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemDescription);\n    \n\n    return menuItem;\n}\n\nfunction loadMenu() {\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createBody() {\n    // const body = document.querySelector('#body');\n\n    body.style.backgroundImage = \"url(images/fancy-restaurant.jpeg)\";\n    body.style.backgroundSize = \"100% 100%\";\n\n    // const restaurantImg = document.createElement('img');\n    // restaurantImg.src = \"images/fancy-restaurant.jpeg\";\n    // restaurantImg.alt = \"Fancy Restaurant\"\n    // body.appendChild(restaurantImg);\n\n    return;\n}\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.innerText = \"Beeeeans\";\n    body.appendChild(header);\n\n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n    body.appendChild(nav);\n\n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add('nav-button');\n    homeBtn.innerText = \"Home\";\n    nav.appendChild(homeBtn);\n    nav.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active-tab\")) {\n            return;\n        }\n        setActiveTab(homeBtn);\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add('nav-button');\n    menuBtn.innerText = \"Menu\";\n    nav.appendChild(menuBtn);\n    nav.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active-tab\")) {\n            return;\n        }\n        setActiveTab(menuBtn);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    const contactBtn = document.createElement('button');\n    contactBtn.classList.add('nav-button');\n    contactBtn.innerText = \"Contact\";\n    nav.appendChild(contactBtn);\n    nav.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active-tab\")) {\n            return;\n        }\n        setActiveTab(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    return nav;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.setAttribute('id', 'main');\n    body.appendChild(main);\n\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.innerText = \"Odin Project\";\n    body.appendChild(footer);\n\n    return footer;\n}\n\nfunction setActiveTab(button) {\n    const buttons = document.querySelectorAll('.nav-button');\n    buttons.forEach((button) => {\n        if (button !== this){\n            button.classList.remove('active-tab');\n        }\n    })\n    button.classList.add('active-tab');\n    // console.log(\"Active Button: \" + button.innerText);\n}\n\nfunction initializeWebsite() {\n    const body = document.querySelector('#body');\n    createBody();\n    body.appendChild(createHeader());\n    body.appendChild(createNav());\n    body.appendChild(createMain());\n    body.appendChild(createFooter());\n\n    setActiveTab(document.querySelector(\".nav-button\"));\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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