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
exports.TableWithPagination = exports.WithBorderBetweenTheLinesBody = exports.WithoutTotalItems = exports.Default = void 0;
const react_1 = __importStar(require("react"));
const index_1 = require("./index");
const fakeData_1 = require("../../utils/fakeData");
const NCTableRow_1 = require("./NCTableRow");
const NCTableCell_1 = require("./NCTableCell");
const NCTablePagination_1 = require("./NCTablePagination");
const meta = {
    title: "Novacap/Widgets/Table",
    component: index_1.NCTable,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    render: () => (react_1.default.createElement(index_1.NCTable, { tableHeaderColumns: fakeData_1.tabelaFakeData.header }, fakeData_1.tabelaFakeData.body.map((item, index) => (react_1.default.createElement(NCTableRow_1.NCTableRow, { key: index, borderBottomWidth: "2px", borderColor: "tableBorder.500" },
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.fatura),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.cpf),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.empresa),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.valor),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.banco),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.agencia),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.numeroConta),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.situacao)))))),
};
exports.WithoutTotalItems = {
    render: () => (react_1.default.createElement(index_1.NCTable, { tableHeaderColumns: fakeData_1.tabelaFakeData.header, showTotalItems: false }, fakeData_1.tabelaFakeData.body.map((item, index) => (react_1.default.createElement(NCTableRow_1.NCTableRow, { key: index, borderBottomWidth: "2px", borderColor: "tableBorder.500" },
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.fatura),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.cpf),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.empresa),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.valor),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.banco),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.agencia),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.numeroConta),
        react_1.default.createElement(NCTableCell_1.NCTableCell, null, item.situacao)))))),
};
exports.WithBorderBetweenTheLinesBody = {
    render: () => (react_1.default.createElement(index_1.NCTable, { tableHeaderColumns: fakeData_1.tabelaFakeData.header, showTotalItems: false }, fakeData_1.tabelaFakeData.body.map((item, index) => (react_1.default.createElement(NCTableRow_1.NCTableRow, { key: index, borderBottomWidth: "2px", borderColor: "tableBorder.500" },
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "0px", borderColor: "transparent" }, item.fatura),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.cpf),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.empresa),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.valor),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.banco),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.agencia),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.numeroConta),
        react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.situacao)))))),
};
exports.TableWithPagination = {
    render: () => {
        const [pageIndex, setPageIndex] = (0, react_1.useState)(0);
        const [itemsPeerPage, setItemsPeerPage] = (0, react_1.useState)(10);
        const [items] = (0, react_1.useState)([
            ...fakeData_1.tabelaFakeData.body,
            ...fakeData_1.tabelaFakeData.body,
            ...fakeData_1.tabelaFakeData.body,
            ...fakeData_1.tabelaFakeData.body,
        ]);
        const onPageChange = (newPage) => setPageIndex(newPage);
        const onChangeItemsPeerPage = (newItemsPeerPage) => setItemsPeerPage(newItemsPeerPage);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(index_1.NCTable, { tableHeaderColumns: fakeData_1.tabelaFakeData.header, showTotalItems: true, totalItems: items.length }, fakeData_1.tabelaFakeData.body.map((item, index) => (react_1.default.createElement(NCTableRow_1.NCTableRow, { key: index, borderBottomWidth: "2px", borderColor: "tableBorder.500" },
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "0px", borderColor: "transparent" }, item.fatura),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.cpf),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.empresa),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.valor),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.banco),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.agencia),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.numeroConta),
                react_1.default.createElement(NCTableCell_1.NCTableCell, { borderLeftWidth: "2px", borderColor: "tableBorder.500" }, item.situacao))))),
            react_1.default.createElement(NCTablePagination_1.NCTablePagination, { onPageChange: onPageChange, pageIndex: pageIndex, total: items.length, onChangeRowsPerPage: onChangeItemsPeerPage, rowsPerPageOptions: [1, 2, 3, 4, 10], rowsPerPage: itemsPeerPage, rowsPerPageLabel: "Custom message for items per page:", previousPageFeedbackLabel: "Custom previous page message", nextPageFeedbackLabel: "Custom next page message", labelRowsPerPage: "Custom page :currentPage: of :lastPage:" })));
    },
};
//# sourceMappingURL=nctable.stories.js.map