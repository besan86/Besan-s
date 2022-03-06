"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./style.scss");
var react_router_dom_1 = require("react-router-dom");
function About() {
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement("h1", null, " About Our company  "),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/Home" }, " Home")));
}
exports["default"] = About;
