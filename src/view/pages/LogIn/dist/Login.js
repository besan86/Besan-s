"use strict";
exports.__esModule = true;
require("./style.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Login() {
    return (react_1["default"].createElement("div", { className: 'Login' },
        react_1["default"].createElement("div", { className: 'buttons' },
            react_1["default"].createElement("div", { className: 'inside' },
                "Username: ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("input", { type: "text" }),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                "Password: ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("input", { type: "password" }),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Home" }, "Login"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Home" }, "Cancle"))),
        react_1["default"].createElement("div", { className: 'backHome' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/Home" }, " Home"))));
}
exports["default"] = Login;
