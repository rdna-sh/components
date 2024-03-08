"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const fakeData_1 = require("../../utils/fakeData");
const index_1 = require("./index");
const fruitList = (0, fakeData_1.gerarDadosFicticiosDeFrutas)();
const meta = {
    title: "Novacap/Components/Select",
    component: index_1.NCSelect,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    render: () => (react_1.default.createElement(index_1.NCSelect, null, fruitList.map((fruit) => (react_1.default.createElement("option", { key: fruit.value, value: fruit.value }, fruit.nome))))),
};
//# sourceMappingURL=ncselect.stories.js.map