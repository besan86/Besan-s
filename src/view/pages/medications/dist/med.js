"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./med.scss");
var Card_1 = require("./view/components/card/Card");
var medications = [
    {
        name: "RashAid",
        id: 1,
        price: 90,
        img: "https://beleafpharma.co.il/wp-content/uploads/2020/02/Artboard-13-300x300.jpg"
    },
    {
        name: "skinburn",
        id: 2,
        price: 45,
        img: "https://beleafpharma.co.il/wp-content/uploads/2021/05/WhatsApp-Image-2021-04-21-at-18.08.53-300x300.jpeg"
    },
    {
        name: "laserrash",
        id: 3,
        price: 79,
        img: "https://beleafpharma.co.il/wp-content/uploads/2020/08/000-1-300x300.jpg"
    },
];
function App() {
    var _a = react_1.useState(0), genralCounter = _a[0], setGeneralCounter = _a[1];
    var _b = react_1.useState({ text: "", phone: "" }), info = _b[0], setInfo = _b[1];
    function handleTextInput(ev) {
        console.log(ev.target.value);
        setInfo(__assign(__assign({}, info), { text: ev.target.value }));
    }
    function handlePhoneInput(ev) {
        setInfo(__assign(__assign({}, info), { phone: ev.target.value }));
    }
    function handleSubmit(ev) {
        ev.preventDefault();
        console.dir(ev);
        var form = ev.target;
        var obj = {};
        for (var i = 0; i < form.length; i++) {
            console.log(form[i].value, form[i].name, form[i].type);
            if (form[i].type !== "submit") {
                obj[form[i].name] = form[i].value;
            }
        }
        console.log(obj);
    }
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("h1", null,
                "Number of counts:",
                genralCounter),
            React.createElement("h2", null, "Enter info"),
            React.createElement("input", { type: "text", name: "", id: "", onBlur: handleTextInput }),
            React.createElement("input", { type: "text", placeholder: "phone number", onBlur: handlePhoneInput }),
            React.createElement("p", null, info.text),
            React.createElement("p", null, info.phone),
            React.createElement("h2", null, "Form"),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("input", { type: "text", name: "name" }),
                React.createElement("input", { type: "text", name: "phone", placeholder: "phone number" }),
                React.createElement("input", { type: "email", name: "email", placeholder: "email" }),
                React.createElement("button", { type: "submit" })),
            React.createElement("h2", null, "Medications"),
            medication.map(function (medication, index) {
                var name = medication.name, price = medication.price, img = medication.img, id = medication.id; //deconstractor
                return (React.createElement(Card_1["default"], { key: index, info: { name: name, Price: Price, img: img, id: id }, setGeneralCounter: setGeneralCounter, genralCounter: genralCounter }));
            }))));
}
exports["default"] = Med;
