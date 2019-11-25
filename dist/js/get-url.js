/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/get-url.js":
/*!************************!*\
  !*** ./src/get-url.js ***!
  \************************/
/*! exports provided: getRequest, getParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRequest\", function() { return getRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getParams\", function() { return getParams; });\n/**\n* @method getRequest(request)\n*   @param string | request | optional\n\n* @method getParams(param)\n*   @param string | 'host', 'path', 'protocol', 'url' | optional\n*\n*\n* Example:\n*\n* console.log(getRequest())\n* console.log(getParams('url'))\n*/\nvar getItems = function getItems(str, by) {\n  return str.replace(/\\s/g, '').split(by);\n};\n\nvar _getParams = function _getParams() {\n  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var path = window.location.pathname;\n  var items = getItems(window.location.href, '/');\n  var protocol = items[0];\n  var host = items[2];\n  var url = protocol + '//' + host;\n  var params = {\n    'host': host,\n    'path': path,\n    'protocol': protocol,\n    'url': url\n  };\n  return param ? params[param] : params;\n};\n\nvar _getRequest = function _getRequest() {\n  var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var getRequestItems = window.location.search ? getItems(window.location.search.substring(1), '&') : 0;\n  var params = [];\n\n  if (typeof getRequestItems.length === 'undefined' || getRequestItems.length === '') {\n    return false;\n  }\n\n  getRequestItems.forEach(function ($item, i) {\n    var subItems = getItems($item, '=');\n    params[subItems[0]] = subItems[1];\n  });\n  return request ? params[request] : params;\n};\n\nvar getRequest = _getRequest;\nvar getParams = _getParams;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2V0LXVybC5qcz8yNmZmIl0sIm5hbWVzIjpbImdldEl0ZW1zIiwic3RyIiwiYnkiLCJyZXBsYWNlIiwic3BsaXQiLCJfZ2V0UGFyYW1zIiwicGFyYW0iLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIml0ZW1zIiwiaHJlZiIsInByb3RvY29sIiwiaG9zdCIsInVybCIsInBhcmFtcyIsIl9nZXRSZXF1ZXN0IiwicmVxdWVzdCIsImdldFJlcXVlc3RJdGVtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsImxlbmd0aCIsImZvckVhY2giLCIkaXRlbSIsImkiLCJzdWJJdGVtcyIsImdldFJlcXVlc3QiLCJnZXRQYXJhbXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDNUIsU0FBT0QsR0FBRyxDQUFDRSxPQUFKLENBQVksS0FBWixFQUFrQixFQUFsQixFQUFzQkMsS0FBdEIsQ0FBNEJGLEVBQTVCLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQW1CO0FBQUEsTUFBbEJDLEtBQWtCLHVFQUFWLEtBQVU7QUFDcEMsTUFBTUMsSUFBSSxHQUFPQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpDO0FBQ0EsTUFBTUMsS0FBSyxHQUFNWCxRQUFRLENBQUNRLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkcsSUFBakIsRUFBdUIsR0FBdkIsQ0FBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQXRCO0FBQ0EsTUFBTUcsSUFBSSxHQUFPSCxLQUFLLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQU1JLEdBQUcsR0FBUUYsUUFBUSxHQUFHLElBQVgsR0FBa0JDLElBQW5DO0FBQ0EsTUFBTUUsTUFBTSxHQUFLO0FBQ2YsWUFBUUYsSUFETztBQUVmLFlBQVFQLElBRk87QUFHZixnQkFBWU0sUUFIRztBQUlmLFdBQU9FO0FBSlEsR0FBakI7QUFPQSxTQUFRVCxLQUFELEdBQVVVLE1BQU0sQ0FBQ1YsS0FBRCxDQUFoQixHQUEwQlUsTUFBakM7QUFDRCxDQWREOztBQWdCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFxQjtBQUFBLE1BQXBCQyxPQUFvQix1RUFBVixLQUFVO0FBQ3ZDLE1BQU1DLGVBQWUsR0FBSVgsTUFBTSxDQUFDQyxRQUFQLENBQWdCVyxNQUFqQixHQUEyQnBCLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDQyxRQUFQLENBQWdCVyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBRCxFQUFzQyxHQUF0QyxDQUFuQyxHQUFnRixDQUF4RztBQUNBLE1BQU1MLE1BQU0sR0FBWSxFQUF4Qjs7QUFFQSxNQUFJLE9BQU9HLGVBQWUsQ0FBQ0csTUFBdkIsS0FBa0MsV0FBbEMsSUFBaURILGVBQWUsQ0FBQ0csTUFBaEIsS0FBMkIsRUFBaEYsRUFBb0Y7QUFDbEYsV0FBTyxLQUFQO0FBQ0Q7O0FBRURILGlCQUFlLENBQUNJLE9BQWhCLENBQXdCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ3BDLFFBQU1DLFFBQVEsR0FBYzFCLFFBQVEsQ0FBQ3dCLEtBQUQsRUFBUSxHQUFSLENBQXBDO0FBQ01SLFVBQU0sQ0FBQ1UsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFOLEdBQXNCQSxRQUFRLENBQUMsQ0FBRCxDQUE5QjtBQUNQLEdBSEQ7QUFLQSxTQUFRUixPQUFELEdBQVlGLE1BQU0sQ0FBQ0UsT0FBRCxDQUFsQixHQUE4QkYsTUFBckM7QUFDRCxDQWREOztBQWdCTyxJQUFNVyxVQUFVLEdBQUdWLFdBQW5CO0FBQ0EsSUFBTVcsU0FBUyxHQUFJdkIsVUFBbkIiLCJmaWxlIjoiLi9zcmMvZ2V0LXVybC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAbWV0aG9kIGdldFJlcXVlc3QocmVxdWVzdClcbiogICBAcGFyYW0gc3RyaW5nIHwgcmVxdWVzdCB8IG9wdGlvbmFsXG5cbiogQG1ldGhvZCBnZXRQYXJhbXMocGFyYW0pXG4qICAgQHBhcmFtIHN0cmluZyB8ICdob3N0JywgJ3BhdGgnLCAncHJvdG9jb2wnLCAndXJsJyB8IG9wdGlvbmFsXG4qXG4qXG4qIEV4YW1wbGU6XG4qXG4qIGNvbnNvbGUubG9nKGdldFJlcXVlc3QoKSlcbiogY29uc29sZS5sb2coZ2V0UGFyYW1zKCd1cmwnKSlcbiovXG5cbmNvbnN0IGdldEl0ZW1zID0gKHN0ciwgYnkpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywnJykuc3BsaXQoYnkpXG59XG5cbmNvbnN0IF9nZXRQYXJhbXMgPSAocGFyYW0gPSBmYWxzZSkgPT4ge1xuICBjb25zdCBwYXRoICAgICA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCBpdGVtcyAgICA9IGdldEl0ZW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCAnLycpXG4gIGNvbnN0IHByb3RvY29sID0gaXRlbXNbMF1cbiAgY29uc3QgaG9zdCAgICAgPSBpdGVtc1syXVxuICBjb25zdCB1cmwgICAgICA9IHByb3RvY29sICsgJy8vJyArIGhvc3RcbiAgY29uc3QgcGFyYW1zICAgPSB7XG4gICAgJ2hvc3QnOiBob3N0LFxuICAgICdwYXRoJzogcGF0aCxcbiAgICAncHJvdG9jb2wnOiBwcm90b2NvbCxcbiAgICAndXJsJzogdXJsLFxuICB9XG5cbiAgcmV0dXJuIChwYXJhbSkgPyBwYXJhbXNbcGFyYW1dIDogcGFyYW1zXG59XG5cbmNvbnN0IF9nZXRSZXF1ZXN0ID0gKHJlcXVlc3QgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBnZXRSZXF1ZXN0SXRlbXMgPSAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkgPyBnZXRJdGVtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSwgJyYnKSA6IDBcbiAgbGV0ICAgcGFyYW1zICAgICAgICAgID0gW11cblxuICBpZiAodHlwZW9mIGdldFJlcXVlc3RJdGVtcy5sZW5ndGggPT09ICd1bmRlZmluZWQnIHx8IGdldFJlcXVlc3RJdGVtcy5sZW5ndGggPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBnZXRSZXF1ZXN0SXRlbXMuZm9yRWFjaCgoJGl0ZW0sIGkpID0+IHtcbiAgICBjb25zdCBzdWJJdGVtcyAgICAgICAgICAgID0gZ2V0SXRlbXMoJGl0ZW0sICc9JylcbiAgICAgICAgICBwYXJhbXNbc3ViSXRlbXNbMF1dID0gc3ViSXRlbXNbMV1cbiAgfSlcblxuICByZXR1cm4gKHJlcXVlc3QpID8gcGFyYW1zW3JlcXVlc3RdIDogcGFyYW1zXG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXF1ZXN0ID0gX2dldFJlcXVlc3RcbmV4cG9ydCBjb25zdCBnZXRQYXJhbXMgID0gX2dldFBhcmFtc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/get-url.js\n");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/get-url.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel.olvera/Documents/sites/htdocs/samline/get-url/src/get-url.js */"./src/get-url.js");


/***/ })

/******/ });