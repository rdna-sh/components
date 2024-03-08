"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCModalConfirmation = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const index_1 = require("../index");
const NCButton_1 = require("../../../components/NCButton");
const NCModalConfirmation = ({ title, description, actions = [], onClickCloseModal, isOpen, }) => {
    return (react_1.default.createElement(index_1.NCModal, { title: title, isOpen: isOpen, onClickCloseModal: onClickCloseModal },
        react_1.default.createElement(react_2.Text, { fontSize: "1rem" }, description),
        react_1.default.createElement(react_2.Flex, { direction: { base: "column", md: "row" }, justifyContent: { base: "center", md: "flex-end" }, mt: 5, alignItems: { md: "center" }, gap: 5 }, actions.map((action, index) => (react_1.default.createElement(NCButton_1.NCButton, { key: index, onClick: action.onClick, colorScheme: action.colorScheme, color: action.color, variant: action.variant, bg: action.background, isLoading: action.isLoading, isDisabled: action.isDisabled }, action.title))))));
};
exports.NCModalConfirmation = NCModalConfirmation;
//# sourceMappingURL=index.js.map