"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 8917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DatePicker = ({ name, value, handleChange })=>{
    const [innerValue, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onChange = (e)=>{
        setValue(e.target.value);
        if (handleChange && innerValue !== e.target.value) handleChange({
            name,
            value: e.target.value,
            event: e
        });
    };
    const onReset = (e)=>{
        setValue("");
        handleChange({
            name,
            value: "",
            event: e
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (handleChange && innerValue !== value) handleChange({
            name,
            value
        });
    }, [
        name,
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "date",
            name: name,
            id: "datepicker",
            value: innerValue,
            onChange: onChange,
            onReset: onReset,
            className: "rounded-full bg-gray-150 px-3 py-2 outline-none"
        })
    });
};



/***/ }),

/***/ 5504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 


const Header = ({ mobileNavsidebar, setMobileNavsidebar })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `flex items-center ${mobileNavsidebar ? "py-6" : "pb-6 lg:pb-0"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-12 cursor-pointer stroke-slate-600 sm:hidden",
            onClick: ()=>setMobileNavsidebar(!mobileNavsidebar),
            children: !mobileNavsidebar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-1 py-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/assets/icons/menu.svg",
                    alt: "",
                    width: 30,
                    height: 32
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-full bg-gray-150 p-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/assets/icons/cancel.svg",
                    alt: "",
                    width: 16,
                    height: 16
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3449);
/* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4923);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5504);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_auth_store__WEBPACK_IMPORTED_MODULE_3__, _Sidebar__WEBPACK_IMPORTED_MODULE_5__]);
([_store_auth_store__WEBPACK_IMPORTED_MODULE_3__, _Sidebar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Layout = ({ children })=>{
    const [mobileNavsidebar, setMobileNavsidebar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const auth = (0,_store_auth_store__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const user = JSON.parse((0,_lib_helper__WEBPACK_IMPORTED_MODULE_6__/* .getFromLocalStorage */ .fp)("user"));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!auth.user && !user) {
            router.push("/auth/login");
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex min-h-screen bg-gray-50 p-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                mobileNavsidebar: mobileNavsidebar
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grow text-gray-800",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        mobileNavsidebar: mobileNavsidebar,
                        setMobileNavsidebar: setMobileNavsidebar
                    }),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_outsideClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9208);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3449);
/* harmony import */ var _store_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4923);
/* harmony import */ var _sidebar_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(705);
/* harmony import */ var _sidebar_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7749);
/* harmony import */ var _sidebar_NavItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_auth_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_auth_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Sidebar = ({ mobileNavsidebar })=>{
    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [profileInitials, setProfileInitials] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const sidebarOutsideClick = (0,_utils_outsideClick__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(sidebarRef);
    const auth = (0,_store_auth_store__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const user = JSON.parse((0,_lib_helper__WEBPACK_IMPORTED_MODULE_8__/* .getFromLocalStorage */ .fp)("user"));
    const generateProfileInitials = (name)=>{
        const initials = `${name.split(" ")[0].charAt(0)}${name.split(" ")[1]?.charAt(0) ?? ""}`;
        setProfileInitials(initials);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (user) {
            generateProfileInitials(user.name || "");
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: `${mobileNavsidebar ? "block" : "hidden"} z-50 py-6 sm:flex sm:flex-col`,
        ref: sidebarRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_Logo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full grow flex-col justify-between pt-10 text-gray-600",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_Nav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        sidebarOutsideClick: sidebarOutsideClick
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_NavItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                hrefLink: "/profile",
                                sidebarStatus: true,
                                menuTitle: "Profile",
                                hasHover: false,
                                color: "text-black",
                                fontweight: "font-medium",
                                fontSize: "text-base",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative flex h-[44px] w-[44px] items-center justify-center rounded-full bg-backgroundAccent text-2xl font-medium text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: profileInitials
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_NavItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                hrefLink: "/auth/login",
                                sidebarStatus: true,
                                menuTitle: "Logout",
                                hasHover: false,
                                handleClick: ()=>{
                                    localStorage.clear();
                                    auth.logout();
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: "/assets/icons/logout.svg",
                                    alt: "",
                                    height: 18,
                                    width: 20
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Logo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/assets/images/Logo.svg",
            alt: "",
            width: 64,
            height: 64
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 7749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3449);
/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5702);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1915);
/* eslint-disable jsx-a11y/mouse-events-have-key-events */ 






const Nav = ({ sidebarOutsideClick })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [sidebarStatus, setSidebarStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [insightsHovered, setInsightsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [contributorHovered, setContributorHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [devotionHovered, setDevotionHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { route } = router;
    const user = JSON.parse((0,_lib_helper__WEBPACK_IMPORTED_MODULE_6__/* .getFromLocalStorage */ .fp)("user"));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (sidebarOutsideClick) {
            setSidebarStatus(true);
        }
    }, [
        sidebarOutsideClick
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "mx-4 my-6 flex flex-col space-y-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onMouseOver: ()=>setInsightsHovered(true),
                onMouseLeave: ()=>setInsightsHovered(false),
                children: user && user.role === _types_user_types__WEBPACK_IMPORTED_MODULE_4__/* .EUserRole */ .uA.SYSTEM_ADMIN ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    hrefLink: "/insights",
                    sidebarStatus: sidebarStatus,
                    menuTitle: "Insights",
                    active: route === "/insights",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: insightsHovered || route === "/insights" ? "/assets/icons/white-chart.svg" : "/assets/icons/chart.svg",
                        alt: "",
                        height: 16,
                        width: 16
                    })
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onMouseOver: ()=>setContributorHovered(true),
                onMouseLeave: ()=>setContributorHovered(false),
                children: user && user.role === _types_user_types__WEBPACK_IMPORTED_MODULE_4__/* .EUserRole */ .uA.SYSTEM_ADMIN ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    hrefLink: "/contributors",
                    sidebarStatus: sidebarStatus,
                    menuTitle: "Contributors",
                    active: route === "/contributors",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: contributorHovered || route === "/contributors" ? "/assets/icons/white-people.svg" : "/assets/icons/people.svg",
                        alt: "",
                        height: 16,
                        width: 16
                    })
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onMouseOver: ()=>setDevotionHovered(true),
                onMouseLeave: ()=>setDevotionHovered(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    hrefLink: "/devotionals",
                    sidebarStatus: sidebarStatus,
                    menuTitle: "Devotionals",
                    active: route === "/devotionals",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: devotionHovered || route === "/devotionals" ? "/assets/icons/white-book.svg" : "/assets/icons/book.svg",
                        alt: "",
                        height: 16,
                        width: 16
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 1915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 


const NavItem = ({ sidebarStatus, menuTitle, hrefLink, hasHover = true, color, fontweight, fontSize, children, active = false, handleClick })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: hrefLink,
        className: "hover:border-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 pr-6  ${active && "bg-gold text-white"} ${hasHover && "hover:bg-gold hover:text-white"} ${color || "text-gray-600"} ${fontweight || "font-light"}`,
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: handleClick,
                    className: `${sidebarStatus ? `ml-2 ${fontSize || "text-sm"}` : "sr-only"}`,
                    children: menuTitle
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);


/***/ }),

/***/ 9208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function OutsideClick(ref) {
    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true);
            } else {
                setIsClicked(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref
    ]);
    return isClicked;
}


/***/ })

};
;