"use strict";
exports.__esModule = true;
require("./Homestyle.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    return (react_1["default"].createElement("div", { className: 'Homepage' },
        react_1["default"].createElement("div", { className: 'buttons' },
            "welcome to HomePage ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/about" }, " About "),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            "Name Of disease ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "text" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            "  ",
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/search" }, "Search"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null)),
        react_1["default"].createElement("div", { className: 'login' },
            " ",
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/login" }, "Login"),
            " ")));
};
exports["default"] = Home;
