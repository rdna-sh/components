"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCFooter = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCFooter = ({ containerFooterProps, logoLeft, logoRight }) => {
    return (react_1.default.createElement(react_2.Box, Object.assign({ bg: "white", padding: 4, as: "footer" }, containerFooterProps),
        react_1.default.createElement(react_2.Container, { as: react_2.Stack, maxW: "100%", direction: { base: "column", md: "row" }, spacing: 4, justify: { base: "center", md: "space-between" }, align: { base: "center", md: "center" } },
            react_1.default.createElement(react_2.Image, { boxSize: "72px", objectFit: "contain", src: logoLeft, alt: "Imagem GDF" }),
            react_1.default.createElement(react_2.Text, { fontSize: "sm", color: "gray.600", textAlign: "center" },
                "Companhia Urbanizadora da Nova Capital do Brasil - Governo do Distrito Federal NOVACAP",
                react_1.default.createElement("br", null),
                "Setor de \u00C1reas P\u00FAblicas - Lote B - CEP: 71.215-000 Telefone: 3403-2300"),
            react_1.default.createElement(react_2.Image, { maxWidth: "100%", width: "210px", objectFit: "contain", src: logoRight, alt: "Imagem Novacap" }))));
};
exports.NCFooter = NCFooter;
//# sourceMappingURL=index.js.map