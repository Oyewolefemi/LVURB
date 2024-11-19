"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// contexts/CartContext.js\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCart((prevCart)=>{\n            const existingProduct = prevCart.find((item)=>item.id === product.id);\n            if (existingProduct) {\n                return prevCart.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            } else {\n                return [\n                    ...prevCart,\n                    {\n                        ...product,\n                        quantity: 1\n                    }\n                ];\n            }\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== productId));\n    };\n    const updateQuantity = (productId, quantity)=>{\n        setCart((prevCart)=>prevCart.map((item)=>item.id === productId ? {\n                    ...item,\n                    quantity\n                } : item));\n    };\n    const clearCart = ()=>{\n        setCart([]); // Clears the cart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Desktop/leviathan urban/LVURB/contexts/CartContext.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEI7O0FBQzZCO0FBRWhELE1BQU1HLDRCQUFjRixvREFBYUEsR0FBRztBQUVwQyxNQUFNRyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU1NLFlBQVksQ0FBQ0M7UUFDZkYsUUFBUSxDQUFDRztZQUNMLE1BQU1DLGtCQUFrQkQsU0FBU0UsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUU7WUFDcEUsSUFBSUgsaUJBQWlCO2dCQUNqQixPQUFPRCxTQUFTSyxHQUFHLENBQUNGLENBQUFBLE9BQ2hCQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUUsR0FBRzt3QkFBRSxHQUFHRCxJQUFJO3dCQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7b0JBQUUsSUFBSUg7WUFFNUUsT0FBTztnQkFDSCxPQUFPO3VCQUFJSDtvQkFBVTt3QkFBRSxHQUFHRCxPQUFPO3dCQUFFTyxVQUFVO29CQUFFO2lCQUFFO1lBQ3JEO1FBQ0o7SUFDSjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDQztRQUNwQlgsUUFBUUcsQ0FBQUEsV0FBWUEsU0FBU1MsTUFBTSxDQUFDTixDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtJO0lBQzVEO0lBRUEsTUFBTUUsaUJBQWlCLENBQUNGLFdBQVdGO1FBQy9CVCxRQUFRRyxDQUFBQSxXQUNKQSxTQUFTSyxHQUFHLENBQUNGLENBQUFBLE9BQ1RBLEtBQUtDLEVBQUUsS0FBS0ksWUFBWTtvQkFBRSxHQUFHTCxJQUFJO29CQUFFRztnQkFBUyxJQUFJSDtJQUc1RDtJQUVBLE1BQU1RLFlBQVk7UUFDZGQsUUFBUSxFQUFFLEdBQUcsa0JBQWtCO0lBQ25DO0lBRUEscUJBQ0ksOERBQUNKLFlBQVltQixRQUFRO1FBQUNDLE9BQU87WUFBRWpCO1lBQU1FO1lBQVdTO1lBQWdCRztZQUFnQkM7UUFBVTtrQkFDckZoQjs7Ozs7O0FBR2IsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2svRGVza3RvcC9sZXZpYXRoYW4gdXJiYW4vTFZVUkIvY29udGV4dHMvQ2FydENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGV4dHMvQ2FydENvbnRleHQuanNcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgICAgIHNldENhcnQoKHByZXZDYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBwcmV2Q2FydC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZDYXJ0Lm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucHJldkNhcnQsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0SWQpID0+IHtcbiAgICAgICAgc2V0Q2FydChwcmV2Q2FydCA9PiBwcmV2Q2FydC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwcm9kdWN0SWQpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSAocHJvZHVjdElkLCBxdWFudGl0eSkgPT4ge1xuICAgICAgICBzZXRDYXJ0KHByZXZDYXJ0ID0+XG4gICAgICAgICAgICBwcmV2Q2FydC5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3RJZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHkgfSA6IGl0ZW1cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXRDYXJ0KFtdKTsgLy8gQ2xlYXJzIHRoZSBjYXJ0XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCB1cGRhdGVRdWFudGl0eSwgY2xlYXJDYXJ0IH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXZDYXJ0IiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJpZCIsIm1hcCIsInF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJmaWx0ZXIiLCJ1cGRhdGVRdWFudGl0eSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n// pages/_app.js\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/macbook/Desktop/leviathan urban/LVURB/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Desktop/leviathan urban/LVURB/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQ3VDO0FBRXhDLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0ksOERBQUNILCtEQUFZQTtrQkFDVCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2svRGVza3RvcC9sZXZpYXRoYW4gdXJiYW4vTFZVUkIvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();