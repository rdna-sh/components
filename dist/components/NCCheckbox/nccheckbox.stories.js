"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Small = exports.Large = exports.Checked = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    title: "Novacap/Components/Checkbox",
    component: index_1.NCCheckbox,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {};
exports.Checked = {
    args: {
        defaultChecked: true,
    },
};
exports.Large = {
    args: {
        defaultChecked: true,
        size: "lg",
    },
};
exports.Small = {
    args: {
        defaultChecked: true,
        size: "sm",
    },
};
exports.Disabled = {
    args: {
        defaultChecked: true,
        isDisabled: true,
    },
};
//# sourceMappingURL=nccheckbox.stories.js.map