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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_post_image__ = __webpack_require__(7);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog(props) {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props));
    _this.state = {
      posts: []
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://blog.matrixki.com/wp-json/wp/v2/posts?per_page=9').then(function (res) {
        return res.data;
      }).then(function (posts) {
        console.log(posts);

        _this2.setState(function (state, props) {
          return {
            posts: posts
          };
        });

        document.body.classList.remove('header-transparent');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "blog-page"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        "aria-label": "breadcrumb"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        className: "breadcrumb"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          _this3.props.router.push('/');
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item active",
        "aria-current": "page"
      }, "Blog")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "section-title"
      }, "Mike's Blog")), this.state.posts.length > 0 && this.state.posts.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-md-4 col-sm-6",
          key: post.id
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "post-block"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
          href: "/post?postId=".concat(post.id)
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          onClick: function onClick() {
            _this3.props.router.push("/post?postId=".concat(post.id));
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_post_image__["a" /* default */], {
          media: post.featured_media ? post.featured_media : false
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          className: "post-title"
        }, post.title.rendered), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "excerpt",
          dangerouslySetInnerHTML: {
            __html: post.excerpt.rendered
          }
        })))));
      })))));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })
/******/ ]);