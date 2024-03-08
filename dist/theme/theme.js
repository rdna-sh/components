"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novaCapTheme = void 0;
const react_1 = require("@chakra-ui/react");
exports.novaCapTheme = (0, react_1.extendTheme)({
    fonts: {
        heading: `'Roboto', 'Inter', 'Open Sans', sans-serif`,
        body: `'Roboto', 'Inter', Arial, sans-serif`,
    },
    colors: {
        blue: {
            100: "#bdd7f5",
            200: "#95bdea",
            300: "#6ca2e0",
            400: "#4488d6",
            500: "#2c6ebe",
            600: "#215694",
            700: "#16406F",
            800: "#092542",
            900: "#000d1b",
        },
        yellow: {
            500: "#F8BB0E",
        },
        primary: {
            100: "#bdd7f5",
            200: "#95bdea",
            300: "#6ca2e0",
            400: "#4488d6",
            500: "#2c6ebe",
            600: "#215694",
            700: "#16406F",
            800: "#092542",
            900: "#000d1b",
        },
        lightBlue: {
            500: "#45B5D8",
        },
        headerNovacap: {
            500: "#2E638B",
        },
        disabled: {
            500: "#495057",
        },
        pageTitle: {
            500: "#3A3A3A",
        },
        tableTextBody: {
            500: "#3A3A3A",
        },
        tableBorder: {
            500: "#D9D9D9",
        },
        tableHeaderBackground: {
            500: "#EAE8E8",
        },
        backgroundModalContent: {
            500: "#FBFBFB",
        },
        popoverTextIcon: {
            500: "#808589",
        },
    },
    radii: {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
    },
});
//# sourceMappingURL=theme.js.map