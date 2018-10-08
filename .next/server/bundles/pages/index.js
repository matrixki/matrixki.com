module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/header.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.state = {
      menuOpen: false
    };
    _this.mobileMenuTrigger = _this.mobileMenuTrigger.bind(_assertThisInitialized(_this));
    _this.handleHeaderBackground = _this.handleHeaderBackground.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleHeaderBackground);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleHeaderBackground);
    }
  }, {
    key: "handleHeaderBackground",
    value: function handleHeaderBackground(event) {
      var scrollTop = window.scrollY;

      if (window.location.pathname !== '/') {
        return;
      }

      if (scrollTop > 60) {
        document.body.classList.remove('header-transparent');
        this.setState({
          headerTransparent: false
        });
      } else {
        document.body.classList.add('header-transparent');
        this.setState({
          headerTransparent: true
        });
      }
    }
  }, {
    key: "mobileMenuTrigger",
    value: function mobileMenuTrigger(event) {
      event.preventDefault();

      if (!this.state.menuOpen) {
        document.body.classList.add('menu-open');
        this.setState({
          menuOpen: true
        });
      } else {
        document.body.classList.remove('menu-open');
        this.setState({
          menuOpen: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("header", {
        id: "header"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "col header-left"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", {
        className: "logo-text",
        onClick: function onClick() {
          _this2.props.router.push('/');
        }
      }, external__react__default.a.createElement("span", null, "M")))), external__react__default.a.createElement("div", {
        className: "col header-right"
      }, external__react__default.a.createElement("a", {
        href: "#",
        className: "btn mobile-menu-trigger d-md-none",
        onClick: this.mobileMenuTrigger
      }, external__react__default.a.createElement("span", {
        className: "bar"
      }), external__react__default.a.createElement("span", {
        className: "bar"
      })), external__react__default.a.createElement("ul", {
        className: "header-menu d-none d-sm-none d-md-block"
      }, external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          _this2.props.router.push('/');
        }
      }, "Home"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "/blog"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          _this2.props.router.push('/blog');
        }
      }, "Blog"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "https://igtext.matrixki.com"
      }, external__react__default.a.createElement("a", {
        target: "_blank"
      }, "Igtext"))))))));
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var header = (Object(router_["withRouter"])(header_Header));
// CONCATENATED MODULE: ./components/footer.js


function footer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { footer__typeof = function _typeof(obj) { return typeof obj; }; } else { footer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return footer__typeof(obj); }

function footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function footer__createClass(Constructor, protoProps, staticProps) { if (protoProps) footer__defineProperties(Constructor.prototype, protoProps); if (staticProps) footer__defineProperties(Constructor, staticProps); return Constructor; }

function footer__possibleConstructorReturn(self, call) { if (call && (footer__typeof(call) === "object" || typeof call === "function")) { return call; } return footer__assertThisInitialized(self); }

function footer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  footer__inherits(Footer, _React$Component);

  function Footer(props) {
    footer__classCallCheck(this, Footer);

    return footer__possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  footer__createClass(Footer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("footer", {
        id: "footer"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("p", null, "\xA9 ", this.props.year, " Mike build with React js and next js. All rights reserved."), external__react__default.a.createElement("p", null, "Made with Love and Coffee. Keep caffeinated and carry on.")));
    }
  }]);

  return Footer;
}(external__react__default.a.Component);

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./components/mobile-menu.js


function mobile_menu__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { mobile_menu__typeof = function _typeof(obj) { return typeof obj; }; } else { mobile_menu__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return mobile_menu__typeof(obj); }

function mobile_menu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mobile_menu__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function mobile_menu__createClass(Constructor, protoProps, staticProps) { if (protoProps) mobile_menu__defineProperties(Constructor.prototype, protoProps); if (staticProps) mobile_menu__defineProperties(Constructor, staticProps); return Constructor; }

function mobile_menu__possibleConstructorReturn(self, call) { if (call && (mobile_menu__typeof(call) === "object" || typeof call === "function")) { return call; } return mobile_menu__assertThisInitialized(self); }

function mobile_menu__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function mobile_menu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var mobile_menu_MobileMenu =
/*#__PURE__*/
function (_React$Component) {
  mobile_menu__inherits(MobileMenu, _React$Component);

  function MobileMenu(props) {
    mobile_menu__classCallCheck(this, MobileMenu);

    return mobile_menu__possibleConstructorReturn(this, (MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call(this, props));
  }

  mobile_menu__createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      return external__react__default.a.createElement("div", {
        className: "mobile-menu-wrapper"
      }, external__react__default.a.createElement("ul", {
        className: "mobile-menu"
      }, external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          _this.props.router.push('/');
        }
      }, "Home"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "/blog"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          _this.props.router.push('/blog');
        }
      }, "Blog"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        href: "https://igtext.matrixki.com"
      }, external__react__default.a.createElement("a", {
        target: "_blank"
      }, "Igtext")))));
    }
  }]);

  return MobileMenu;
}(external__react__default.a.Component);

/* harmony default export */ var mobile_menu = (mobile_menu_MobileMenu);
// EXTERNAL MODULE: ./css/style.scss
var style = __webpack_require__(6);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/layout.js


function layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { layout__typeof = function _typeof(obj) { return typeof obj; }; } else { layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return layout__typeof(obj); }

function layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layout__createClass(Constructor, protoProps, staticProps) { if (protoProps) layout__defineProperties(Constructor.prototype, protoProps); if (staticProps) layout__defineProperties(Constructor, staticProps); return Constructor; }

function layout__possibleConstructorReturn(self, call) { if (call && (layout__typeof(call) === "object" || typeof call === "function")) { return call; } return layout__assertThisInitialized(self); }

function layout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  layout__inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    layout__classCallCheck(this, Layout);

    _this = layout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.title = 'Mike\'s personal Blog';
    var today = new Date();
    _this.year = today.getFullYear();
    return _this;
  }

  layout__createClass(Layout, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, this.title), external__react__default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/img/favicon_mike.png"
      }), external__react__default.a.createElement("meta", {
        charSet: "utf-8"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      })), external__react__default.a.createElement(header, null), external__react__default.a.createElement(mobile_menu, null), this.props.children, external__react__default.a.createElement(footer, {
        year: this.year
      }));
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PostImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostImage, _React$Component);

  function PostImage(props) {
    var _this;

    _classCallCheck(this, PostImage);

    _this = _possibleConstructorReturn(this, (PostImage.__proto__ || Object.getPrototypeOf(PostImage)).call(this, props));
    _this.state = {
      media: {},
      hasImage: false
    };
    return _this;
  }

  _createClass(PostImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.media) {
        var url = 'https://blog.matrixki.com/wp-json/wp/v2/media/' + this.props.media;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (res) {
          return res.data;
        }).then(function (media) {
          _this2.setState(function (state, props) {
            return {
              media: media,
              hasImage: true
            };
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "feature-image"
      }, this.state.hasImage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.state.media.source_url,
        alt: this.state.media.alt_text
      }), !this.state.hasImage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/img/post-placeholder.png",
        alt: "blog post on matrixki.com"
      }));
    }
  }]);

  return PostImage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["a"] = (PostImage);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(4);

// EXTERNAL MODULE: external "typed.js"
var external__typed_js_ = __webpack_require__(12);
var external__typed_js__default = /*#__PURE__*/__webpack_require__.n(external__typed_js_);

// CONCATENATED MODULE: ./components/work-block.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var work_block_WorkBlock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorkBlock, _React$Component);

  function WorkBlock(props) {
    _classCallCheck(this, WorkBlock);

    return _possibleConstructorReturn(this, (WorkBlock.__proto__ || Object.getPrototypeOf(WorkBlock)).call(this, props));
  }

  _createClass(WorkBlock, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "work-block"
      }, external__react__default.a.createElement("h5", null, this.props.name, this.props.link && this.props.unit ? ' @' : '', this.props.link && this.props.unit && external__react__default.a.createElement("a", {
        href: this.props.link,
        target: "_blank"
      }, "\xA0", this.props.unit)), this.props.title && external__react__default.a.createElement("label", {
        className: "title"
      }, this.props.title), external__react__default.a.createElement("label", {
        className: "year"
      }, this.props.year), this.props.city && external__react__default.a.createElement("label", {
        className: "city"
      }, this.props.city));
    }
  }]);

  return WorkBlock;
}(external__react__default.a.Component);

;
/* harmony default export */ var work_block = (work_block_WorkBlock);
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(3);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./components/post-image.js
var post_image = __webpack_require__(7);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/* smooth scroll function */

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages__classCallCheck(this, Index);

    _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.typedEl = external__react__default.a.createRef();
    _this.state = {
      posts: [],
      headerTransparent: false
    }; // this._isMounted = false;

    return _this;
  }

  pages__createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // this._isMounted = true;
      if (window.location.pathname === '/') {
        document.body.classList.add('header-transparent');
      } else {
        document.body.classList.remove('header-transparent');
      }

      var options = {
        strings: ['Hi! I am Mike.', 'I am a Software developer.', 'Welcome to my personal blog.'],
        typeSpeed: 50,
        backSpeed: 50
      };
      this.typed = new external__typed_js__default.a(this.typedEl.current, options);
      external__axios__default.a.get('https://blog.matrixki.com/wp-json/wp/v2/posts?per_page=3').then(function (res) {
        return res.data;
      }).then(function (posts) {
        console.log(posts);

        _this2.setState(function (state, props) {
          return {
            posts: posts
          };
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.typed.destroy(); // this._isMounted = false;
    }
  }, {
    key: "triggerScroll",
    value: function triggerScroll() {
      scrollIt(document.getElementById('btn-go-next'), 800, 'easeOutQuad', function () {
        return console.log("Just finished scrolling to ".concat(window.pageYOffset, "px"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external__react__default.a.createElement(layout["a" /* default */], null, external__react__default.a.createElement("div", {
        className: "page-index"
      }, external__react__default.a.createElement("section", {
        className: "index-top"
      }, external__react__default.a.createElement("h1", {
        className: "typed-slogan"
      }, external__react__default.a.createElement("span", {
        ref: this.typedEl
      })), external__react__default.a.createElement("a", {
        href: "#next",
        onClick: this.triggerScroll,
        className: "btn-go-next",
        id: "btn-go-next"
      }, external__react__default.a.createElement("img", {
        className: "icon",
        src: "/static/img/arrow-down.png",
        alt: "icon arrow down"
      }))), external__react__default.a.createElement("section", {
        className: "index-content"
      }, external__react__default.a.createElement("div", {
        id: "next"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-md-3"
      }, external__react__default.a.createElement("img", {
        className: "profile-pic",
        src: "/static/img/mike_avatar.jpg",
        alt: "Mike personal profile picture"
      })), external__react__default.a.createElement("div", {
        className: "col-md-9"
      }, external__react__default.a.createElement("div", {
        className: "index-intro"
      }, external__react__default.a.createElement("h2", null, "I'm Mike Ko, ", external__react__default.a.createElement("br", null), "experienced Software engineer focus on web development."), external__react__default.a.createElement("p", null, "I have rich experience on web development, building and customization.", external__react__default.a.createElement("br", null), "Below are the languages and tools I am familiar with: ", external__react__default.a.createElement("br", null), "HTML, CSS, Javascript(React, Vue, Augular), PHP, Ruby on Rails, Wordpress.", external__react__default.a.createElement("br", null), "Feel free to drop me a message with an email."), external__react__default.a.createElement("p", {
        className: "resume"
      }, external__react__default.a.createElement("a", {
        className: "social-icon linkedin",
        href: "https://www.linkedin.com/in/mingkaiko/",
        target: "_blank"
      }, external__react__default.a.createElement("i", {
        className: "fab fa-linkedin-in"
      })), external__react__default.a.createElement("a", {
        className: "social-icon medium",
        href: "https://www.linkedin.com/in/mingkaiko/",
        target: "_blank"
      }, external__react__default.a.createElement("i", {
        className: "fab fa-medium-m"
      }))))))))), external__react__default.a.createElement("section", {
        className: "index-content"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement("h2", {
        className: "section-title"
      }, "About me")), external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement("h3", {
        className: "section-subtitle"
      }, "Work Experience"), external__react__default.a.createElement(work_block, {
        name: "Full Stack Developer",
        link: "https://ddstudio.tw",
        unit: "DD Studio",
        year: "2017-2018",
        city: "Taipei, Taiwan"
      }), external__react__default.a.createElement(work_block, {
        name: "Full Stack Developer",
        link: "https://tixinn.com",
        unit: "TIXINN.com",
        year: "2015-2017",
        city: "Taipei, Taiwan"
      }), external__react__default.a.createElement(work_block, {
        name: "Front End Developer",
        link: "http://digbil.com",
        unit: "Digbil",
        year: "2014-2015",
        city: "Taipei, Taiwan"
      }), external__react__default.a.createElement(work_block, {
        name: "Senior Front End Developer",
        link: "http://afusion.com",
        unit: "Asia Fusion Technology",
        year: "2013-2014",
        city: "Taipei, Taiwan"
      }), external__react__default.a.createElement(work_block, {
        name: "Software Engineer",
        link: "http://www.itstrategists.com",
        unit: "IT Strategists",
        year: "2012-2013",
        city: "Los Angeles, U.S."
      })), external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement("h3", {
        className: "section-subtitle"
      }, "Education"), external__react__default.a.createElement(work_block, {
        name: "University of Michigan, Ann Arbor",
        title: "Master degree, Electrical Engineering: Systems (minor: Computer Science)",
        year: "2010-2012"
      }), external__react__default.a.createElement(work_block, {
        name: "National Taiwan University",
        title: "Bachelor degree, Engineering Scrience",
        year: "2004-2008"
      }))))), external__react__default.a.createElement("section", {
        className: "index-content"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement("h2", {
        className: "section-title"
      }, "Blog")), this.state.posts.length > 0 && this.state.posts.map(function (post) {
        return external__react__default.a.createElement("div", {
          className: "col-md-4 col-sm-6",
          key: post.id
        }, external__react__default.a.createElement("div", {
          className: "post-block"
        }, external__react__default.a.createElement(link__default.a, {
          href: "/post?postId=".concat(post.id)
        }, external__react__default.a.createElement("a", {
          onClick: function onClick() {
            _this3.props.router.push("/post?postId=".concat(post.id));
          }
        }, external__react__default.a.createElement(post_image["a" /* default */], {
          media: post.featured_media ? post.featured_media : false
        }), external__react__default.a.createElement("h2", {
          className: "post-title"
        }, post.title.rendered), external__react__default.a.createElement("p", {
          className: "excerpt",
          dangerouslySetInnerHTML: {
            __html: post.excerpt.rendered
          }
        })))));
      }))))));
    }
  }]);

  return Index;
}(external__react__default.a.Component);

;
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(router_["withRouter"])(pages_Index));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ })
/******/ ]);