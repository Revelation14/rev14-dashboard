"use strict";
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 4923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        user: null,
        accessToken: "",
        authenticate: (user, accessToken)=>{
            set({
                user,
                accessToken
            });
        },
        logout: ()=>{
            set({
                user: null,
                accessToken: ""
            });
        },
        updateUser: (user)=>{
            set({
                user
            });
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2: () => (/* binding */ EGender),
/* harmony export */   ob: () => (/* binding */ EStatus),
/* harmony export */   uA: () => (/* binding */ EUserRole)
/* harmony export */ });
var EUserRole;
(function(EUserRole) {
    EUserRole["SYSTEM_ADMIN"] = "SYSTEM_ADMIN";
    EUserRole["CONTENT_CREATOR"] = "CONTENT_CREATOR";
    EUserRole["USER"] = "USER";
    EUserRole["PREMIUM_USER"] = "PREMIUM_USER";
    EUserRole["STANDARD_USER"] = "STANDARD_USER";
})(EUserRole || (EUserRole = {}));
var EStatus;
(function(EStatus) {
    EStatus["ACTIVE"] = "ACTIVE";
    EStatus["SUSPENDED"] = "SUSPENDED";
})(EStatus || (EStatus = {}));
var EGender;
(function(EGender) {
    EGender["FEMALE"] = "female";
    EGender["MALE"] = "male";
})(EGender || (EGender = {}));


/***/ })

};
;