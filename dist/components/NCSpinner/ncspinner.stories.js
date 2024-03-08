"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DifferentSize = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const react_2 = require("@chakra-ui/react");
const meta = {
    title: "Novacap/Components/Spinner",
    component: index_1.NCSpinner,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.DifferentSize = {
    render: () => (react_1.default.createElement(react_2.Stack, { direction: "row", spacing: 4 },
        react_1.default.createElement(index_1.NCSpinner, { size: "xs" }),
        react_1.default.createElement(index_1.NCSpinner, { size: "sm" }),
        react_1.default.createElement(index_1.NCSpinner, { size: "md" }),
        react_1.default.createElement(index_1.NCSpinner, { size: "lg" }),
        react_1.default.createElement(index_1.NCSpinner, { size: "xl" }))),
};
//# sourceMappingURL=ncspinner.stories.js.map