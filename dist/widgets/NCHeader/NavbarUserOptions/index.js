"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarUserOptions = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const NavbarUserOptions = ({ profilePicture, profilePicturePlaceholder, profileOptions, }) => {
    return (react_1.default.createElement(react_2.Menu, null,
        react_1.default.createElement(react_2.MenuButton, { as: react_2.Button, rounded: "full", variant: "link", cursor: "pointer", minW: 0 },
            react_1.default.createElement(react_2.Flex, { justifyContent: "center", alignItems: "center", gap: 2 },
                react_1.default.createElement(react_2.Avatar, { size: { base: "sm", md: "md" }, src: profilePicture ? profilePicture : profilePicturePlaceholder }),
                react_1.default.createElement(md_1.MdOutlineSettings, { size: 28, color: "white" }))),
        react_1.default.createElement(react_2.MenuList, { alignItems: "center", padding: 0 }, profileOptions.map((option) => (react_1.default.createElement(react_2.MenuItem, { isDisabled: option.disabled, key: option.title, borderRadius: "0.3rem", _hover: { bg: "blue.700", color: "white" }, _active: { bg: "blue.700", color: "white" }, onClick: () => option.onclick(option), color: "disabled.500" },
            react_1.default.createElement(react_2.Flex, { justifyContent: "center", alignItems: "center", gap: 2, px: 5, py: 2 },
                option.icon ? react_1.default.createElement(react_2.Icon, { size: "md", as: option.icon }) : null,
                react_1.default.createElement(react_2.Box, { fontFamily: "Roboto", fontSize: "md", fontWeight: "500" }, option.title))))))));
};
exports.NavbarUserOptions = NavbarUserOptions;
//# sourceMappingURL=index.js.map