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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Example; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_liveblocks_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/liveblocks.config */ \"./src/liveblocks.config.ts\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Example() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_src_liveblocks_config__WEBPACK_IMPORTED_MODULE_2__.useMyPresence)(), 2), myPresence = ref[0], updateMyPresence = ref[1];\n    var others = (0,_src_liveblocks_config__WEBPACK_IMPORTED_MODULE_2__.useOthersMapped)(function(user) {\n        return user.presence.selectedDataset;\n    });\n    var handleLegendPointerEnter = function(e, cardId) {\n        var dataKey = e.dataKey;\n        var selectedDataset = {\n            cardId: cardId,\n            dataKey: dataKey.toString()\n        };\n        updateMyPresence({\n            selectedDataset: selectedDataset\n        });\n    };\n    var handleLegendPointerLeave = function() {\n        updateMyPresence({\n            selectedDataset: null\n        });\n    };\n    var isDatasetSelected = function(cardId, dataKey) {\n        var ref, ref1;\n        if (((ref = myPresence.selectedDataset) === null || ref === void 0 ? void 0 : ref.cardId) === cardId && ((ref1 = myPresence.selectedDataset) === null || ref1 === void 0 ? void 0 : ref1.dataKey) === dataKey) {\n            return true;\n        }\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = others[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var _value = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_step.value, 2), selectedDataset = _value[1];\n                if ((selectedDataset === null || selectedDataset === void 0 ? void 0 : selectedDataset.cardId) === cardId && (selectedDataset === null || selectedDataset === void 0 ? void 0 : selectedDataset.dataKey) === dataKey) {\n                    return true;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        return false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/pages/index.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/binbin/Desktop/未命名文件夹/nextjs-dashboard/pages/index.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Example, \"RiUhH8yRxj23d9Y0IdTRDGkPaZQ=\", false, function() {\n    return [\n        _src_liveblocks_config__WEBPACK_IMPORTED_MODULE_2__.useMyPresence,\n        _src_liveblocks_config__WEBPACK_IMPORTED_MODULE_2__.useOthersMapped\n    ];\n});\n_c = Example;\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXVDO0FBb0JtQztBQUNsQztBQUNNOztBQUsvQixTQUFTSyxPQUFPLEdBQUc7O0lBQ2hDLElBQXVDSixHQUFlLG9GQUFmQSxxRUFBYSxFQUFFLE1BQS9DSyxVQUFVLEdBQXNCTCxHQUFlLEdBQXJDLEVBQUVNLGdCQUFnQixHQUFJTixHQUFlLEdBQW5CO0lBQ25DLElBQU1PLE1BQU0sR0FBR04sdUVBQWUsQ0FBQyxTQUFDTyxJQUFJO2VBQUtBLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxlQUFlO0tBQUEsQ0FBQztJQUV2RSxJQUFNQyx3QkFBd0IsR0FBRyxTQUMvQkMsQ0FFQyxFQUNEQyxNQUFjLEVBQ1g7UUFDSCxJQUFNLE9BQVMsR0FBS0QsQ0FBQyxDQUFiRSxPQUFPO1FBRWYsSUFBTUosZUFBZSxHQUFHO1lBQ3RCRyxNQUFNLEVBQUVBLE1BQU07WUFDZEMsT0FBTyxFQUFFQSxPQUFPLENBQUNDLFFBQVEsRUFBRTtTQUM1QjtRQUVEVCxnQkFBZ0IsQ0FBQztZQUNmSSxlQUFlLEVBQUVBLGVBQWU7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQU1NLHdCQUF3QixHQUFHLFdBQU07UUFDckNWLGdCQUFnQixDQUFDO1lBQ2ZJLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFNTyxpQkFBaUIsR0FBRyxTQUFDSixNQUFjLEVBQUVDLE9BQXdCLEVBQUs7WUFFcEVULEdBQTBCLEVBQzFCQSxJQUEwQjtRQUY1QixJQUNFQSxDQUFBQSxDQUFBQSxHQUEwQixHQUExQkEsVUFBVSxDQUFDSyxlQUFlLGNBQTFCTCxHQUEwQixXQUFRLEdBQWxDQSxLQUFBQSxDQUFrQyxHQUFsQ0EsR0FBMEIsQ0FBRVEsTUFBTSxNQUFLQSxNQUFNLElBQzdDUixDQUFBQSxDQUFBQSxJQUEwQixHQUExQkEsVUFBVSxDQUFDSyxlQUFlLGNBQTFCTCxJQUEwQixXQUFTLEdBQW5DQSxLQUFBQSxDQUFtQyxHQUFuQ0EsSUFBMEIsQ0FBRVMsT0FBTyxNQUFLQSxPQUFPLEVBQy9DO1lBQ0EsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1lBRUkseUJBQXlCLFNBQXpCLGlCQUF5QixVQUF6QixjQUF5Qjs7WUFBOUIsUUFBSyxTQUF5QixHQUFJUCxNQUFNLHFCQUFuQyxLQUF5QixJQUF6Qix5QkFBeUIsSUFBekIsS0FBeUIsR0FBekIsU0FBeUIsZ0JBQXpCLHlCQUF5QixRQUFZO2dCQUFyQyxtR0FBeUIsWUFBaEJHLGVBQWU7Z0JBQzNCLElBQ0VBLENBQUFBLGVBQWUsYUFBZkEsZUFBZSxXQUFRLEdBQXZCQSxLQUFBQSxDQUF1QixHQUF2QkEsZUFBZSxDQUFFRyxNQUFNLE1BQUtBLE1BQU0sSUFDbENILENBQUFBLGVBQWUsYUFBZkEsZUFBZSxXQUFTLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsZUFBZSxDQUFFSSxPQUFPLE1BQUtBLE9BQU8sRUFDcEM7b0JBQ0EsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7O1lBUEksaUJBQXlCO1lBQXpCLGNBQXlCOzs7cUJBQXpCLHlCQUF5QixJQUF6QixTQUF5QjtvQkFBekIsU0FBeUI7OztvQkFBekIsaUJBQXlCOzBCQUF6QixjQUF5Qjs7OztRQVM5QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUVqQixvRUFBZ0I7a0JBQzlCLDRFQUFDQyw4REFBTTs7OztnQkFBRzs7Ozs7WUFFTixDQUNOO0FBQ0osQ0FBQztHQXREdUJDLE9BQU87O1FBQ1VKLGlFQUFhO1FBQ3JDQyxtRUFBZTs7O0FBRlJHLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgUmVzcG9uc2l2ZUNvbnRhaW5lcixcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBCYXIsXG4gIExlZ2VuZCxcbiAgUGllQ2hhcnQsXG4gIFBpZSxcbiAgQmFyQ2hhcnQsXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xuaW1wb3J0IHsgRGF0YUtleSB9IGZyb20gXCJyZWNoYXJ0cy90eXBlcy91dGlsL3R5cGVzXCI7XG5pbXBvcnQge1xuICBkYXRhUmV2ZW51ZSxcbiAgZGF0YVVzZXJzLFxuICBkYXRhUGxhdGZvcm1zLFxuICBkYXRhQWN0aXZhdGlvbixcbn0gZnJvbSBcIi4uL3NyYy9kYXRhXCI7XG5pbXBvcnQgeyB1c2VNeVByZXNlbmNlLCB1c2VPdGhlcnNNYXBwZWQgfSBmcm9tIFwiLi4vc3JjL2xpdmVibG9ja3MuY29uZmlnXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0N1cnNvclwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSgpIHtcbiAgY29uc3QgW215UHJlc2VuY2UsIHVwZGF0ZU15UHJlc2VuY2VdID0gdXNlTXlQcmVzZW5jZSgpO1xuICBjb25zdCBvdGhlcnMgPSB1c2VPdGhlcnNNYXBwZWQoKHVzZXIpID0+IHVzZXIucHJlc2VuY2Uuc2VsZWN0ZWREYXRhc2V0KTtcblxuICBjb25zdCBoYW5kbGVMZWdlbmRQb2ludGVyRW50ZXIgPSAoXG4gICAgZToge1xuICAgICAgZGF0YUtleTogRGF0YUtleTxzdHJpbmc+O1xuICAgIH0sXG4gICAgY2FyZElkOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhS2V5IH0gPSBlO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhc2V0ID0ge1xuICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICBkYXRhS2V5OiBkYXRhS2V5LnRvU3RyaW5nKCksIC8vIGNvbnZlcnQgbnVtYmVyIHRvIHN0cmluZ1xuICAgIH07XG5cbiAgICB1cGRhdGVNeVByZXNlbmNlKHtcbiAgICAgIHNlbGVjdGVkRGF0YXNldDogc2VsZWN0ZWREYXRhc2V0LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxlZ2VuZFBvaW50ZXJMZWF2ZSA9ICgpID0+IHtcbiAgICB1cGRhdGVNeVByZXNlbmNlKHtcbiAgICAgIHNlbGVjdGVkRGF0YXNldDogbnVsbCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0RhdGFzZXRTZWxlY3RlZCA9IChjYXJkSWQ6IHN0cmluZywgZGF0YUtleTogRGF0YUtleTxzdHJpbmc+KSA9PiB7XG4gICAgaWYgKFxuICAgICAgbXlQcmVzZW5jZS5zZWxlY3RlZERhdGFzZXQ/LmNhcmRJZCA9PT0gY2FyZElkICYmXG4gICAgICBteVByZXNlbmNlLnNlbGVjdGVkRGF0YXNldD8uZGF0YUtleSA9PT0gZGF0YUtleVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbLCBzZWxlY3RlZERhdGFzZXRdIG9mIG90aGVycykge1xuICAgICAgaWYgKFxuICAgICAgICBzZWxlY3RlZERhdGFzZXQ/LmNhcmRJZCA9PT0gY2FyZElkICYmXG4gICAgICAgIHNlbGVjdGVkRGF0YXNldD8uZGF0YUtleSA9PT0gZGF0YUtleVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xJVkVCTE9DS1NfUFVCTElDX0tFWTtcbiAgY29uc3QgQVBJX0tFWV9XQVJOSU5HID0gcHJvY2Vzcy5lbnYuQ09ERVNBTkRCT1hfU1NFXG4gICAgPyBgQWRkIHlvdXIgcHVibGljIGtleSBmcm9tIGh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9kYXNoYm9hcmQvYXBpa2V5cyBhcyB0aGUgXFxgTkVYVF9QVUJMSUNfTElWRUJMT0NLU19QVUJMSUNfS0VZXFxgIHNlY3JldCBpbiBDb2RlU2FuZGJveC5cXG5gICtcbiAgICAgIGBMZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vbGl2ZWJsb2Nrcy9saXZlYmxvY2tzL3RyZWUvbWFpbi9leGFtcGxlcy9uZXh0anMtbGl2ZS1jdXJzb3JzLWNoYXQjY29kZXNhbmRib3guYFxuICAgIDogYENyZWF0ZSBhbiBcXGAuZW52LmxvY2FsXFxgIGZpbGUgYW5kIGFkZCB5b3VyIHB1YmxpYyBrZXkgZnJvbSBodHRwczovL2xpdmVibG9ja3MuaW8vZGFzaGJvYXJkL2FwaWtleXMgYXMgdGhlIFxcYE5FWFRfUFVCTElDX0xJVkVCTE9DS1NfUFVCTElDX0tFWVxcYCBlbnZpcm9ubWVudCB2YXJpYWJsZS5cXG5gICtcbiAgICAgIGBMZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vbGl2ZWJsb2Nrcy9saXZlYmxvY2tzL3RyZWUvbWFpbi9leGFtcGxlcy9uZXh0anMtbGl2ZS1jdXJzb3JzLWNoYXQjZ2V0dGluZy1zdGFydGVkLmA7XG5cbiAgaWYgKCFBUElfS0VZKSB7XG4gICAgY29uc29sZS53YXJuKEFQSV9LRVlfV0FSTklORyk7XG4gIH1cblxuICByZXR1cm4geyBwcm9wczoge30gfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU15UHJlc2VuY2UiLCJ1c2VPdGhlcnNNYXBwZWQiLCJzdHlsZXMiLCJIZWFkZXIiLCJFeGFtcGxlIiwibXlQcmVzZW5jZSIsInVwZGF0ZU15UHJlc2VuY2UiLCJvdGhlcnMiLCJ1c2VyIiwicHJlc2VuY2UiLCJzZWxlY3RlZERhdGFzZXQiLCJoYW5kbGVMZWdlbmRQb2ludGVyRW50ZXIiLCJlIiwiY2FyZElkIiwiZGF0YUtleSIsInRvU3RyaW5nIiwiaGFuZGxlTGVnZW5kUG9pbnRlckxlYXZlIiwiaXNEYXRhc2V0U2VsZWN0ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});