"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCSingleDatepicker = void 0;
const react_1 = __importDefault(require("react"));
const chakra_dayzed_datepicker_1 = require("chakra-dayzed-datepicker");
const NCSingleDatepicker = (props) => {
    return (react_1.default.createElement(chakra_dayzed_datepicker_1.SingleDatepicker, Object.assign({ configs: { dateFormat: "dd/MM/yyyy" }, propsConfigs: {
            inputProps: {
                focusBorderColor: "yellow.500",
                borderColor: "blue.700",
                borderWidth: "2px",
                _focus: { borderWidth: "1px" },
            },
        } }, props)));
};
exports.NCSingleDatepicker = NCSingleDatepicker;
//# sourceMappingURL=index.js.map