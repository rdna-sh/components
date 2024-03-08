"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalConfirmation = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const react_2 = require("@chakra-ui/react");
const theme_1 = require("../../theme/theme");
const NCButton_1 = require("../../components/NCButton");
const NCModalConfirmation_1 = require("./NCModalConfirmation");
const meta = {
    title: "Novacap/Widgets/Modal",
    component: index_1.NCModal,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    decorators: [(StoryDecorator) => react_1.default.createElement(react_2.ChakraProvider, { theme: theme_1.novaCapTheme }, StoryDecorator())],
    render: () => {
        const { isOpen, onToggle } = (0, react_2.useDisclosure)();
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(NCButton_1.NCButton, { onClick: onToggle }, "Open Modal"),
            react_1.default.createElement(index_1.NCModal, { title: "Modal Title", isOpen: isOpen, onClickCloseModal: onToggle },
                react_1.default.createElement("h2", null, "Modal content"),
                react_1.default.createElement("h2", null, "Modal content"),
                react_1.default.createElement("h2", null, "Modal content"),
                react_1.default.createElement("h2", null, "Modal content"),
                react_1.default.createElement("h2", null, "Modal content"))));
    },
};
exports.ModalConfirmation = {
    decorators: [(StoryDecorator) => react_1.default.createElement(react_2.ChakraProvider, { theme: theme_1.novaCapTheme }, StoryDecorator())],
    render: () => {
        const { isOpen, onToggle } = (0, react_2.useDisclosure)();
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(NCButton_1.NCButton, { onClick: onToggle }, "Open Modal"),
            react_1.default.createElement(NCModalConfirmation_1.NCModalConfirmation, { isOpen: isOpen, onClickCloseModal: onToggle, title: "Modal Confirmation title", description: "Modal confirmation description", actions: [
                    {
                        colorScheme: "blue",
                        onClick: () => { },
                        title: "Yep",
                        background: "blue.700",
                    },
                    {
                        onClick: onToggle,
                        title: "Nope",
                        variant: "ghost",
                    },
                ] })));
    },
};
//# sourceMappingURL=ncmodal.stories.js.map