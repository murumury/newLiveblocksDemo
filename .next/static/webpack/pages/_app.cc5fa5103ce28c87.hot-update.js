"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _liveblocks_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../liveblocks.config */ \"./src/liveblocks.config.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\n/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cursor */ \"./src/components/Cursor.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    var id = param.id, children = param.children;\n    var _this = this;\n    _s();\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var updateMyPresence = (0,_liveblocks_config__WEBPACK_IMPORTED_MODULE_1__.useUpdateMyPresence)();\n    var others = (0,_liveblocks_config__WEBPACK_IMPORTED_MODULE_1__.useOthers)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), boundingRect = ref[0], setBoundingRect = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (containerRef.current) {\n            setBoundingRect(containerRef.current.getBoundingClientRect());\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            height: \"auto\"\n        },\n        onPointerEnter: function() {\n            var ref;\n            updateMyPresence({\n                cardId: id\n            });\n            var ref1;\n            setBoundingRect((ref1 = (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.getBoundingClientRect()) !== null && ref1 !== void 0 ? ref1 : null);\n        },\n        onPointerMove: function(e) {\n            e.preventDefault();\n            if (!boundingRect) {\n                return;\n            }\n            var cursor = {\n                x: (e.clientX - boundingRect.left) / boundingRect.width,\n                y: (e.clientY - boundingRect.top) / boundingRect.height\n            };\n            updateMyPresence({\n                cursor: cursor\n            });\n        },\n        onPointerLeave: function() {\n            updateMyPresence({\n                cardId: null,\n                cursor: null\n            });\n        },\n        children: [\n            children,\n            others.map(function(param) {\n                var connectionId = param.connectionId, presence = param.presence;\n                if (boundingRect == null || presence == null || presence.cursor == null || presence.cardId == null || presence.cardId !== id) {\n                    return null;\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    color: \"rgb(\".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.COLORS_PRESENCE[connectionId % _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS_PRESENCE.length]),\n                    x: presence.cursor.x * boundingRect.width,\n                    y: presence.cursor.y * boundingRect.height\n                }, \"cursor-\".concat(connectionId), false, {\n                    fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/src/components/Card.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/src/components/Card.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"TorlOzxRBU0xQ1RJjSDuANcgiTo=\", false, function() {\n    return [\n        _liveblocks_config__WEBPACK_IMPORTED_MODULE_1__.useUpdateMyPresence,\n        _liveblocks_config__WEBPACK_IMPORTED_MODULE_1__.useOthers\n    ];\n});\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBRVgsT0FEQ2pDLHVEQUFlLENBQUMrQixZQUFZLEdBQUcvQiw4REFBc0IsQ0FBQyxDQUN0RDtvQkFDRnNCLENBQUMsRUFBRVUsUUFBUSxDQUFDWCxNQUFNLENBQUNDLENBQUMsR0FBR2QsWUFBWSxDQUFDaUIsS0FBSztvQkFDekNDLENBQUMsRUFBRU0sUUFBUSxDQUFDWCxNQUFNLENBQUNLLENBQUMsR0FBR2xCLFlBQVksQ0FBQ08sTUFBTTttQkFMckMsU0FBUSxDQUFlLE9BQWJnQixZQUFZLENBQUU7Ozs7eUJBTTdCLENBQ0Y7WUFDSixDQUFDLENBQUM7Ozs7OztZQUNFLENBQ047QUFDSixDQUFDO0dBdkV1QjdCLElBQUk7O1FBRURQLG1FQUFtQjtRQUM3QkMseURBQVM7OztBQUhGTSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQudHN4P2I1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHVzZVVwZGF0ZU15UHJlc2VuY2UsXG4gIHVzZU90aGVyc1xufSBmcm9tIFwiLi4vbGl2ZWJsb2Nrcy5jb25maWdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ09MT1JTX1BSRVNFTkNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IEN1cnNvciBmcm9tIFwiLi9DdXJzb3JcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbnR5cGUgQm91bmRpbmdSZWN0ID0ge1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGlkLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB1cGRhdGVNeVByZXNlbmNlID0gdXNlVXBkYXRlTXlQcmVzZW5jZSgpO1xuICBjb25zdCBvdGhlcnMgPSB1c2VPdGhlcnMoKTtcbiAgY29uc3QgW2JvdW5kaW5nUmVjdCwgc2V0Qm91bmRpbmdSZWN0XSA9IHVzZVN0YXRlPEJvdW5kaW5nUmVjdCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRCb3VuZGluZ1JlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBzdHlsZT17e2hlaWdodDonYXV0byd9fVxuICAgICAgb25Qb2ludGVyRW50ZXI9eygpID0+IHtcbiAgICAgICAgdXBkYXRlTXlQcmVzZW5jZSh7XG4gICAgICAgICAgY2FyZElkOiBpZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEJvdW5kaW5nUmVjdChjb250YWluZXJSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgPz8gbnVsbCk7XG4gICAgICB9fVxuICAgICAgb25Qb2ludGVyTW92ZT17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghYm91bmRpbmdSZWN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3Vyc29yID0ge1xuICAgICAgICAgIHg6IChlLmNsaWVudFggLSBib3VuZGluZ1JlY3QubGVmdCkgLyBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgICAgICAgeTogKGUuY2xpZW50WSAtIGJvdW5kaW5nUmVjdC50b3ApIC8gYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVNeVByZXNlbmNlKHtcbiAgICAgICAgICBjdXJzb3IsXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICAgIG9uUG9pbnRlckxlYXZlPXsoKSA9PiB7XG4gICAgICAgIHVwZGF0ZU15UHJlc2VuY2Uoe1xuICAgICAgICAgIGNhcmRJZDogbnVsbCxcbiAgICAgICAgICBjdXJzb3I6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIHtvdGhlcnMubWFwKCh7IGNvbm5lY3Rpb25JZCwgcHJlc2VuY2UgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm91bmRpbmdSZWN0ID09IG51bGwgfHxcbiAgICAgICAgICBwcmVzZW5jZSA9PSBudWxsIHx8XG4gICAgICAgICAgcHJlc2VuY2UuY3Vyc29yID09IG51bGwgfHxcbiAgICAgICAgICBwcmVzZW5jZS5jYXJkSWQgPT0gbnVsbCB8fFxuICAgICAgICAgIHByZXNlbmNlLmNhcmRJZCAhPT0gaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDdXJzb3JcbiAgICAgICAgICAgIGtleT17YGN1cnNvci0ke2Nvbm5lY3Rpb25JZH1gfVxuICAgICAgICAgICAgY29sb3I9e2ByZ2IoJHtcbiAgICAgICAgICAgICAgQ09MT1JTX1BSRVNFTkNFW2Nvbm5lY3Rpb25JZCAlIENPTE9SU19QUkVTRU5DRS5sZW5ndGhdXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHg9e3ByZXNlbmNlLmN1cnNvci54ICogYm91bmRpbmdSZWN0LndpZHRofVxuICAgICAgICAgICAgeT17cHJlc2VuY2UuY3Vyc29yLnkgKiBib3VuZGluZ1JlY3QuaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VVcGRhdGVNeVByZXNlbmNlIiwidXNlT3RoZXJzIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDT0xPUlNfUFJFU0VOQ0UiLCJDdXJzb3IiLCJDYXJkIiwiaWQiLCJjaGlsZHJlbiIsImNvbnRhaW5lclJlZiIsInVwZGF0ZU15UHJlc2VuY2UiLCJvdGhlcnMiLCJib3VuZGluZ1JlY3QiLCJzZXRCb3VuZGluZ1JlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGl2IiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJvblBvaW50ZXJFbnRlciIsImNhcmRJZCIsIm9uUG9pbnRlck1vdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJzb3IiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ3aWR0aCIsInkiLCJjbGllbnRZIiwidG9wIiwib25Qb2ludGVyTGVhdmUiLCJtYXAiLCJjb25uZWN0aW9uSWQiLCJwcmVzZW5jZSIsImNvbG9yIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card.tsx\n"));

/***/ })

});