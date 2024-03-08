"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCTablePagination = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
const NCSelect_1 = require("../../NCSelect");
const NCTablePagination = ({ onPageChange, pageIndex = 0, total = 0, rowsPerPage = 10, onChangeRowsPerPage, rowsPerPageOptions = [5, 10, 20], rowsPerPageLabel = "Registros por página:", previousPageFeedbackLabel = "Página Anterior", nextPageFeedbackLabel = "Próxima Página", labelRowsPerPage = "Página :currentPage: de :lastPage:", }) => {
    const canPreviousPage = (0, react_1.useMemo)(() => {
        return pageIndex > 0;
    }, [pageIndex]);
    const canNextPage = (0, react_1.useMemo)(() => {
        const itemsShowedUntilTheMoment = (pageIndex + 1) * rowsPerPage;
        return itemsShowedUntilTheMoment < total;
    }, [pageIndex, rowsPerPage]);
    const lastPage = (0, react_1.useMemo)(() => {
        return Math.ceil(total / rowsPerPage);
    }, [pageIndex, rowsPerPage]);
    return (react_1.default.createElement(react_2.Flex, { justifyContent: { base: "space-between", md: "flex-end" }, m: 4, alignItems: { base: "flex-start", md: "center" }, gap: 5 },
        react_1.default.createElement(react_2.Flex, { alignItems: { md: "center" }, gap: { base: 1, md: 2 }, direction: { base: "column", md: "row" } },
            react_1.default.createElement(react_2.Text, { fontSize: "sm" }, rowsPerPageLabel),
            react_1.default.createElement(NCSelect_1.NCSelect, { w: 32, size: "sm", borderRadius: "0.5rem", value: rowsPerPage, onChange: (e) => onChangeRowsPerPage(e.target.value) }, rowsPerPageOptions.map((pageSize) => (react_1.default.createElement("option", { key: pageSize, value: pageSize }, pageSize))))),
        react_1.default.createElement(react_2.Flex, { alignItems: "center", gap: 2 },
            react_1.default.createElement(react_2.Tooltip, { label: previousPageFeedbackLabel },
                react_1.default.createElement(react_2.IconButton, { onClick: () => onPageChange(pageIndex - 1), isDisabled: !canPreviousPage, "aria-label": "", icon: react_1.default.createElement(icons_1.ChevronLeftIcon, { h: 6, w: 6 }), size: "sm" })),
            react_1.default.createElement(react_2.Text, { flexShrink: "0", fontSize: "sm" }, labelRowsPerPage
                .replace(":currentPage:", String(pageIndex + 1))
                .replace(":lastPage:", String(lastPage))),
            react_1.default.createElement(react_2.Tooltip, { label: nextPageFeedbackLabel },
                react_1.default.createElement(react_2.IconButton, { onClick: () => onPageChange(pageIndex + 1), isDisabled: !canNextPage, "aria-label": "", size: "sm", icon: react_1.default.createElement(icons_1.ChevronRightIcon, { h: 6, w: 6 }) })))));
};
exports.NCTablePagination = NCTablePagination;
//# sourceMappingURL=index.js.map