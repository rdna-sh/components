"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCTable = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCTable = ({ tableHeaderColumns = [], totalItems = 0, showTotalItems = true, showTotalItemsLabel = "Quantidade de registros", tableHeaderProps, tableContainerProps, tableBodyProps, tableFooterProps, children, }) => {
    return (react_1.default.createElement(react_2.TableContainer, Object.assign({ borderRadius: "0.625rem", borderWidth: "2px", borderColor: "tableBorder.500" }, tableContainerProps),
        react_1.default.createElement(react_2.Table, { variant: "simple" },
            react_1.default.createElement(react_2.Thead, Object.assign({ bg: "tableHeaderBackground.500" }, tableHeaderProps),
                react_1.default.createElement(react_2.Tr, null, tableHeaderColumns.map((column, index) => (react_1.default.createElement(react_2.Th, { key: index, color: "tableTextBody.500", fontFamily: "Roboto", fontSize: "0.875rem", textAlign: "center" }, column))))),
            react_1.default.createElement(react_2.Tbody, Object.assign({ color: "tableTextBody.500", fontFamily: "Roboto" }, tableBodyProps), children),
            react_1.default.createElement(react_2.Tfoot, Object.assign({ fontWeight: 600 }, tableFooterProps, { display: showTotalItems ? "initial" : "none" }),
                react_1.default.createElement(react_2.Tr, null,
                    react_1.default.createElement(react_2.Th, { color: "tableTextBody.500", fontFamily: "Roboto", fontSize: "sm", textTransform: "uppercase" },
                        showTotalItemsLabel,
                        ": ",
                        totalItems))))));
};
exports.NCTable = NCTable;
//# sourceMappingURL=index.js.map