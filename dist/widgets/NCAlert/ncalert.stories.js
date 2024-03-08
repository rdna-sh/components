"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = exports.Error = exports.Loading = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    title: "Novacap/Widgets/Alert",
    component: index_1.NCAlert,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {
        message: "Success message",
    },
};
exports.Loading = {
    args: {
        message: "Loading message",
        type: "loading",
    },
};
exports.Error = {
    args: {
        message: "Error message",
        type: "error",
    },
};
exports.Warning = {
    args: {
        message: "Warning message",
        type: "warning",
    },
};
//# sourceMappingURL=ncalert.stories.js.map