/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const myTasks = [\r\n  {\r\n    description: \"Build no profit projects\",\r\n    completed: false,\r\n    index: 0,\r\n  },\r\n  {\r\n    description: \"Nature walk\",\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: \"Learn new languages\",\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: \"Make pastries\",\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n];\r\nclass TodoList {\r\n  static addMyTask(task) {\r\n    const wrapper = document.querySelector(\".wrapper\");\r\n\r\n    wrapper.innerHTML += `\r\n        <div class=\"todo-content\">\r\n          <div class=\"content-list\">\r\n            <input type=\"checkbox\" name=\"checkbox\" id=\"checkbox\" />\r\n            <p class=\"todo-title\">${task.description}</p>\r\n            <div class=\"btn-container\">\r\n              <button class=\"edit\"><i class=\"uil uil-ellipsis-v\"></i></button>\r\n              <button class=\"delete hide\">\r\n                <i class=\"uil uil-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          </div><hr> \r\n    `;\r\n  }\r\n}\r\nfor (let i = 0; i < myTasks.length; i += 1) {\r\n  TodoList.addMyTask(myTasks[i]);\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;