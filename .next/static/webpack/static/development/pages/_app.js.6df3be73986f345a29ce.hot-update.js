webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_reducer */ "./store/reducers/user_reducer.js");
/* harmony import */ var _msg_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg_reducer */ "./store/reducers/msg_reducer.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  msg: _msg_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/reducers/msg_reducer.js":
/*!***************************************!*\
  !*** ./store/reducers/msg_reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./store/types.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sentEmail: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_MESSAGE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sentEmail: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: SEND_MESSAGE, CLEAR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE", function() { return SEND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MESSAGE", function() { return CLEAR_MESSAGE; });
var SEND_MESSAGE = 'send_message';
var CLEAR_MESSAGE = 'clear_message';

/***/ })

})
//# sourceMappingURL=_app.js.6df3be73986f345a29ce.hot-update.js.map