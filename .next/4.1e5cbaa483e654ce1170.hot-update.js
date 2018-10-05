webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_typed_js__ = __webpack_require__("./node_modules/typed.js/lib/typed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_typed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_typed_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_block__ = __webpack_require__("./components/work-block.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_post_image__ = __webpack_require__("./components/post-image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "/Users/mike-macbook/Desktop/Projects/matrixki/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







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

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.typedEl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.state = {
      posts: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

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
      this.typed = new __WEBPACK_IMPORTED_MODULE_2_typed_js___default.a(this.typedEl.current, options);
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('https://blog.matrixki.com/wp-json/wp/v2/posts?per_page=3').then(function (res) {
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
      this.typed.destroy();
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "index-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "typed-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: this.typedEl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#next",
        onClick: this.triggerScroll,
        className: "btn-go-next",
        id: "btn-go-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "icon",
        src: "/static/img/arrow-down.png",
        alt: "icon arrow down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "profile-pic",
        src: "/static/img/mike_avatar.jpg",
        alt: "Mike personal profile picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "index-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "I'm Mike Ko, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), "experienced Software engineer focus on web development."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "I have rich experience on web development, building and customization.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), "Below are the languages and tools I am familiar with: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), "HTML, CSS, Javascript(React, Vue, Augular), PHP, Ruby on Rails, Wordpress.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), "Feel free to drop me a message with an email."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "social-icon linkedin",
        href: "https://www.linkedin.com/in/mingkaiko/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "social-icon medium",
        href: "https://www.linkedin.com/in/mingkaiko/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-medium-m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }))))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "About me")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "section-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Work Experience"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "Full Stack Developer",
        link: "https://ddstudio.tw",
        unit: "DD Studio",
        year: "2017-2018",
        city: "Taipei, Taiwan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "Full Stack Developer",
        link: "https://tixinn.com",
        unit: "TIXINN.com",
        year: "2015-2017",
        city: "Taipei, Taiwan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "Front End Developer",
        link: "http://digbil.com",
        unit: "Digbil",
        year: "2014-2015",
        city: "Taipei, Taiwan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "Senior Front End Developer",
        link: "http://afusion.com",
        unit: "Asia Fusion Technology",
        year: "2013-2014",
        city: "Taipei, Taiwan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "Software Engineer",
        link: "http://www.itstrategists.com",
        unit: "IT Strategists",
        year: "2012-2013",
        city: "Los Angeles, U.S.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "section-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Education"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "University of Michigan, Ann Arbor",
        title: "Master degree, Electrical Engineering: Systems (minor: Computer Science)",
        year: "2010-2012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_work_block__["a" /* default */], {
        name: "National Taiwan University",
        title: "Bachelor degree, Engineering Scrience",
        year: "2004-2008",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Blogs")), this.state.posts.length > 0 && this.state.posts.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-md-4 col-sm-6",
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "post-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
          href: "/post?postId=".concat(post.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          onClick: function onClick() {
            Router.push("/post?postId=".concat(post.id));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_post_image__["a" /* default */], {
          media: post.featured_media ? post.featured_media : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          className: "post-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, post.title.rendered), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "excerpt",
          dangerouslySetInnerHTML: {
            __html: post.excerpt.rendered
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        })))));
      }))))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1e5cbaa483e654ce1170.hot-update.js.map