"use strict";
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 1809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mu: () => (/* binding */ verifyOtp),
/* harmony export */   ck: () => (/* binding */ updateProfile),
/* harmony export */   eZ: () => (/* binding */ requestPasswordRecovery),
/* harmony export */   gQ: () => (/* binding */ updatePassword),
/* harmony export */   oG: () => (/* binding */ createPassword),
/* harmony export */   xJ: () => (/* binding */ signin)
/* harmony export */ });
/* unused harmony export ActionLogout */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


class ActionLogout extends (/* unused pure expression or super */ null && (Error)) {
}
async function signin(credentials) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/user/dashboard/login", credentials);
        return res.data.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function updateProfile(updateUserDto) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.put("/user/profile/me", updateUserDto);
        return res.data.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function requestPasswordRecovery(requestPassword) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/user/reset-password/request", requestPassword);
        return res;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function verifyOtp(verifyOtpDto) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/user/verify", verifyOtpDto);
        return res;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function createPassword(createPasswordDto) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/user/create-password", createPasswordDto);
        return res;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function updatePassword(userId, updatePasswordDto) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patch(`/user/update/password/${userId}`, updatePasswordDto);
        return res;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;