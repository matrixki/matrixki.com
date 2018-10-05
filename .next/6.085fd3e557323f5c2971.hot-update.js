webpackHotUpdate(6,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_image__ = __webpack_require__("./components/post-image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cat_label__ = __webpack_require__("./components/cat-label.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tag_label__ = __webpack_require__("./components/tag-label.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
var _jsxFileName = "/Users/mike-macbook/Desktop/Projects/matrixki/pages/post.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Post =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));
    _this.state = {
      post: false
    };
    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // get post data
      var url = 'https://blog.matrixki.com/wp-json/wp/v2/posts/' + this.props.router.query.postId;
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url).then(function (res) {
        return res.data;
      }).then(function (post) {
        console.log(post);

        _this2.setState({
          post: post
        });

        document.body.classList.remove('header-transparent');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.state.post && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "post-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        className: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          _this3.props.router.push('/');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          _this3.props.router.push('/blog');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Blog"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "breadcrumb-item active",
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col col-md-10 offset-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        className: "post-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.state.post.categories.length > 0 && this.state.post.categories.map(function (cat) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_cat_label__["a" /* default */], {
          catId: cat,
          key: cat,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "post-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.state.post.title.rendered), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "post-excerpt",
        dangerouslySetInnerHTML: {
          __html: this.state.post.excerpt.rendered
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_post_image__["a" /* default */], {
        media: this.state.post.featured_media ? this.state.post.featured_media : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "post-content",
        dangerouslySetInnerHTML: {
          __html: this.state.post.content.rendered
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), this.state.post.tags.length > 0 && this.state.post.tags.map(function (tag) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_tag_label__["a" /* default */], {
          tagId: tag,
          key: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        });
      })))))));
    }
  }]);

  return Post;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Post));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.085fd3e557323f5c2971.hot-update.js.map