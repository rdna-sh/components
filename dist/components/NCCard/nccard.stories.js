"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const meta = {
    title: "Novacap/Components/Card",
    component: index_1.NCCard,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Primary = {
    render: () => (react_1.default.createElement(index_1.NCCard, { title: "Test title" },
        react_1.default.createElement("h2", null, "Test content"),
        react_1.default.createElement("h2", null, "Test content"),
        react_1.default.createElement("h2", null, "Test content"),
        react_1.default.createElement("h2", null, "Test content"),
        react_1.default.createElement("h2", null, "Test content"))),
};
//# sourceMappingURL=nccard.stories.js.map