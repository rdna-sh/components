"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const NCButton_1 = require("../NCButton");
const meta = {
    title: "Novacap/Components/Tooltip",
    component: index_1.NCTooltip,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Primary = {
    render: () => (react_1.default.createElement(index_1.NCTooltip, { label: "Label test", placement: "bottom", shouldWrapChildren: true },
        react_1.default.createElement(NCButton_1.NCButton, null, "Button test"))),
};
//# sourceMappingURL=ncstooltip.stories.js.map