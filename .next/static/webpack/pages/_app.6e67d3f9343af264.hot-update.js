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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_liveblocks_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/liveblocks.config */ \"./src/liveblocks.config.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals.css */ \"./pages/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./pages/index.tsx\");\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var roomId = useOverrideRoomId(\"nextjs-dashboard\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_liveblocks_config__WEBPACK_IMPORTED_MODULE_1__.RoomProvider, {\n        id: roomId,\n        initialPresence: {\n            selectedDataset: null,\n            cursor: null,\n            cardId: null\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"M3yPXYZnYtbqavgbq1UkEATBLCs=\", false, function() {\n    return [\n        useOverrideRoomId\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n/**\n * This function is used when deploying an example on liveblocks.io.\n * You can ignore it completely if you run the example locally.\n */ function useOverrideRoomId(roomId) {\n    _s1();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var overrideRoomId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {\n        return (query === null || query === void 0 ? void 0 : query.roomId) ? \"\".concat(roomId, \"-\").concat(query.roomId) : roomId;\n    }, [\n        query,\n        roomId\n    ]);\n    return overrideRoomId;\n}\n_s1(useOverrideRoomId, \"v5bZOIwWBjTk3E30otg0CXK5YGE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRXdEO0FBQ2hCO0FBQ0Q7QUFDaEI7QUFDTztBQUU5QixTQUFTSyxHQUFHLENBQUMsS0FBa0MsRUFBRTtRQUFsQ0MsU0FBUyxHQUFYLEtBQWtDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBa0MsQ0FBckJBLFNBQVM7O0lBQ2pDLElBQU1DLE1BQU0sR0FBR0MsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7SUFDcEQscUJBQ0UsOERBQUNULGdFQUFZO1FBQ1hVLEVBQUUsRUFBRUYsTUFBTTtRQUNWRyxlQUFlLEVBQUU7WUFDZkMsZUFBZSxFQUFFLElBQUk7WUFDckJDLE1BQU0sRUFBRSxJQUFJO1lBQ1pDLE1BQU0sRUFBRSxJQUFJO1NBQ2I7OzBCQUVELDhEQUFDViw4Q0FBTzs7OztvQkFBRzswQkFFWCw4REFBQ0UsU0FBUyxxRkFBS0MsU0FBUzs7OztvQkFBSTs7Ozs7O1lBQ2YsQ0FDZjtBQUNKLENBQUM7R0FoQlFGLEdBQUc7O1FBQ0tJLGlCQUFpQjs7O0FBRHpCSixLQUFBQSxHQUFHO0FBa0JaLCtEQUFlQSxHQUFHLEVBQUM7QUFFbkI7OztDQUdDLEdBQ0QsU0FBU0ksaUJBQWlCLENBQUNELE1BQWMsRUFBRTs7SUFDekMsSUFBTSxLQUFPLEdBQUtQLHNEQUFTLEVBQUUsQ0FBckJjLEtBQUs7SUFDYixJQUFNQyxjQUFjLEdBQUdiLDhDQUFPLENBQUMsV0FBTTtRQUNuQyxPQUFPWSxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBUSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLEtBQUssQ0FBRVAsTUFBTSxJQUFHLEVBQUMsQ0FBWU8sTUFBWSxDQUF0QlAsTUFBTSxFQUFDLEdBQUMsQ0FBZSxRQUFiTyxLQUFLLENBQUNQLE1BQU0sQ0FBRSxHQUFHQSxNQUFNLENBQUM7SUFDOUQsQ0FBQyxFQUFFO1FBQUNPLEtBQUs7UUFBRVAsTUFBTTtLQUFDLENBQUM7SUFFbkIsT0FBT1EsY0FBYyxDQUFDO0FBQ3hCLENBQUM7SUFQUVAsaUJBQWlCOztRQUNOUixrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFJvb21Qcm92aWRlciB9IGZyb20gXCIuLi9zcmMvbGl2ZWJsb2Nrcy5jb25maWdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL2luZGV4XCI7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvb21JZCA9IHVzZU92ZXJyaWRlUm9vbUlkKFwibmV4dGpzLWRhc2hib2FyZFwiKTtcbiAgcmV0dXJuIChcbiAgICA8Um9vbVByb3ZpZGVyXG4gICAgICBpZD17cm9vbUlkfVxuICAgICAgaW5pdGlhbFByZXNlbmNlPXt7XG4gICAgICAgIHNlbGVjdGVkRGF0YXNldDogbnVsbCxcbiAgICAgICAgY3Vyc29yOiBudWxsLFxuICAgICAgICBjYXJkSWQ6IG51bGwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFeGFtcGxlIC8+XG4gIFxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUm9vbVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gZGVwbG95aW5nIGFuIGV4YW1wbGUgb24gbGl2ZWJsb2Nrcy5pby5cbiAqIFlvdSBjYW4gaWdub3JlIGl0IGNvbXBsZXRlbHkgaWYgeW91IHJ1biB0aGUgZXhhbXBsZSBsb2NhbGx5LlxuICovXG5mdW5jdGlvbiB1c2VPdmVycmlkZVJvb21JZChyb29tSWQ6IHN0cmluZykge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb3ZlcnJpZGVSb29tSWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gcXVlcnk/LnJvb21JZCA/IGAke3Jvb21JZH0tJHtxdWVyeS5yb29tSWR9YCA6IHJvb21JZDtcbiAgfSwgW3F1ZXJ5LCByb29tSWRdKTtcblxuICByZXR1cm4gb3ZlcnJpZGVSb29tSWQ7XG59XG4iXSwibmFtZXMiOlsiUm9vbVByb3ZpZGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwiRXhhbXBsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvb21JZCIsInVzZU92ZXJyaWRlUm9vbUlkIiwiaWQiLCJpbml0aWFsUHJlc2VuY2UiLCJzZWxlY3RlZERhdGFzZXQiLCJjdXJzb3IiLCJjYXJkSWQiLCJxdWVyeSIsIm92ZXJyaWRlUm9vbUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});