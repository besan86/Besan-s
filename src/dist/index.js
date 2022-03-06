"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var about_1 = require("./view/pages/About/about");
var Home_1 = require("./view/pages/HomePage/Home");
var search_1 = require("./view/pages/Search/search");
var App_1 = require("./App");
var react_dom_1 = require("react-dom");
var Login_1 = require("./view/pages/LogIn/Login");
var rootElement = document.getElementById("root");
react_dom_1.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "about", element: react_1["default"].createElement(about_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "home", element: react_1["default"].createElement(Home_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/search", element: react_1["default"].createElement(search_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "App", element: react_1["default"].createElement(App_1["default"], null) }))), rootElement);
