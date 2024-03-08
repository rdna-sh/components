"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCModal = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCModal = ({ title, modalContentProps, modalHeaderProps, modalProps, modalBodyProps, isOpen = false, onClickCloseModal, children, }) => {
    return (react_1.default.createElement(react_2.Modal, Object.assign({ isOpen: isOpen, onClose: onClickCloseModal }, modalProps, { isCentered: true }),
        react_1.default.createElement(react_2.ModalOverlay, null),
        react_1.default.createElement(react_2.ModalContent, Object.assign({ borderRadius: "0.3rem", width: "100%", maxWidth: "800px" }, modalContentProps),
            react_1.default.createElement(react_2.ModalHeader, Object.assign({ borderTopRadius: "0.3rem", bg: "blue.700", color: "white", textAlign: "center", fontFamily: "Roboto", fontWeight: 500 }, modalHeaderProps), title),
            react_1.default.createElement(react_2.ModalCloseButton, { color: "white", size: "lg" }),
            react_1.default.createElement(react_2.ModalBody, Object.assign({ borderBottomRadius: "0.3rem", bg: "backgroundModalContent.500", paddingY: "1rem" }, modalBodyProps), children))));
};
exports.NCModal = NCModal;
//# sourceMappingURL=index.js.map