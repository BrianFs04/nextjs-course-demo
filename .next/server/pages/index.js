module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/brian/Desktop/nextjs-preview/02-basics2/components/meetups/MeetupItem.js\";\n\n\n\n\nfunction MeetupItem(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const showDetailsHandler = () => {\n    router.push(`/${props.id}`);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.image,\n          alt: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: showDetailsHandler,\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcz85MGI5Il0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUMxQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDaENGLFVBQU0sQ0FBQ0csSUFBUCxDQUFhLElBQUdKLEtBQUssQ0FBQ0ssRUFBRyxFQUF6QjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSSxhQUFTLEVBQUVDLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsMkJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVELDZEQUFPLENBQUNFLEtBQXhCO0FBQUEsK0JBQ0M7QUFBSyxhQUFHLEVBQUVSLEtBQUssQ0FBQ1EsS0FBaEI7QUFBdUIsYUFBRyxFQUFFUixLQUFLLENBQUNTO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUVILDZEQUFPLENBQUNJLE9BQXhCO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBS1YsS0FBSyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFBLG9CQUFVVCxLQUFLLENBQUNXO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFRQztBQUFLLGlCQUFTLEVBQUVMLDZEQUFPLENBQUNNLE9BQXhCO0FBQUEsK0JBQ0M7QUFBUSxpQkFBTyxFQUFFVCxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0JBOztBQUVjSix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cEl0ZW0ocHJvcHMpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3Qgc2hvd0RldGFpbHNIYW5kbGVyID0gKCkgPT4ge1xuXHRcdHJvdXRlci5wdXNoKGAvJHtwcm9wcy5pZH1gKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG5cdFx0XHQ8Q2FyZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuXHRcdFx0XHRcdDxoMz57cHJvcHMudGl0bGV9PC9oMz5cblx0XHRcdFx0XHQ8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9DYXJkPlxuXHRcdDwvbGk+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.js\n");

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__3siMU\",\n\t\"image\": \"MeetupItem_image__13rAP\",\n\t\"content\": \"MeetupItem_content__3uEkT\",\n\t\"actions\": \"MeetupItem_actions__LvT9B\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzPzFiMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/brian/Desktop/nextjs-preview/02-basics2/components/meetups/MeetupList.js\";\n\n\n\nfunction MeetupList(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      id: meetup.id,\n      image: meetup.image,\n      title: meetup.title,\n      address: meetup.address\n    }, meetup.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcz82OTFiIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixzQkFDRTtBQUFJLGFBQVMsRUFBRUMsNkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSxjQUNHRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsR0FBZCxDQUFtQkMsTUFBRCxpQkFDakIscUVBQUMsbURBQUQ7QUFFRSxRQUFFLEVBQUVBLE1BQU0sQ0FBQ0MsRUFGYjtBQUdFLFdBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUhoQjtBQUlFLFdBQUssRUFBRUYsTUFBTSxDQUFDRyxLQUpoQjtBQUtFLGFBQU8sRUFBRUgsTUFBTSxDQUFDSTtBQUxsQixPQUNPSixNQUFNLENBQUNDLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0FBRWNQLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.js\n");

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"MeetupList_list__1iafn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzPzlhMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.module.css\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/brian/Desktop/nextjs-preview/02-basics2/components/ui/Card.js\";\n\n\nfunction Card(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanM/OTVlYSJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxJQUF4QjtBQUFBLGNBQStCRixLQUFLLENBQUNHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__3KSLO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz8yNGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/brian/Desktop/nextjs-preview/02-basics2/pages/index.js\";\n\n\n\n\nconst Homepage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Browse a huge list of highly active React meetups!!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true);\n}; // export async function getServerSideProps(context) {\n// \tconst req = context.req;\n// \tconst res = context.res;\n// \t// fetch data from an API\n// \treturn {\n// \t\tprops: {\n// \t\t\tmeetups: DUMMY_MEETUPS,\n// \t\t},\n// \t};\n// }\n\n\nasync function getStaticProps() {\n  // Fetch data from an API\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://root:root@cluster0.03em7.mongodb.net/meetups');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const meetups = await meetupsCollection.find().toArray();\n  client.close();\n  return {\n    props: {\n      meetups: meetups.map(meetup => {\n        return {\n          key: meetup._id.toString(),\n          id: meetup._id.toString(),\n          title: meetup.title,\n          address: meetup.address,\n          image: meetup.image\n        };\n      })\n    },\n    revalidate: 1\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwicHJvcHMiLCJtZWV0dXBzIiwiZ2V0U3RhdGljUHJvcHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiY2xvc2UiLCJtYXAiLCJtZWV0dXAiLCJrZXkiLCJfaWQiLCJ0b1N0cmluZyIsImlkIiwidGl0bGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDM0Isc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFDQyxZQUFJLEVBQUMsYUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBUUMscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRDtBQUFBLGtCQUREO0FBWUEsQ0FiRCxDLENBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDdEM7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNwQiw0REFEb0IsQ0FBckI7QUFJQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQSxRQUFNUCxPQUFPLEdBQUcsTUFBTU0saUJBQWlCLENBQUNFLElBQWxCLEdBQXlCQyxPQUF6QixFQUF0QjtBQUVBUCxRQUFNLENBQUNRLEtBQVA7QUFFQSxTQUFPO0FBQ05YLFNBQUssRUFBRTtBQUNOQyxhQUFPLEVBQUVBLE9BQU8sQ0FBQ1csR0FBUixDQUFhQyxNQUFELElBQVk7QUFDaEMsZUFBTztBQUNOQyxhQUFHLEVBQUVELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXQyxRQUFYLEVBREM7QUFFTkMsWUFBRSxFQUFFSixNQUFNLENBQUNFLEdBQVAsQ0FBV0MsUUFBWCxFQUZFO0FBR05FLGVBQUssRUFBRUwsTUFBTSxDQUFDSyxLQUhSO0FBSU5DLGlCQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FKVjtBQUtOQyxlQUFLLEVBQUVQLE1BQU0sQ0FBQ087QUFMUixTQUFQO0FBT0EsT0FSUTtBQURILEtBREQ7QUFZTkMsY0FBVSxFQUFFO0FBWk4sR0FBUDtBQWNBO0FBRWN0Qix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbmNvbnN0IEhvbWVwYWdlID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT0nZGVzY3JpcHRpb24nXG5cdFx0XHRcdFx0Y29udGVudD0nQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgbWVldHVwcyEhJ1xuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gXHRjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vIFx0Y29uc3QgcmVzID0gY29udGV4dC5yZXM7XG5cbi8vIFx0Ly8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdHByb3BzOiB7XG4vLyBcdFx0XHRtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gXHRcdH0sXG4vLyBcdH07XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblx0Ly8gRmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdCdtb25nb2RiK3NydjovL3Jvb3Q6cm9vdEBjbHVzdGVyMC4wM2VtNy5tb25nb2RiLm5ldC9tZWV0dXBzJ1xuXHQpO1xuXG5cdGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cblx0Y29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cblx0Y29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cblx0Y2xpZW50LmNsb3NlKCk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0bWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGtleTogbWVldHVwLl9pZC50b1N0cmluZygpLFxuXHRcdFx0XHRcdGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0dGl0bGU6IG1lZXR1cC50aXRsZSxcblx0XHRcdFx0XHRhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcblx0XHRcdFx0XHRpbWFnZTogbWVldHVwLmltYWdlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fSksXG5cdFx0fSxcblx0XHRyZXZhbGlkYXRlOiAxLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });