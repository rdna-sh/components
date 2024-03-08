"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverLinearGradient = exports.LinearGradient = exports.ButtonWithOutlineIcon = exports.ButtonWithIcon = exports.VarianteOutline = exports.Loading = exports.SolidVariant = exports.Small = exports.Large = exports.DarkBlue = exports.LightBlue = exports.YellowButtonWithDarkBlueText = exports.Yellow = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const icons_1 = require("@chakra-ui/icons");
const meta = {
    title: "Novacap/Components/Button",
    component: index_1.NCButton,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Primary = {
    render: () => react_1.default.createElement(index_1.NCButton, { colorScheme: "blue" }, "Button test"),
};
exports.Yellow = {
    render: () => react_1.default.createElement(index_1.NCButton, { colorScheme: "yellow" }, "Button test"),
};
exports.YellowButtonWithDarkBlueText = {
    render: () => (react_1.default.createElement(index_1.NCButton, { colorScheme: "yellow", color: "blue.700" }, "Button test")),
};
exports.LightBlue = {
    args: {
        children: "Light blue",
        colorScheme: "lightBlue",
    },
};
exports.DarkBlue = {
    args: {
        children: "Dark blue",
        colorScheme: "blue",
        background: "blue.700",
        color: "white",
    },
};
exports.Large = {
    args: {
        size: "lg",
        colorScheme: "blue",
        children: "Button test",
    },
};
exports.Small = {
    args: {
        size: "sm",
        children: "Button test",
        colorScheme: "blue",
    },
};
exports.SolidVariant = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        variant: "solid",
    },
};
exports.Loading = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        isLoading: true,
        loadingText: "Loading",
    },
};
exports.VarianteOutline = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        variant: "outline",
    },
};
exports.ButtonWithIcon = {
    render: () => (react_1.default.createElement(index_1.NCButton, { leftIcon: react_1.default.createElement(icons_1.PhoneIcon, null), colorScheme: "yellow", color: "blue.700" }, "Settings")),
};
exports.ButtonWithOutlineIcon = {
    render: () => (react_1.default.createElement(index_1.NCButton, { leftIcon: react_1.default.createElement(icons_1.PhoneIcon, null), colorScheme: "blue", variant: "outline" }, "Settings")),
};
exports.LinearGradient = {
    args: {
        bgGradient: "linear(to-r, blue.700, yellow.500)",
        children: "Button test",
        size: "lg",
    },
};
exports.HoverLinearGradient = {
    args: {
        _hover: { bgGradient: "linear(to-r, blue.700, yellow.500)" },
        children: "Button test",
        colorScheme: "blue",
    },
};
//# sourceMappingURL=ncbutton.stories.js.map