"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCSpinner = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCSpinner = (props) => {
    return react_1.default.createElement(react_2.Spinner, Object.assign({ thickness: "0.35rem", speed: "0.65s", emptyColor: "gray.200", color: "blue.700", size: "xl" }, props));
};
exports.NCSpinner = NCSpinner;
//# sourceMappingURL=index.js.map