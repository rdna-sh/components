"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const NCButton_1 = require("../../components/NCButton");
const fakeData_1 = require("../../utils/fakeData");
const meta = {
    title: "Novacap/Widgets/PopoverWithOptions",
    component: index_1.NCPopoverWithOptions,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    render: () => (react_1.default.createElement(index_1.NCPopoverWithOptions, { options: fakeData_1.popoverComOpcoesFakeData, triggerComponent: react_1.default.createElement(NCButton_1.NCButton, null, "Trigger") })),
};
//# sourceMappingURL=ncpopoverwithoptions.stories.js.map