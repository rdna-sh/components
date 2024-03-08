"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopNavbar = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const NCButton_1 = require("../../../components/NCButton");
const DesktopNavbar = ({ desktopNavbarItems }) => {
    return (react_2.default.createElement(react_1.Stack, { direction: "row", spacing: { base: 0, lg: 4 }, display: { base: "none", md: "flex" } }, desktopNavbarItems.map((navItem, index) => (react_2.default.createElement(react_1.Box, { key: index },
        react_2.default.createElement(react_1.Popover, { trigger: "hover" },
            react_2.default.createElement(react_1.PopoverTrigger, null,
                react_2.default.createElement(react_1.Box, null,
                    react_2.default.createElement(NCButton_1.NCButton, { onClick: () => navItem.onClick(navItem), variant: "ghost", colorScheme: "blue", rounded: "md", color: navItem.activeRoute ? "yellow.500" : "white", _active: { opacity: "0.5" }, _hover: { opacity: "1" }, isDisabled: navItem.disabled, leftIcon: navItem.icon ? react_2.default.createElement(navItem.icon, null) : undefined, fontFamily: "Roboto", display: "inline-block", fontSize: { base: "0.8rem", lg: "md" }, size: { base: "sm", md: "sm", lg: "md" }, fontWeight: "600", borderBottomColor: navItem.activeRoute ? "yellow.500" : "transparent", borderBottomWidth: "1px", borderTopWidth: "1px", borderTopColor: "transparent", borderRadius: 0, marginX: 0 }, navItem.title))),
            navItem.children.length > 0 && !navItem.disabled && (react_2.default.createElement(react_1.PopoverContent, { border: 0, boxShadow: "xl", bg: "white", borderTopRadius: "5px" },
                react_2.default.createElement(react_1.Stack, null, navItem.children.map((child) => (react_2.default.createElement(DesktopSubNav, { key: child.title, desktopSubNavbarItem: child }))))))))))));
};
exports.DesktopNavbar = DesktopNavbar;
const DesktopSubNav = ({ desktopSubNavbarItem }) => {
    return (react_2.default.createElement(react_1.Box, { onClick: () => desktopSubNavbarItem.onClick(desktopSubNavbarItem), role: "group", display: "block", p: 2, borderTopRadius: "5px", _hover: { bg: "blue.700" }, fontWeight: "500", cursor: "pointer" },
        react_2.default.createElement(react_1.Stack, { direction: "row", align: "center", justifyContent: "center" },
            react_2.default.createElement(react_1.Text, { fontFamily: "Roboto", fontSize: "0.9rem", color: "disabled.500", transition: "all .3s ease", _groupHover: { color: "white" }, fontWeight: 500 }, desktopSubNavbarItem.title))));
};
//# sourceMappingURL=index.js.map