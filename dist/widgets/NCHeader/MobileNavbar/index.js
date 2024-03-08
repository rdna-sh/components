"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavbar = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
const MobileNavbar = ({ navbarItems }) => {
    return (react_1.default.createElement(react_2.Stack, { bg: "headerNovacap.500", p: 4, display: { md: "none" } }, navbarItems.map((navItem, index) => (react_1.default.createElement(MobileNavItem, { key: index, mobileNavItem: navItem })))));
};
exports.MobileNavbar = MobileNavbar;
const MobileNavItem = ({ mobileNavItem }) => {
    var _a;
    const { isOpen, onToggle } = (0, react_2.useDisclosure)();
    return (react_1.default.createElement(react_2.Stack, { spacing: 4, onClick: mobileNavItem.children && onToggle },
        react_1.default.createElement(react_2.Box, { py: 2, as: "a", onClick: () => mobileNavItem.onClick(mobileNavItem), display: "flex", justifyContent: "space-between", alignItems: "center", _hover: {
                textDecoration: "none",
            } },
            react_1.default.createElement(react_2.Text, { fontWeight: 600, color: "white" }, mobileNavItem.title),
            mobileNavItem.children.length > 0 && (react_1.default.createElement(react_2.Icon, { color: "white", as: icons_1.ChevronDownIcon, transition: "all .25s ease-in-out", transform: isOpen ? "rotate(180deg)" : "", w: 6, h: 6 }))),
        react_1.default.createElement(react_2.Collapse, { in: isOpen, animateOpacity: true, style: { marginTop: "0!important" } },
            react_1.default.createElement(react_2.Stack, { mt: 2, pl: 4, borderLeft: 1, borderStyle: "solid", borderColor: "yellow.500", align: "start" }, (_a = mobileNavItem.children) === null || _a === void 0 ? void 0 : _a.map((child, index) => (react_1.default.createElement(react_2.Box, { color: "white", fontFamily: "Roboto", as: "a", key: index, py: 2, onClick: () => child.onClick(child) }, child.title)))))));
};
//# sourceMappingURL=index.js.map