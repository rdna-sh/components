"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCCard = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCCard = ({ children, titleProps, containerProps, title, contentProps }) => {
    return (react_1.default.createElement(react_2.Box, Object.assign({ boxShadow: "md", borderRadius: "1rem" }, containerProps),
        react_1.default.createElement(react_2.Box, Object.assign({ color: "white", bg: "blue.700", display: "flex", justifyContent: "center", alignItems: "center", paddingY: "0.8rem", fontFamily: "Roboto", fontSize: "1rem", borderTopRadius: "10px" }, titleProps), title),
        react_1.default.createElement(react_2.Box, Object.assign({ bg: "white", padding: 4, borderBottomRadius: "10px" }, contentProps), children)));
};
exports.NCCard = NCCard;
//# sourceMappingURL=index.js.map