"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCInput = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCInput = (props) => {
    return (react_1.default.createElement(react_2.Input, Object.assign({ focusBorderColor: "yellow.500", borderColor: "blue.700", borderWidth: "2px", _focus: { borderWidth: "1px" } }, props)));
};
exports.NCInput = NCInput;
//# sourceMappingURL=index.js.map