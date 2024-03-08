"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLink = void 0;
const react_1 = __importDefault(require("react"));
const NCButton_1 = require("../../../components/NCButton");
const NavLink = ({ navbarItem }) => {
    return (react_1.default.createElement(NCButton_1.NCButton, { onClick: () => navbarItem.onClick(navbarItem), variant: "ghost", colorScheme: "blue", rounded: "md", color: navbarItem.activeRoute ? "yellow.500" : "white", _active: { opacity: "0.5" }, isDisabled: navbarItem.disabled, leftIcon: navbarItem.icon ? react_1.default.createElement(navbarItem.icon, null) : undefined, fontFamily: "Roboto", display: "inline-block", fontSize: "md", fontWeight: "600", borderBottomColor: navbarItem.activeRoute ? "yellow.500" : "transparent", borderBottomWidth: "1px", borderTopWidth: "1px", borderTopColor: "transparent", borderRadius: 0, marginX: 0 }, navbarItem.title));
};
exports.NavLink = NavLink;
//# sourceMappingURL=index.js.map