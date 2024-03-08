"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCAlert = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCAlert = (_a) => {
    var { message, type = "success" } = _a, rest = __rest(_a, ["message", "type"]);
    return (react_1.default.createElement(react_2.Alert, Object.assign({ status: type, borderRadius: "0.3rem" }, rest),
        react_1.default.createElement(react_2.AlertIcon, null),
        message));
};
exports.NCAlert = NCAlert;
//# sourceMappingURL=index.js.map