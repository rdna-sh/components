"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCHeader = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
const MobileNavbar_1 = require("./MobileNavbar");
const DesktopNavbar_1 = require("./DesktopNavbar");
const NavbarUserOptions_1 = require("./NavbarUserOptions");
const NCHeader = ({ navbarItems = [], headerProps, logoHeader, profilePicturePlaceholder, profilePicture, profileOptions = [], }) => {
    const { isOpen, onToggle } = (0, react_2.useDisclosure)();
    return (react_1.default.createElement(react_2.Box, Object.assign({ as: "header", bg: "headerNovacap.500" }, headerProps),
        react_1.default.createElement(react_2.Flex, { color: "white", minH: "60px", py: { base: 2 }, px: { base: 4 }, align: "center", display: "flex", alignItems: "center", justifyContent: { base: "center", md: "flex-start" } },
            react_1.default.createElement(react_2.Flex, { flex: { base: 1, md: "auto" }, ml: { base: -2 }, display: { base: "flex", md: "none" } },
                react_1.default.createElement(react_2.IconButton, { onClick: onToggle, icon: isOpen ? react_1.default.createElement(icons_1.CloseIcon, { w: 3, h: 3 }) : react_1.default.createElement(icons_1.HamburgerIcon, { w: 5, h: 5 }), variant: "ghost", color: "white", _active: { opacity: 0.5, bg: "transparent" }, _hover: { bg: "transparent" }, "aria-label": "Toggle Navigation" })),
            react_1.default.createElement(react_2.Box, null,
                react_1.default.createElement("img", { src: logoHeader, alt: "Logo Novacap" })),
            react_1.default.createElement(react_2.HStack, { alignItems: "center", justifyContent: "center", flex: 1 },
                react_1.default.createElement(DesktopNavbar_1.DesktopNavbar, { desktopNavbarItems: navbarItems })),
            react_1.default.createElement(react_2.Flex, { alignItems: "center" },
                react_1.default.createElement(NavbarUserOptions_1.NavbarUserOptions, { profilePicturePlaceholder: profilePicturePlaceholder, profilePicture: profilePicture, profileOptions: profileOptions }))),
        react_1.default.createElement(react_2.Collapse, { in: isOpen, animateOpacity: true },
            react_1.default.createElement(MobileNavbar_1.MobileNavbar, { navbarItems: navbarItems }))));
};
exports.NCHeader = NCHeader;
//# sourceMappingURL=index.js.map