function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive4b76b5c3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-29df6f59.js */
    "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-manual-card/add-manual-card.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-manual-card/add-manual-card.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddManualCardAddManualCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\"> \r\n    <ion-title>Add Card</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-buttons fill=\"clear\" style=\"font-size: 12px;padding-left: 5px;\" (click)=\"cerrar()\" >\r\n        <ion-icon slot=\"icon-only\" name=\"close\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon>\r\n     </ion-buttons>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"cardAddForm\" (ngSubmit)=\"cardAdd()\">\r\n    <ion-list class=\"ion-margin-horizontal\" no-margin>\r\n\r\n      <!-- <ion-item class=\"listItem\" no-lines >\r\n        <ion-label position=\"stacked\" class=\"listLabel\" style=\"\">Name</ion-label> -->\r\n        <ion-input type=\"text\" placeholder=\"Name\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\" formControlName=\"name\" value=\"\" class=\"listInput\"></ion-input>\r\n      <!-- </ion-item> -->\r\n\r\n\r\n        <ion-input type=\"text\" placeholder=\"Surname\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"  formControlName=\"surname\" value=\"\" class=\"listInput\"></ion-input>\r\n     \r\n        <ion-input type=\"text\" placeholder=\"Workplace\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"  formControlName=\"workplace\" value=\"\" class=\"listInput\"></ion-input>\r\n\r\n        <ion-input type=\"email\" placeholder=\"Email\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"  formControlName=\"email\" value=\"\" class=\"listInput\"></ion-input>\r\n\r\n        <ion-input type=\"number\" placeholder=\"Cell no\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"  formControlName=\"cellNo\" class=\"listInput\"></ion-input>\r\n\r\n    </ion-list>\r\n    <ion-row style=\"justify-content: center;margin-top: 2%;\">\r\n    <ion-checkbox  formControlName=\"cellNoSharing\" ></ion-checkbox> <ion-label style=\"margin-left: 10px;\">Shared Phone Number</ion-label>\r\n  </ion-row  >\r\n   \r\n    <ion-row style=\"justify-content: center;margin-top: 5%;\">\r\n      <ion-button class=\"custom-buttom\" type=\"submit\" shape=\"round\" [disabled]=\"!cardAddForm.valid\">\r\n        ADD CARD\r\n      </ion-button>\r\n    </ion-row>\r\n\r\n  </form>\r\n<!-- \r\n  <ion-row style=\"justify-content: center;margin-top: 5%;\">\r\n    <ion-button class=\"custom-buttom\" type=\"button\" shape=\"round\" (click)=\"saveContact()\">\r\n      Save Card\r\n    </ion-button>\r\n  </ion-row> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-card/edit-card.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-card/edit-card.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCardEditCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Edit Card</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-buttons fill=\"clear\" style=\"font-size: 12px;padding-left: 5px;\" (click)=\"cerrar()\" >\r\n        <ion-icon slot=\"icon-only\" name=\"close\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon>\r\n     </ion-buttons>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list class=\"ion-margin-horizontal\" no-margin>\r\n\r\n        <ion-input [(ngModel)]=\"card.name\" type=\"text\"  placeholder=\"Name\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\" value=\"\" class=\"listInput\" ></ion-input>\r\n\r\n        <ion-input [(ngModel)]=\"card.surname\" type=\"text\" placeholder=\"Surname\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"   value=\"\" class=\"listInput\"></ion-input>\r\n     \r\n        <ion-input [(ngModel)]=\"card.Workplace\" type=\"text\" placeholder=\"Workplace\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\" value=\"\" class=\"listInput\"></ion-input>\r\n\r\n        <ion-input [(ngModel)]=\"card.email\" type=\"email\" placeholder=\"Email\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"   value=\"\" class=\"listInput\"></ion-input>\r\n\r\n        <ion-input [(ngModel)]=\"card.cellNo\" type=\"number\" placeholder=\"Cell no\" style=\"border:1px solid #888888;border-radius: 22px;margin-top: 10px;\"   class=\"listInput\"></ion-input>\r\n\r\n    </ion-list>\r\n\r\n    <ion-row style=\"justify-content: center;margin-top: 2%;\">\r\n      <ion-checkbox  [(ngModel)]=\"card.cellNoSharing\" ></ion-checkbox> <ion-label style=\"margin-left: 10px;\">Shared Phone Number</ion-label>\r\n    </ion-row  >\r\n\r\n    <ion-row style=\"justify-content: center;margin-top: 5%;\">\r\n      <ion-button class=\"custom-buttom\" type=\"submit\" shape=\"round\"  (click)=\"update()\">\r\n        UPDATE CARD\r\n      </ion-button>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/add-manual-card/add-manual-card.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/add-manual-card/add-manual-card.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddManualCardAddManualCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".native-input {\n  padding-left: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1hbnVhbC1jYXJkL0U6XFxpb25pY1xcZXhjaGFuZ2UtYnVzc2luZXNzLWNhcmQvc3JjXFxhcHBcXGFkZC1tYW51YWwtY2FyZFxcYWRkLW1hbnVhbC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLW1hbnVhbC1jYXJkL2FkZC1tYW51YWwtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkLW1hbnVhbC1jYXJkL2FkZC1tYW51YWwtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF0aXZlLWlucHV0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIubmF0aXZlLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-manual-card/add-manual-card.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/add-manual-card/add-manual-card.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddManualCardPage */

  /***/
  function srcAppAddManualCardAddManualCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddManualCardPage", function () {
      return AddManualCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js"); // import { Contacts} from '@ionic-native/contacts';


    var AddManualCardPage = /*#__PURE__*/function () {
      function AddManualCardPage(modalCtrl, apiService, formBuilder, route, toast, contacts) {
        _classCallCheck(this, AddManualCardPage);

        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toast = toast;
        this.contacts = contacts;
        this.errorMessage = '';
        this.successMessage = '';
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('user', this.user);
        this.userId = JSON.parse(localStorage.getItem('userId'));
        console.log('userId', this.userId);
        this.cardAddForm = formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          workplace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
          cellNo: [''],
          cellNoSharing: [true]
        });
      }

      _createClass(AddManualCardPage, [{
        key: "saveContact",
        value: function saveContact(card) {
          // let contact: Contact = this.contacts.create();
          // contact.name = new ContactName(null, 'Smith', 'John');
          // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
          // contact.save().then(
          //   async() => await console.log('Contact saved!', contact));
          console.log('save card', card);
          var contact = this.contacts.create();
          contact.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactName"](null, card['card'].name, card['card'].surname);
          contact.phoneNumbers = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactField"]('mobile', card['card'].cellNo)];
          contact.emails = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactField"]('emails', card['card'].email)];
          contact.addresses = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactAddress"](true, 'work', card['card'].Workplace)];
          contact.save().then(function () {
            return console.log('Contact saved!', contact);
          }, function (error) {
            return console.error('Error saving contact.', error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "cardAdd",
        value: function cardAdd() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log("cardAdd Method");
                    data = {
                      name: this.cardAddForm.value.name,
                      surname: this.cardAddForm.value.surname,
                      workplace: this.cardAddForm.value.workplace,
                      userId: this.userId,
                      email: this.cardAddForm.value.email,
                      cellNo: this.cardAddForm.value.cellNo,
                      cardType: "type3",
                      cellNoSharing: this.cardAddForm.value.cellNoSharing
                    };
                    console.log(data);
                    this.apiService.cardAdd(data).subscribe(function (data) //Start Service
                    {
                      console.log(data);

                      _this.toast.show("Card Successfully Added ", '5000', 'bottom').subscribe(function (toast) {
                        console.log(toast);
                      });

                      _this.saveContact(data);

                      _this.cerrar();
                    }, function (err) {
                      console.log(err);
                      console.log(err.statusText);
                    });
                    _context3.next = 6;
                    return this.route.navigateByUrl('/card-list');

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AddManualCardPage;
    }();

    AddManualCardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"]
      }];
    };

    AddManualCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-manual-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-manual-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-manual-card/add-manual-card.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-manual-card.page.scss */
      "./src/app/add-manual-card/add-manual-card.page.scss"))["default"]]
    })], AddManualCardPage);
    /***/
  },

  /***/
  "./src/app/edit-card/edit-card.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/edit-card/edit-card.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCardEditCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY2FyZC9lZGl0LWNhcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/edit-card/edit-card.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/edit-card/edit-card.page.ts ***!
    \*********************************************/

  /*! exports provided: EditCardPage */

  /***/
  function srcAppEditCardEditCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCardPage", function () {
      return EditCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/api/api.service */
    "./src/app/service/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js"); // import { Contacts} from '@ionic-native/contacts';


    var EditCardPage = /*#__PURE__*/function () {
      function EditCardPage(apiService, formBuilder, route, router, modalCtrl, contacts, toast, navParams) {
        _classCallCheck(this, EditCardPage);

        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.contacts = contacts;
        this.toast = toast;
        this.navParams = navParams;
        this.errorMessage = '';
        this.successMessage = '';
        this.cellNoSharing = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('user', this.user);
        this.userId = JSON.parse(localStorage.getItem('userId'));
        console.log('userId', this.userId);
      }

      _createClass(EditCardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.sub = this.router.params.subscribe(params => {
          //   this.id = params['id'];
          // });
          console.log(this.id);
          var id = this.navParams.get('id');
          console.log(id);
          this.viewCard(id);
        }
      }, {
        key: "viewCard",
        value: function viewCard(ids) {
          var _this2 = this;

          console.log(ids);
          this.apiService.getCard(ids).subscribe(function (data) //Start Service
          {
            _this2.cardid = data[0]['_id'];
            _this2.card = data[0]['card'];
            console.log(_this2.card);
          }, function (err) {
            console.log(err);
            console.log(err.statusText);
          });
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "saveContact",
        value: function saveContact(cards) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var contact;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // let contact: Contact = this.contacts.create();
                    // contact.name = new ContactName(null, 'Smith', 'John');
                    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
                    // contact.save().then(
                    //   async() => await console.log('Contact saved!', contact));
                    console.log('save card', cards);
                    contact = this.contacts.create();
                    contact.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactName"](null, cards.name, cards.surname);
                    contact.phoneNumbers = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactField"]('mobile', cards.cellNo)];
                    contact.emails = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactField"]('emails', cards.email)];
                    contact.addresses = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["ContactAddress"](true, 'work', cards.Workplace)];
                    _context4.next = 8;
                    return contact.save().then(function () {
                      return console.log('Contact saved!', contact);
                    }, function (error) {
                      return console.error('Error saving contact.', error);
                    });

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "update",
        value: function update() {
          var _this3 = this;

          // console.log(this.card['name']);
          if (this.card['name'] == "" || this.card['surname'] == "" || this.card['Workplace'] == "" || this.card['name'] == undefined || this.card['surname'] == undefined || this.card['Workplace'] == undefined) {
            console.log("something is missing");
          } else {
            var data = {
              cardId: this.cardid,
              name: this.card['name'],
              surname: this.card['surname'],
              email: this.card['email'],
              cellNo: this.card['cellNo'],
              Workplace: this.card['Workplace'],
              cellNoSharing: this.card['cellNoSharing']
            };
            this.apiService.cardupdate(data).subscribe(function (data) //Start Service
            {
              console.log(data);

              _this3.toast.show('Card Updated', '5000', 'center').subscribe(function (toast) {
                console.log(toast);
              });

              _this3.saveContact(data);

              _this3.cerrar();
            }, function (err) {
              console.log(err);
              console.log(err.statusText);
            }); //  this.route.navigateByUrl('/card-list');
          }
        }
      }]);

      return EditCardPage;
    }();

    EditCardPage.ctorParameters = function () {
      return [{
        type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"]
      }, {
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    EditCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-card/edit-card.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-card.page.scss */
      "./src/app/edit-card/edit-card.page.scss"))["default"]]
    })], EditCardPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map