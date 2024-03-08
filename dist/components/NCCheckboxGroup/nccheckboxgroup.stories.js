"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const NCCheckbox_1 = require("../NCCheckbox");
const react_2 = require("@chakra-ui/react");
const meta = {
    title: "Novacap/Components/CheckboxGroup",
    component: index_1.NCCheckboxGroup,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    render: () => (react_1.default.createElement(index_1.NCCheckboxGroup, null,
        react_1.default.createElement(react_2.Stack, { spacing: [1, 5], direction: ["column", "row"] },
            react_1.default.createElement(NCCheckbox_1.NCCheckbox, { value: "naruto" }, "Naruto"),
            react_1.default.createElement(NCCheckbox_1.NCCheckbox, { value: "sasuke" }, "Sasuke"),
            react_1.default.createElement(NCCheckbox_1.NCCheckbox, { value: "kakashi" }, "Kakashi")))),
};
//# sourceMappingURL=nccheckboxgroup.stories.js.map