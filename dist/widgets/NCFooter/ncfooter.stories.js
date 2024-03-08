"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const footer_novacap_gdf_e_tempo_e_acao_png_1 = __importDefault(require("../../assets/images/footer-novacap-gdf-e-tempo-e-acao.png"));
const footer_novacap_azul_png_1 = __importDefault(require("../../assets/images/footer-novacap-azul.png"));
const meta = {
    title: "Novacap/Widgets/Footer",
    component: index_1.NCFooter,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {
        logoLeft: footer_novacap_gdf_e_tempo_e_acao_png_1.default,
        logoRight: footer_novacap_azul_png_1.default,
    },
};
//# sourceMappingURL=ncfooter.stories.js.map