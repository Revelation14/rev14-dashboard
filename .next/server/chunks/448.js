"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 5495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);



const AppUsageChart = ({ data })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_2__.AreaChart, {
            data: data,
            margin: {
                top: 10,
                right: 10,
                left: 0,
                bottom: 0
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {
                    vertical: false,
                    stroke: "#EEEEEE"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {
                    axisLine: false,
                    tickLine: false,
                    dataKey: "name"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {
                    axisLine: false,
                    tickLine: false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                    contentStyle: {
                        backgroundColor: "#DF9A57",
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "10px",
                        color: "#FFFFFF",
                        boxShadow: "0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06)"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.Area, {
                    type: "monotone",
                    dataKey: "uv",
                    stroke: "black",
                    strokeWidth: 2,
                    fill: "url(#colorGradient)"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "colorGradient",
                        gradientTransform: "rotate(180)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0%",
                                stopColor: "#0000001A"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "141.68%",
                                stopColor: "#FFFFFF00"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppUsageChart);


/***/ }),

/***/ 6131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);



const DataCard = ({ title, number, data })=>{
    const [isPositiveChange, setIsPositiveChange] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [comparisonText, setComparisonText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const statusColor = isPositiveChange ? "#06AA8D" : "#D44333";
    const lineColor = isPositiveChange ? "#06AA8D" : "#D44333";
    const arrowImageSource = isPositiveChange ? "/assets/icons/arrow_positive.png" : "/assets/icons/arrow_negative.png";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const todayIndex = data.findIndex((user)=>{
            const joinedDate = new Date(user.joinedAt) || new Date(user.createdAt || "");
            const today = new Date();
            return joinedDate.getDate() === today.getDate() && joinedDate.getMonth() === today.getMonth() && joinedDate.getFullYear() === today.getFullYear();
        });
        const yesterdayIndex = todayIndex - 1;
        if (yesterdayIndex < 0) {
            setIsPositiveChange(true);
        }
        const todayUsers = data[todayIndex];
        const yesterdayUsers = data[yesterdayIndex];
        const todayCount = todayUsers?.length || 0;
        const yesterdayCount = yesterdayUsers?.length || 0;
        const diff = todayCount - yesterdayCount;
        const percentage = (diff / yesterdayCount * 100).toFixed(2);
        if (diff > 0) {
            setComparisonText(`+${percentage}% (${diff} users increased)`);
        } else if (diff < 0) {
            setComparisonText(`-${Math.abs(Number(percentage))}% (${Math.abs(diff)} users fell short)`);
        } else {
            setComparisonText("0");
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-4 flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-6 md:m-4 md:flex-row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-start gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-sm font-light leading-6",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-2xl font-normal leading-6",
                        children: number
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "flex flex-row items-center text-sm font-normal leading-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: arrowImageSource,
                                alt: "",
                                className: "mr-1 h-3.5 w-3.5"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    color: statusColor
                                },
                                children: [
                                    comparisonText,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-2 text-black",
                                children: " since yesterday"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-24 w-full max-w-lg md:w-44",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {
                        data: data,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_2__.Line, {
                            type: "monotone",
                            dataKey: "pv",
                            stroke: lineColor,
                            strokeWidth: 1
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataCard);


/***/ }),

/***/ 3448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5290);
/* harmony import */ var _components_common_DatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8917);
/* harmony import */ var _components_insights_AppUsageChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5495);
/* harmony import */ var _components_insights_DataCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6131);
/* harmony import */ var _layouts_dashboard_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(606);
/* harmony import */ var _components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6416);
/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8304);
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard_Layout__WEBPACK_IMPORTED_MODULE_8__, _services_stats_service__WEBPACK_IMPORTED_MODULE_11__]);
([_layouts_dashboard_Layout__WEBPACK_IMPORTED_MODULE_8__, _services_stats_service__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Insights = ()=>{
    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleChange = (e)=>{
        setSelectedDate(e.value.toString());
    };
    const getCurrentDate = ()=>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate().toString().padStart(2, "0");
        const currentDateFormatted = `${year}-${month}-${day}`;
        return currentDateFormatted;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSelectedDate(getCurrentDate());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLoading(true);
        (0,_services_stats_service__WEBPACK_IMPORTED_MODULE_11__/* .fetchStatsService */ .f)().then((data)=>{
            setStats(data);
            setLoading(false);
        }).catch((err)=>{
            setErrorMsg(err);
            setLoading(false);
        });
        (0,_services_stats_service__WEBPACK_IMPORTED_MODULE_11__/* .fetchUsersService */ .h)().then((data)=>{
            setUsers(data);
            setLoading(false);
        }).catch((err)=>{
            setErrorMsg(err);
            setLoading(false);
        });
    }, []);
    const usageData = [
        {
            name: "1",
            uv: 100
        },
        {
            name: "5",
            uv: 300
        },
        {
            name: "15",
            uv: 200
        },
        {
            name: "20",
            uv: 400
        },
        {
            name: "25",
            uv: 500
        },
        {
            name: "30",
            uv: 350
        }
    ];
    const headers = [
        {
            label: "Names",
            key: "name"
        },
        {
            label: "Phone number",
            key: "phoneNumber"
        },
        {
            label: "Email",
            key: "email"
        },
        {
            label: "Gender",
            key: "gender"
        },
        {
            label: "Location",
            key: "location"
        }
    ];
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const exportToXLS = (myData, fileName)=>{
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(headers, {
            header: [
                "name",
                "phoneNumber",
                "email",
                "gender",
                "location"
            ],
            skipHeader: true
        });
        xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.sheet_add_json(ws, myData, {
            header: [
                "name",
                "phoneNumber",
                "email",
                "gender",
                "location"
            ],
            skipHeader: false
        });
        const wb = {
            Sheets: {
                data: ws
            },
            SheetNames: [
                "data"
            ]
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(wb, {
            bookType: "xlsx",
            type: "array"
        });
        const data = new Blob([
            excelBuffer
        ], {
            type: fileType
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1___default().saveAs(data, fileName + fileExtension);
    };
    // const chartData = [
    //   { name: 'Group A', value: 400 },
    //   { name: 'Group B', value: 300 },
    //   { name: 'Group C', value: 300 },
    // ];
    const rate = 2;
    const isPositiveChange = rate > 0;
    const rateColor = isPositiveChange ? "#06AA8D" : "#D44333";
    const arrowImageSource = isPositiveChange ? "/assets/icons/arrow_positive.png" : "/assets/icons/arrow_negative.png";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "right-4 my-4 flex flex-col items-center justify-between rounded-lg bg-gold p-8 md:m-4 md:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col items-center gap-16 md:w-1/2 md:flex-row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/insights-hand.png",
                                    alt: "",
                                    width: 75,
                                    height: 76
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-2xl font-normal leading-9 text-white",
                                            children: "Need your data?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm font-light leading-5 text-white",
                                            children: "Download an Excel sheet containing all your data to do further analysis and visualization."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: "/assets/icons/export.png",
                            text: "Export Data",
                            backgroundColor: "white",
                            color: "gold",
                            className: "text-gold",
                            handleClick: ()=>{
                                exportToXLS(users.data.map((user)=>{
                                    return {
                                        name: user.name,
                                        phoneNumber: user.phoneNumber,
                                        email: user.email,
                                        gender: user.gender,
                                        location: user.location
                                    };
                                }), "Users_Infomation_xlsx");
                            }
                        })
                    ]
                }),
                stats.users ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full flex-col md:flex-row",
                    children: [
                        errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            errorMessage: errorMsg,
                            setErrorMessage: setErrorMsg
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_insights_DataCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Active Users",
                            number: stats.users?.activeUsers?.length.toString() || "0",
                            data: stats.users?.activeUsers
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_insights_DataCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Published Devotionals",
                            number: stats.devotions?.publishedDevotions?.length.toString() || "0",
                            data: stats.devotions?.publishedDevotions
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_insights_DataCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Draft Devotionals",
                            number: stats.devotions?.draftedDevotions?.length.toString() || "0",
                            data: stats.devotions?.draftedDevotions
                        })
                    ]
                }) : null,
                isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex h-screen w-full items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        className: "h-5 w-5"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex w-[98%] flex-col items-start justify-between gap-4 md:m-4 md:flex-row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-gray-200 bg-white p-8 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-start justify-between gap-6 md:flex-row md:gap-56",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-2xl font-normal",
                                        children: "App's Usage"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col items-center gap-1 md:flex-row md:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "flex flex-row items-center text-sm font-light text-[#737B8B]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "flex flex-row items-center pr-2",
                                                        style: {
                                                            color: rateColor
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: arrowImageSource,
                                                                alt: "",
                                                                className: "mr-2 h-3.5 w-3.5"
                                                            }),
                                                            rate,
                                                            "%"
                                                        ]
                                                    }),
                                                    " ",
                                                    "compared to last week"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_DatePicker__WEBPACK_IMPORTED_MODULE_5__/* .DatePicker */ .M, {
                                                name: "selectedDate",
                                                value: selectedDate,
                                                handleChange: handleChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[300px]  md:h-[269px] md:w-[95%]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_insights_AppUsageChart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    data: usageData
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insights);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ fetchStatsService),
/* harmony export */   h: () => (/* binding */ fetchUsersService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _lib_axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function fetchStatsService() {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/stats/all");
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
async function fetchUsersService() {
    try {
        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("/user/all/users", {});
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;