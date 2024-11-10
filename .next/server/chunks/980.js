"use strict";
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 6980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 

const InputText = ({ label, type = "text", defaultValue, onChange, background = "bg-gray-50", placeholder = "", hasError = false })=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChange = (e)=>{
        setValue(e.target.value);
        if (onChange) {
            onChange({
                name: e.target.name,
                value: e.target.value
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [
        defaultValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "font-raleway text-sm text-gray-600",
                children: label
            }),
            type === "password" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: showPassword ? "text" : "password",
                        placeholder: placeholder === "" ? label : placeholder,
                        className: `w-full rounded-lg  ${background} px-4 py-2 text-[#6B6B6B] outline-none`,
                        value: value,
                        name: label,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute right-3 top-1/4 cursor-pointer",
                        onClick: ()=>setShowPassword(!showPassword),
                        children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/icons/eye-open.svg",
                            alt: "open",
                            width: 20,
                            height: 20
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/icons/eye-closed.svg",
                            alt: "closed",
                            width: 20,
                            height: 20
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                placeholder: placeholder === "" ? label : placeholder,
                className: hasError ? `w-full rounded-lg border border-secondary-orange ${background} px-4 py-2 text-[#6B6B6B] outline-none` : `w-full rounded-lg  ${background} px-4 py-2 text-[#6B6B6B] outline-none`,
                value: value,
                name: label,
                onChange: handleChange
            })
        ]
    });
};



/***/ })

};
;