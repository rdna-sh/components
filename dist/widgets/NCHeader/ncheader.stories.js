"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOptionsDisabled = exports.NavbarDisabled = exports.WithoutProfilePicture = exports.Default = void 0;
const index_1 = require("./index");
const fakeData_1 = require("../../utils/fakeData");
const meta = {
    title: "Novacap/Widgets/Header",
    component: index_1.NCHeader,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {
        navbarItems: fakeData_1.navbarItemsFake,
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: fakeData_1.opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};
exports.WithoutProfilePicture = {
    args: {
        navbarItems: fakeData_1.navbarItemsFake,
        profileOptions: fakeData_1.opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};
exports.NavbarDisabled = {
    args: {
        navbarItems: fakeData_1.navbarItemsFake.map((menu) => (Object.assign(Object.assign({}, menu), { disabled: true }))),
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: fakeData_1.opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};
exports.ProfileOptionsDisabled = {
    args: {
        navbarItems: fakeData_1.navbarItemsFake,
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: fakeData_1.opcoesPerfilFake.map((opcao) => (Object.assign(Object.assign({}, opcao), { disabled: true }))),
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};
//# sourceMappingURL=ncheader.stories.js.map