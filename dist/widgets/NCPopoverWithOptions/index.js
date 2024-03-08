"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCPopoverWithOptions = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const NCPopoverWithOptions = ({ triggerComponent, options, popoverProps, optionsProps, }) => {
    return (react_1.default.createElement(react_2.Popover, Object.assign({ placement: "bottom-end" }, popoverProps),
        react_1.default.createElement(react_2.PopoverTrigger, null, triggerComponent),
        react_1.default.createElement(react_2.PopoverContent, { width: "250px" }, options.map((option, index) => (react_1.default.createElement(react_2.Box, Object.assign({ key: index, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", gap: 1, borderTopRadius: "0.313rem", _hover: { color: "white", bg: "blue.700" }, _active: { opacity: 0.5 }, color: "popoverTextIcon.500", py: 3, fontSize: "0.938rem", onClick: () => option.onClick(option) }, optionsProps),
            react_1.default.createElement(react_2.Icon, { as: option.icon ? option.icon : undefined }),
            react_1.default.createElement(react_2.Box, { as: "span" }, option.title)))))));
};
exports.NCPopoverWithOptions = NCPopoverWithOptions;
//# sourceMappingURL=index.js.map