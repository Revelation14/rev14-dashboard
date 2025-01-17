"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 6067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8304);


const ActionButton = ({ label, backgroundColor, hoverBackgroundColor, color, width = "w-14", handleClick, loading = false })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: `flex h-8 items-center justify-center rounded-2xl text-sm font-normal ${width} ${color} ${backgroundColor} ${hoverBackgroundColor}`,
        onClick: handleClick,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            className: "h-5 w-5"
        }) : label
    });



/***/ }),

/***/ 5327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Badge = ({ title, backgroundColor })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `rounded-full px-2 py-1 text-sm font-medium text-white ${backgroundColor}`,
        children: title
    });



/***/ }),

/***/ 2797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8304);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 


const ConfirmPopup = ({ title, message, onConfirm, onCancel, loading })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/75 font-raleway",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rounded-lg bg-white p-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-lg font-bold",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "cursor-pointer",
                            onClick: onCancel,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/icons/black-close.svg",
                                alt: "",
                                className: "w-2"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-4",
                    children: message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-end",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: onCancel,
                            className: "mr-2 rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: onConfirm,
                            className: "flex items-center justify-center rounded-lg bg-gold px-4 py-2 text-white hover:bg-gold/75",
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: "h-5 w-5"
                            }) : "Delete"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmPopup);


/***/ }),

/***/ 8486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NoDataAvailable = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center py-16",
        children: "No data available"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoDataAvailable);


/***/ }),

/***/ 7382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_pagination__WEBPACK_IMPORTED_MODULE_2__]);
_store_pagination__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Pagination = ({ onPageChange })=>{
    const { currentPage, totalPages, setCurrentPage } = (0,_store_pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const handlePrevClick = ()=>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };
    const handleNextClick = ()=>{
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    };
    const handlePageSelect = (e)=>{
        const selectedPage = parseInt(e.target.value, 10);
        setCurrentPage(selectedPage);
        onPageChange(selectedPage);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bottom-5 left-0 flex w-full flex-row items-center justify-center gap-3 font-raleway",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "flex items-center px-4 py-3 hover:bg-gray-50",
                onClick: handlePrevClick,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "mr-4",
                        src: "/assets/icons/left-arrow.svg",
                        alt: "",
                        width: 5.6,
                        height: 8
                    }),
                    "Prev"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative ml-1 flex h-full items-center rounded-lg border-gray-150 bg-gray-150",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute right-4 top-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/icons/dropdown.svg",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                        className: "h-full w-16 cursor-pointer appearance-none items-center space-x-3 bg-transparent p-2 px-4 outline-none",
                        value: currentPage,
                        onChange: handlePageSelect,
                        children: Array.from({
                            length: totalPages
                        }, (_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: index + 1,
                                children: index + 1
                            }, index + 1))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "text-sm",
                children: [
                    "of ",
                    totalPages
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "flex items-center px-4 py-3 hover:bg-gray-50",
                onClick: handleNextClick,
                children: [
                    "Next",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "ml-4",
                        src: "/assets/icons/right-arrow.svg",
                        alt: "",
                        width: 5.6,
                        height: 8
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Search = ({ onSearch, className, onClearSearch })=>{
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChange = (event)=>{
        setSearchQuery(event.target.value);
    };
    const handleKeyPress = (event)=>{
        if (event.key === "Enter") {
            onSearch(searchQuery);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchQuery === "") {
            onClearSearch();
        }
    }, [
        searchQuery
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-row items-center justify-end px-2 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/icons/search.svg",
                alt: "Search",
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "search",
                ref: inputRef,
                type: "text",
                value: searchQuery,
                onChange: handleChange,
                onKeyPress: handleKeyPress,
                className: "m-2 w-14 border-none bg-transparent focus:outline-none",
                placeholder: "Search"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-nested-ternary */ 

const SplitScreens = ({ firstScreen, secondScreen, firstIsLarger = false, secondIsLarger = false })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `grid grid-cols-1 gap-4 ${firstIsLarger ? "lg:grid-cols-9" : secondIsLarger ? "lg:grid-cols-7" : "lg:grid-cols-3"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${firstIsLarger ? "col-span-5" : secondIsLarger ? "col-span-3" : ""} hidden min-h-screen rounded-2xl border border-gray-200 bg-white p-6 lg:block`,
                children: firstScreen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${firstIsLarger ? "col-span-4" : secondIsLarger ? "col-span-4" : "col-span-2"} min-h-screen rounded-2xl border border-gray-200 bg-white p-6`,
                children: secondScreen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplitScreens);


/***/ }),

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ Tab),
/* harmony export */   m: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react/no-array-index-key */ /* eslint-disable react/no-unused-prop-types */ 

const Tab = ({ className = "", children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${className}`,
        children: children
    });
};
const TabHeadings = ({ horizontalScroll, slideTo, activeTabIndex, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex outline-none ${horizontalScroll ? "flex-nowrap" : "flex-wrap"} scrollbar justify-start overflow-x-auto`,
        children: children.map((tab, i)=>{
            const tabProps = tab.props;
            return tabProps.label && tabProps.label.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: `pl-3 pr-5 ${activeTabIndex === i ? "border-b-4 border-black pb-[0.8rem] pt-4" : "py-4"} m-0 rounded-none text-lg`,
                    onClick: ()=>slideTo(i),
                    children: tabProps.label
                })
            }, i) : null;
        })
    });
};
function Tabs({ activeIndex = 0, className = "", children, onTabChange, headerComponent, horizontalScroll = true, hasBorder = true }) {
    const [activeTabIndex, setActivetabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeIndex);
    const slideTo = (index)=>{
        // @ts-ignore
        const tabProps = children[index].props;
        if (onTabChange) onTabChange({
            activeTabIndex: index,
            activeTabLabel: tabProps.label,
            previousTabIndex: activeTabIndex
        });
        setActivetabIndex(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mb-8 flex flex-wrap items-center justify-between ${hasBorder && "mt-0 border-b border-gray-200"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabHeadings, {
                        horizontalScroll: horizontalScroll,
                        slideTo: slideTo,
                        activeTabIndex: activeTabIndex,
                        children: children
                    }),
                    headerComponent && headerComponent
                ]
            }),
            children[activeTabIndex]
        ]
    });
}


/***/ }),

/***/ 9401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ single_devotion)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./src/lib/helper.ts
var helper = __webpack_require__(3449);
// EXTERNAL MODULE: ./src/types/devotion.types.ts
var devotion_types = __webpack_require__(5564);
// EXTERNAL MODULE: ./src/components/common/Badge.tsx
var Badge = __webpack_require__(5327);
;// CONCATENATED MODULE: ./src/components/common/Card.tsx
/* eslint-disable no-nested-ternary */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ 




const Card = ({ devotion, handleClick })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid cursor-pointer grid-cols-8 items-start gap-4 font-dmSans md:flex-row",
        onClick: handleClick,
        children: [
            devotion?.createdAt && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-5 font-poppins text-sm font-light text-gray-600 md:col-span-2 lg:col-span-1",
                children: [
                    external_moment_default()(devotion.createdAt).format("MMM"),
                    " ",
                    external_moment_default()(devotion.createdAt).format("DD"),
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "md:text-xl",
                        children: external_moment_default()(devotion.createdAt).format("YYYY")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-span-7 flex flex-col gap-6 rounded-2xl border-2 border-gray-150 p-2 pr-4 hover:shadow-lg md:col-span-6 lg:col-span-7 lg:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative h-full w-full lg:h-40 lg:w-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: devotion.coverImage ? devotion.coverImage : "https://placehold.co/600x400?text=Grace",
                                    alt: "",
                                    className: "h-full w-full rounded-xl object-cover object-center"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "absolute bottom-2 left-2 font-raleway",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Badge/* Badge */.C, {
                                        title: devotion?.status === devotion_types/* EDevotionStatus */.G.DRAFT ? "Unapproved" : devotion?.status === devotion_types/* EDevotionStatus */.G.DELETED ? "Rejected" : (0,helper/* toTitleCase */.LF)(devotion.status),
                                        backgroundColor: devotion?.status === devotion_types/* EDevotionStatus */.G.PUBLISHED ? "bg-secondary-green" : devotion?.status === devotion_types/* EDevotionStatus */.G.DRAFT ? "bg-secondary-orange" : "bg-red-600"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex w-[100%] flex-col justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "justify-start font-dmSans text-xl font-semibold",
                                        children: devotion?.title.length > 10 ? `${devotion.title.slice(0, 10)}...` : devotion.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "font-poppins text-sm font-light text-gray-600",
                                        children: external_moment_default()(devotion?.createdAt).fromNow()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "max-h-10 overflow-hidden text-sm text-gray-850",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text-ellipsis",
                                    style: {
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2
                                    },
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML: {
                                        __html: devotion?.content
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "rounded-full bg-backgroundAccent px-2 py-1 text-center text-xs leading-4 text-white",
                                            children: devotion?.user?.name?.split("")[0]?.charAt(0) ?? "-"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-sm font-medium text-black",
                                            children: devotion?.user?.name
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/devotions/single-devotion.tsx



const SingleDevotion = ({ setShowViewSplitScreens, setSelectedDevotion, devotion, onClick })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Card, {
        devotion: devotion,
        handleClick: ()=>{
            if (setSelectedDevotion) {
                setSelectedDevotion(devotion);
            }
            if (onClick) {
                onClick();
            }
            setShowViewSplitScreens(true);
        }
    });
};
/* harmony default export */ const single_devotion = (SingleDevotion);


/***/ }),

/***/ 9139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qf: () => (/* binding */ getDevotionsByContributor),
/* harmony export */   R3: () => (/* binding */ updateDevotion),
/* harmony export */   Re: () => (/* binding */ deleteDevotion),
/* harmony export */   YC: () => (/* binding */ getDevotions),
/* harmony export */   aC: () => (/* binding */ addDevotion),
/* harmony export */   az: () => (/* binding */ getDevotionCategories)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function addDevotion(newDevotion) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/post/create", newDevotion);
        if (res.data.data?.id) {
            return res.data.data;
        }
        return res.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function updateDevotion(editedDevotion, id) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.put(`/post/update/${id}`, editedDevotion);
        if (res.data.data?.id) {
            return res.data.data;
        }
        return res.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function getDevotions() {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/post/dashboard");
        return res.data.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
    }
    return null;
}
async function getDevotionsByContributor(contributorId) {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`/post/all/${contributorId}`);
        return res.data.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
    }
    return null;
}
async function deleteDevotion(id) {
    try {
        return await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.delete(`/post/delete/${id}`);
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
        return null;
    }
}
async function getDevotionCategories() {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/devotion-categories/all");
        return res.data.data;
    } catch (err) {
        const error = err;
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(error)) {
            const data = error.response?.data;
            return data;
        }
    }
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const usePaginationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        currentPage: 1,
        totalPages: 1,
        setCurrentPage: (page)=>set(()=>({
                    currentPage: page
                }))
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePaginationStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EDevotionStatus)
/* harmony export */ });
var EDevotionStatus;
(function(EDevotionStatus) {
    EDevotionStatus["DRAFT"] = "DRAFT";
    EDevotionStatus["PUBLISHED"] = "PUBLISHED";
    EDevotionStatus["DELETED"] = "DELETED";
})(EDevotionStatus || (EDevotionStatus = {}));


/***/ })

};
;