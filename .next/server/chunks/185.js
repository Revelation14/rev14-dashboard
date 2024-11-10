"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 5290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8304);
/* eslint-disable tailwindcss/classnames-order */ /* eslint-disable react/button-has-type */ /* eslint-disable tailwindcss/no-custom-classname */ 


const Button = ({ icon, text, className, handleClick, color = "white", backgroundColor = "gold", type = "button", width = "w-full md:w-48", loading = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `order-1 flex h-10 ${width} flex-none grow-0 flex-row items-center justify-center gap-2 rounded-3xl bg-${backgroundColor} px-2.5 py-3 text-${color} ${className}`,
        onClick: handleClick,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "w-5 h-5"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: icon,
                    alt: "Button Icon"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: text
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Spinner({ className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `animate-spin rounded-full border-2 border-gray-200 border-t-slate-400 ${className}`
    });
}


/***/ }),

/***/ 7276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-param-reassign */ 

const http = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.graceministries.online/api/v1",
    // baseURL: 'http://localhost:3000/api/v1',
    headers: {
        Authorization: "",
        "Content-Type": "application/json"
    }
});
http.defaults.withCredentials = false;
http.interceptors.request.use((config)=>{
    const token = JSON.parse((0,_helper__WEBPACK_IMPORTED_MODULE_1__/* .getFromLocalStorage */ .fp)("token"));
    if (config.headers) {
        config.headers.Authorization = token ? `${token}` : "";
    }
    return config;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LF: () => (/* binding */ toTitleCase),
/* harmony export */   bZ: () => (/* binding */ removeFromLocalStorage),
/* harmony export */   fp: () => (/* binding */ getFromLocalStorage),
/* harmony export */   pj: () => (/* binding */ setToLocalStorage)
/* harmony export */ });
function getFromLocalStorage(key) {
    if (false) {}
    return null;
}
function setToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}
function removeFromLocalStorage(key) {
    window.localStorage.removeItem(key);
}
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match)=>{
        return match.toUpperCase();
    });
}


/***/ })

};
;