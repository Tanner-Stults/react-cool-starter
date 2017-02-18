module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  /* istanbul ignore next */
  module.exports = require('./default');
} else {
  /* istanbul ignore next */
  module.exports = __webpack_require__(35);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USERS_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USERS_FAILURE; });
/* unused harmony export fetchData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchDataIfNeeded; });
var USERS_INVALID = 'USERS_INVALID';
var USERS_REQUESTING = 'USERS_REQUESTING';
var USERS_SUCCESS = 'USERS_SUCCESS';
var USERS_FAILURE = 'USERS_FAILURE';

var API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
var fetchData = function fetchData(axios) {
  return function (dispatch) {
    dispatch({ type: USERS_REQUESTING });

    return axios.get(API_URL).then(function (res) {
      dispatch({ type: USERS_SUCCESS, data: res.data });
    }).catch(function (err) {
      dispatch({ type: USERS_FAILURE, err: err });
    });
  };
};

// Preventing dobule fetching data
/* istanbul ignore next */
var shouldFetchData = function shouldFetchData(state) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (false) return true;

  var home = state.home;

  if (home.readyState === USERS_SUCCESS) return false; // Preventing double fetching data

  return true;
};

/* istanbul ignore next */
var fetchDataIfNeeded = function fetchDataIfNeeded() {
  return function (dispatch, getState, axios) {
    /* istanbul ignore next */
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData(axios));
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AN_USER_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AN_USER_FAILURE; });
/* unused harmony export fetchData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchDataIfNeeded; });
var AN_USER_REQUESTING = 'AN_USER_REQUESTING';
var AN_USER_SUCCESS = 'AN_USER_SUCCESS';
var AN_USER_FAILURE = 'AN_USER_FAILURE';

var API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
var fetchData = function fetchData(userId, axios) {
  return function (dispatch) {
    dispatch({ type: AN_USER_REQUESTING, userId: userId });

    return axios.get(API_URL + '/' + userId).then(function (res) {
      dispatch({ type: AN_USER_SUCCESS, userId: userId, data: res.data });
    }).catch(function (err) {
      dispatch({ type: AN_USER_FAILURE, userId: userId, err: err });
    });
  };
};

// Using for preventing dobule fetching data
/* istanbul ignore next */
var shouldFetchData = function shouldFetchData(state, userId) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (false) return true;

  var userInfo = state.userInfo[userId];

  // Preventing dobule fetching data in production
  if (userInfo && userInfo.readyState === AN_USER_SUCCESS) return false;

  return true;
};

/* istanbul ignore next */
var fetchDataIfNeeded = function fetchDataIfNeeded(userId) {
  return function (dispatch, getState, axios) {
    /* istanbul ignore next */
    if (shouldFetchData(getState(), userId)) {
      /* istanbul ignore next */
      return dispatch(fetchData(userId, axios));
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony export (immutable) */ __webpack_exports__["b"] = createReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectReducer; });




function createReducer(asyncReducers) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"],
    // Register the inital async reducers, otherwise you will get the warning of Redux
    home: function home() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return state;
    },
    userInfo: function userInfo() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return state;
    }
  }, asyncReducers));
}

/* eslint-disable */
// Using for injecting the async reducers
var injectReducer = function injectReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};
/* eslint-enable */

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(12);







/* harmony default export */ __webpack_exports__["a"] = function (initialState) {
  var middlewares = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a.withExtraArgument(__WEBPACK_IMPORTED_MODULE_3_axios___default.a)];

  var enhancers = [__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"].apply(undefined, middlewares),  false ? window.devToolsExtension() : function (f) {
    return f;
  }];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* default */])(), initialState, __WEBPACK_IMPORTED_MODULE_1_redux__["compose"].apply(undefined, enhancers));

  store.asyncReducers = {}; // Async reducer registry

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      try {
        var reducers = require('./reducers').default;

        store.replaceReducer(reducers(store.asyncReducers));
      } catch (error) {
        console.error(chalk.red('==> \uD83D\uDE2D  Reducer hot reloading error ' + error));
      }
    });
  }

  return store;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_reducers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_App__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = createRoutes;






var errorLoading = function errorLoading(err) {
  console.error(__WEBPACK_IMPORTED_MODULE_2_chalk___default.a.red('==> \uD83D\uDE2D  Dynamic page loading failed ' + err));
};

var loadModule = function loadModule(cb) {
  return function (Component) {
    cb(null, Component.default);
  };
};

function createRoutes(store) {
  return {
    component: __WEBPACK_IMPORTED_MODULE_4__containers_App__["a" /* default */],
    childRoutes: [{
      path: '/',
      getComponent: function getComponent(nextState, cb) {
        var importModules = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([Promise.resolve().then(__webpack_require__.bind(null, 37)), Promise.resolve().then(__webpack_require__.bind(null, 38))]);

        var renderRoute = loadModule(cb);

        importModules.then(function (_ref) {
          var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
              Component = _ref2[0],
              reducer = _ref2[1];

          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__redux_reducers__["a" /* injectReducer */])(store, 'home', reducer.default);

          renderRoute(Component);
        }).catch(errorLoading);
      }
    }, {
      path: '/UserInfo/:id',
      getComponent: function getComponent(nextState, cb) {
        var importModules = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([Promise.resolve().then(__webpack_require__.bind(null, 40)), Promise.resolve().then(__webpack_require__.bind(null, 41))]);

        var renderRoute = loadModule(cb);

        importModules.then(function (_ref3) {
          var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
              Component = _ref4[0],
              reducer = _ref4[1];

          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__redux_reducers__["a" /* injectReducer */])(store, 'userInfo', reducer.default);

          renderRoute(Component);
        }).catch(errorLoading);
      }
    }, {
      path: '*',
      getComponent: function getComponent(location, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 39)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




/* harmony default export */ __webpack_exports__["a"] = function (store, content) {
  var head = __WEBPACK_IMPORTED_MODULE_0_react_helmet___default.a.rewind();
  var assets = webpackIsomorphicTools.assets();

  // Setup html page
  return '\n    <!DOCTYPE html>\n    <html ' + head.htmlAttributes.toString() + '>\n      <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta http-equiv="Content-Language" content="en" />\n        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />\n\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n\n        ' +
  /* Styles will be presented in production with webpack extract text plugin */
  __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.keys(assets.styles).map(function (style) {
    return '<link href="' + assets.styles[style] + '" media="screen, projection" rel="stylesheet" type="text/css" />';
  }).join('\n') + '\n\n        ' + (
  /* Styles will be presented in development mode
     I put all of the styles here to smoothen the flick */
  __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.keys(assets.styles).length === 0 ? '<style>' + (__webpack_require__(19)._style + __webpack_require__(15)._style + __webpack_require__(16)._style + __webpack_require__(18)._style + __webpack_require__(17)._style + __webpack_require__(14)._style + __webpack_require__(13)._style) + '</style>' : '') + '\n      </head>\n      <body>\n        <div id="react-view">' + (content || '') + '</div>\n\n        <script type="text/javascript">\n          ' + (store && 'window.__INITIAL_STATE__=' + __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(store.getState())) + '\n        </script>\n\n        <!--[if gte IE 9 ]>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>\n        <![endif]-->\n\n        ' +
  /* Reverse the order of scripts for accessing vendor.js first */
  __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.keys(assets.javascript).reverse().map(function (script) {
    return '<script src="' + assets.javascript[script] + '"></script>';
  }).join('\n') + '\n        ' + head.script.toString() + '\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_child_process__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_opn__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_opn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_opn__);
// Modified from FB's create-react-app





/* harmony default export */ __webpack_exports__["default"] = function (port) {
  if (process.platform === 'darwin') {
    try {
      // Try our best to reuse existing tab
      // on OS X Google Chrome with AppleScript
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_child_process__["execSync"])('ps cax | grep "Google Chrome"');
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_child_process__["execSync"])('osascript ' + __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './openChrome.applescript') + ' http://localhost:' + port + '/');
      return true;
    } catch (err) {
      // Ignore errors.
    }
  }
  // Fallback to opn
  try {
    __WEBPACK_IMPORTED_MODULE_2_opn___default()('http://localhost:' + port + '/');
    return true;
  } catch (err) {
    return false;
  }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "tools/openBrowser"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);




var UserCard = function UserCard(_ref) {
  var info = _ref.info;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.UserCard },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'User Card'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Name: ',
        info.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Phone: ',
        info.phone
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Email: ',
        info.email
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Website: ',
        info.website
      )
    )
  );
};

UserCard.propTypes = {
  info: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
    phone: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
    email: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
    website: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
  }).isRequired
};

UserCard.defaulProps = {
  info: {
    name: '',
    phone: '',
    email: '',
    website: ''
  }
};

/* harmony default export */ __webpack_exports__["a"] = UserCard;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);





var UserList = function UserList(_ref) {
  var list = _ref.list;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.UserList },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'User List'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      list.map(function (user) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: user.id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
            { to: '/UserInfo/' + user.id },
            user.name
          )
        );
      })
    )
  );
};

UserList.propTypes = {
  list: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
  })).isRequired
};

UserList.defaultProps = {
  list: {
    id: '',
    name: ''
  }
};

/* harmony default export */ __webpack_exports__["a"] = UserList;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  host: 'localhost',
  port: 3000,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [{ name: 'description', content: 'The best react universal starter boilerplate in the world.' }]
  }
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


var defaultConfig = __webpack_require__(34);

var config = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, defaultConfig, {
  // Over write default settings here...
});

/* harmony default export */ __webpack_exports__["default"] = config;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_normalize_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__theme_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_scss__);







var App = function App(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.App },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, __WEBPACK_IMPORTED_MODULE_2__config___default.a.app),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.header },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(42), alt: 'Logo', role: 'presentation' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        __WEBPACK_IMPORTED_MODULE_2__config___default.a.app.title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    children
  );
};

App.propTypes = { children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node };
App.defaultProps = { children: null };

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__action__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UserList__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_scss__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_scss__);














var Home = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Home.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call.apply(_ref, [this].concat(args))), _this), _this.displayUserList = function () {
      var home = _this.props.home;


      if (!home.readyState || home.readyState === __WEBPACK_IMPORTED_MODULE_9__action__["a" /* USERS_INVALID */] || home.readyState === __WEBPACK_IMPORTED_MODULE_9__action__["b" /* USERS_REQUESTING */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Loading...'
        );
      }

      if (home.readyState === __WEBPACK_IMPORTED_MODULE_9__action__["c" /* USERS_FAILURE */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Oops, Failed to load list!'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_UserList__["a" /* default */], { list: home.list });
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      // Fetching data for client side rendering

      Home.fetchData(dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_11__styles_scss___default.a.Home },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_helmet___default.a, { title: 'Home' }),
        this.displayUserList()
      );
    }
  }], [{
    key: 'fetchData',

    // Fetching data method for both server/client side rendering
    value: function fetchData(dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([dispatch(__WEBPACK_IMPORTED_MODULE_9__action__["e" /* fetchDataIfNeeded */]())]);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

Home.propTypes = {
  home: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].shape({
    readyState: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,
    list: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].shape({
      id: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].number,
      name: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string
    }))
  }),
  dispatch: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired
};

Home.defaultProps = {
  home: {
    readyState: 'USERS_INVALID',
    list: null
  }
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var home = _ref2.home;
  return { home: home };
};

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps)(Home);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action__ = __webpack_require__(10);


var initialState = { readyState: __WEBPACK_IMPORTED_MODULE_0__action__["a" /* USERS_INVALID */] };

/* harmony default export */ __webpack_exports__["default"] = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__action__["b" /* USERS_REQUESTING */]:
      return { readyState: __WEBPACK_IMPORTED_MODULE_0__action__["b" /* USERS_REQUESTING */] };
    case __WEBPACK_IMPORTED_MODULE_0__action__["c" /* USERS_FAILURE */]:
      return {
        readyState: __WEBPACK_IMPORTED_MODULE_0__action__["c" /* USERS_FAILURE */],
        err: action.err
      };
    case __WEBPACK_IMPORTED_MODULE_0__action__["d" /* USERS_SUCCESS */]:
      return {
        readyState: __WEBPACK_IMPORTED_MODULE_0__action__["d" /* USERS_SUCCESS */],
        list: action.data
      };
    default:
      return state;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);





/* harmony default export */ __webpack_exports__["default"] = function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.NotFound },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'Oops' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Oops, Page was not found!'
    )
  );
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__action__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UserCard__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_scss__);














var UserInfo = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(UserInfo, _PureComponent);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UserInfo.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.displayUserCard = function () {
      var _this$props = _this.props,
          userInfo = _this$props.userInfo,
          params = _this$props.params;

      var userInfoById = userInfo[params.id];

      if (!userInfoById || userInfoById.readyState === __WEBPACK_IMPORTED_MODULE_9__action__["a" /* AN_USER_REQUESTING */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Loading...'
        );
      }

      if (userInfoById.readyState === __WEBPACK_IMPORTED_MODULE_9__action__["b" /* AN_USER_FAILURE */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Oops, Failed to load info!'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_UserCard__["a" /* default */], { info: userInfoById.info });
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(UserInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          params = _props.params;

      // Fetching data for client side rendering

      UserInfo.fetchData(dispatch, params);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_11__styles_scss___default.a.UserInfo },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_helmet___default.a, { title: 'User Info' }),
        this.displayUserCard()
      );
    }
  }], [{
    key: 'fetchData',

    // Fetching data method for both server/client side rendering
    value: function fetchData(dispatch, params) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([dispatch(__WEBPACK_IMPORTED_MODULE_9__action__["d" /* fetchDataIfNeeded */](params.id))]);
    }
  }]);

  return UserInfo;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

UserInfo.propTypes = {
  dispatch: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func.isRequired,
  params: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].objectOf(__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string).isRequired,
  userInfo: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].shape({
    readyState: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,
    info: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].shape({
      name: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,
      phone: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,
      email: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string,
      website: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string
    })
  })
};

UserInfo.defaultProps = {
  userInfo: {
    readyState: '',
    info: {
      name: '',
      phone: '',
      email: '',
      website: ''
    }
  }
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var userInfo = _ref2.userInfo;
  return { userInfo: userInfo };
};

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps)(UserInfo);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action__ = __webpack_require__(11);





/* harmony default export */ __webpack_exports__["default"] = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__action__["a" /* AN_USER_REQUESTING */]:
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign({}, state, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, {
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["a" /* AN_USER_REQUESTING */]
      }));
    case __WEBPACK_IMPORTED_MODULE_2__action__["b" /* AN_USER_FAILURE */]:
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign({}, state, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, {
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["b" /* AN_USER_FAILURE */],
        err: action.err
      }));
    case __WEBPACK_IMPORTED_MODULE_2__action__["c" /* AN_USER_SUCCESS */]:
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign({}, state, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, {
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["c" /* AN_USER_SUCCESS */],
        info: action.data
      }));
    default:
      return state;
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NzAiIGhlaWdodD0iNTEwIiB2aWV3Qm94PSIwLCAwLCA1NzAsIDUxMCI+CiAgPGcgaWQ9IkJhY2tncm91bmQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU3MCIgaGVpZ2h0PSI1MTAiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMCIvPgogIDwvZz4KICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICA8cGF0aCBkPSJNMzM0LjY5NiwyNTQuNjI4IEMzMzQuNjk2LDI4Mi4zMzQgMzEyLjIzNSwzMDQuNzk1IDI4NC41MjksMzA0Ljc5NSBDMjU2LjgyMywzMDQuNzk1IDIzNC4zNjIsMjgyLjMzNCAyMzQuMzYyLDI1NC42MjggQzIzNC4zNjIsMjI2LjkyMiAyNTYuODIzLDIwNC40NjEgMjg0LjUyOSwyMDQuNDYxIEMzMTIuMjM1LDIwNC40NjEgMzM0LjY5NiwyMjYuOTIyIDMzNC42OTYsMjU0LjYyOCB6IiBmaWxsPSIjMDBEOEZGIi8+CiAgICA8cGF0aCBkPSJNMjg0LjUyOSwxNTIuNjI4IEMzNTEuODg1LDE1Mi42MjggNDE0LjQ1NywxNjIuMjkzIDQ2MS42MzYsMTc4LjUzNSBDNTE4LjQ4LDE5OC4xMDQgNTUzLjQzLDIyNy43NjggNTUzLjQzLDI1NC42MjggQzU1My40MywyODIuNjE5IDUxNi4zODksMzE0LjEzMSA0NTUuMzQ3LDMzNC4zNTYgQzQwOS4xOTYsMzQ5LjY0NyAzNDguNDY4LDM1Ny42MjggMjg0LjUyOSwzNTcuNjI4IEMyMTguOTc1LDM1Ny42MjggMTU2Ljg5OSwzNTAuMTM2IDExMC4yMzksMzM0LjE4NyBDNTEuMTkzLDMxNC4wMDUgMTUuNjI4LDI4Mi4wODQgMTUuNjI4LDI1NC42MjggQzE1LjYyOCwyMjcuOTg2IDQ4Ljk5OCwxOTguNTUyIDEwNS4wNDMsMTc5LjAxMiBDMTUyLjM5OCwxNjIuNTAzIDIxNi41MTUsMTUyLjYyOCAyODQuNTI5LDE1Mi42MjggeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTE5NS43MzYsMjAzLjkyMiBDMjI5LjM4NSwxNDUuNTc0IDI2OS4wMTcsOTYuMTk4IDMwNi42NTYsNjMuNDQyIEMzNTIuMDA2LDIzLjk3NiAzOTUuMTYzLDguNTE5IDQxOC40MzEsMjEuOTM3IEM0NDIuNjc5LDM1LjkyIDQ1MS40NzMsODMuNzUxIDQzOC40OTgsMTQ2LjczMyBDNDI4LjY4OCwxOTQuMzUxIDQwNS4yNjQsMjUwLjk0NSAzNzMuMzIyLDMwNi4zMzQgQzM0MC41NzMsMzYzLjEyMiAzMDMuMDcyLDQxMy4xNTMgMjY1Ljk0NSw0NDUuNjA2IEMyMTguOTY0LDQ4Ni42NzQgMTczLjU0NSw1MDEuNTM1IDE0OS43Niw0ODcuODE5IEMxMjYuNjgxLDQ3NC41MDkgMTE3Ljg1NCw0MzAuODk4IDEyOC45MjYsMzcyLjU4NiBDMTM4LjI4MSwzMjMuMzE2IDE2MS43NTgsMjYyLjg0MSAxOTUuNzM2LDIwMy45MjIgeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTE5NS44MjEsMzA2LjQ4MiBDMTYyLjA3NSwyNDguMTkgMTM5LjA5LDE4OS4xOTUgMTI5LjUwOSwxNDAuMjI3IEMxMTcuOTY1LDgxLjIyOCAxMjYuMTI3LDM2LjExOCAxNDkuMzczLDIyLjY2MSBDMTczLjU5Nyw4LjYzNyAyMTkuNDI4LDI0LjkwNSAyNjcuNTEzLDY3LjYwMSBDMzAzLjg2OSw5OS44ODEgMzQxLjIwMSwxNDguNDM4IDM3My4yMzYsMjAzLjc3NCBDNDA2LjA4LDI2MC41MDcgNDMwLjY5NywzMTcuOTgzIDQ0MC4yNzIsMzY2LjM1NiBDNDUyLjM4OSw0MjcuNTY5IDQ0Mi41ODEsNDc0LjM0IDQxOC44MTksNDg4LjA5NiBDMzk1Ljc2Miw1MDEuNDQ0IDM1My41Nyw0ODcuMzEyIDMwOC41OCw0NDguNTk3IEMyNzAuNTY3LDQxNS44ODYgMjI5Ljg5OCwzNjUuMzQ0IDE5NS44MjEsMzA2LjQ4MiB6IiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwRDhGRiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("opn");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helmet__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hpp__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serve_favicon__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_chalk__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__redux_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_renderHtmlPage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__config__);



















var app = __WEBPACK_IMPORTED_MODULE_3_express___default()();

// Using helmet to secure Express with various HTTP headers
app.use(__WEBPACK_IMPORTED_MODULE_5_helmet___default()());
// Prevent HTTP parameter pollution.
app.use(__WEBPACK_IMPORTED_MODULE_6_hpp___default()());
// Compress all requests
app.use(__WEBPACK_IMPORTED_MODULE_4_compression___default()());

// Use morgan for http request debug (only show error)
app.use(__WEBPACK_IMPORTED_MODULE_2_morgan___default()('dev', { skip: function skip(req, res) {
    return res.statusCode < 400;
  } }));
app.use(__WEBPACK_IMPORTED_MODULE_7_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(process.cwd(), './build/public/favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(process.cwd(), './build/public')));

// Run express as webpack dev server
if (false) {
  var webpack = require('webpack');
  var webpackConfig = require('../tools/webpack/webpack.client.babel');

  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: true,
    stats: 'minimal'
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Register server-side rendering middleware
app.get('*', function (req, res) {
  if (false) webpackIsomorphicTools.refresh();

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__redux_store__["a" /* default */])();

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_renderHtmlPage__["a" /* default */])(store));
    return;
  }

  var memoryHistory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_react_router__["createMemoryHistory"])(req.url);
  var routes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__routes__["a" /* default */])(store);
  var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_router_redux__["syncHistoryWithStore"])(memoryHistory, store);

  // eslint-disable-next-line max-len
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_react_router__["match"])({ history: history, routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.sendStatus(404);
    } else {
      // Dispatch the initial action of each container first
      var promises = renderProps.components.filter(function (component) {
        return component.fetchData;
      }).map(function (component) {
        return component.fetchData(store.dispatch, renderProps.params);
      });

      // Then render the routes
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises).then(function () {
        var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
          { store: store },
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_router__["RouterContext"], renderProps)
        ));

        res.status(200).send(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils_renderHtmlPage__["a" /* default */])(store, content));
      }).catch(function (err) {
        console.error('==> \uD83D\uDE2D  Rendering routes error: ' + err);
      });
    }
  });
});

if (__WEBPACK_IMPORTED_MODULE_17__config___default.a.port) {
  app.listen(__WEBPACK_IMPORTED_MODULE_17__config___default.a.port, __WEBPACK_IMPORTED_MODULE_17__config___default.a.host, function (err) {
    if (err) console.error('==> \uD83D\uDE2D  OMG!!! ' + err);

    console.info(__WEBPACK_IMPORTED_MODULE_13_chalk___default.a.green('==> \uD83C\uDF0E  Listening at http://' + __WEBPACK_IMPORTED_MODULE_17__config___default.a.host + ':' + __WEBPACK_IMPORTED_MODULE_17__config___default.a.port));
    // Open Chrome
    __webpack_require__(24).default(__WEBPACK_IMPORTED_MODULE_17__config___default.a.port);
  });
} else {
  console.error(__WEBPACK_IMPORTED_MODULE_13_chalk___default.a.red('==> 😭  OMG!!! No PORT environment variable has been specified'));
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ })
/******/ ]);