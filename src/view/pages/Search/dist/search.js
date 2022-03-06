"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.scss");
var react_router_dom_1 = require("react-router-dom");
var Search = function () {
    return (react_1["default"].createElement("div", { className: 'SearchRes' },
        react_1["default"].createElement("div", null,
            "Search Results: ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            "List Of medication:",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, " Home "),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null))));
};
exports["default"] = Search;
