"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popoverComOpcoesFakeData = exports.tabelaFakeData = exports.opcoesPerfilFake = exports.navbarItemsFake = exports.gerarDadosFicticiosDeFrutas = void 0;
const icons_1 = require("@chakra-ui/icons");
const gerarDadosFicticiosDeFrutas = () => {
    return [
        { nome: "Maçã", value: gerarValorUnico() },
        {
            nome: "Banana",
            value: gerarValorUnico(),
        },
        { nome: "Laranja", value: gerarValorUnico() },
        { nome: "Morango", value: gerarValorUnico() },
        {
            nome: "Uva",
            value: gerarValorUnico(),
        },
        { nome: "Pera", value: gerarValorUnico() },
        { nome: "Abacaxi", value: gerarValorUnico() },
        {
            nome: "Melancia",
            value: gerarValorUnico(),
        },
        { nome: "Limão", value: gerarValorUnico() },
        { nome: "Kiwi", value: gerarValorUnico() },
    ];
};
exports.gerarDadosFicticiosDeFrutas = gerarDadosFicticiosDeFrutas;
function gerarValorUnico() {
    return Math.floor(Math.random() * 1000000);
}
exports.navbarItemsFake = [
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: icons_1.StarIcon,
        title: "Home",
        activeRoute: false,
        children: [],
    },
    {
        onClick: () => { },
        disabled: false,
        icon: icons_1.CopyIcon,
        title: "Cadastros",
        activeRoute: false,
        children: [
            {
                onClick: (navbarItem) => {
                    alert(`Você clicou no navbarItem ${navbarItem.title}`);
                },
                disabled: false,
                icon: icons_1.CopyIcon,
                title: "Faturas",
                activeRoute: false,
                children: [
                    {
                        onClick: (navbarItem) => {
                            alert(`Você clicou no navbarItem ${navbarItem.title}`);
                        },
                        disabled: false,
                        icon: icons_1.CopyIcon,
                        title: "Teste",
                        activeRoute: false,
                        children: [],
                    },
                ],
            },
            {
                onClick: (navbarItem) => {
                    alert(`Você clicou no navbarItem ${navbarItem.title}`);
                },
                disabled: false,
                icon: icons_1.CopyIcon,
                title: "Recebimento",
                activeRoute: false,
                children: [],
            },
        ],
    },
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: icons_1.TimeIcon,
        title: "Cobrança",
        activeRoute: false,
        children: [],
    },
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: icons_1.LinkIcon,
        title: "Recebimento",
        activeRoute: false,
        children: [],
    },
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: icons_1.PhoneIcon,
        title: "Relatórios",
        activeRoute: false,
        children: [],
    },
];
exports.opcoesPerfilFake = [
    {
        onclick: (option) => alert(`Você clicou na opção ${option.title}`),
        icon: icons_1.CopyIcon,
        title: "Atribuições de Perfil",
        disabled: false,
    },
    {
        onclick: (option) => alert(`Você clicou na opção ${option.title}`),
        icon: icons_1.TimeIcon,
        title: "Logout",
        disabled: false,
    },
];
exports.tabelaFakeData = {
    header: ["N° da Fatura", "CPF/CNPJ", "Empresa", "Valor", "Banco:", "Agência:", "N° da Conta:", "Situação"],
    body: [
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
        {
            fatura: "00001",
            cpf: "000-000-000-00",
            empresa: "Empresa teste",
            valor: 12323,
            banco: "Banco Teste",
            agencia: "0123",
            numeroConta: "0233",
            situacao: "Cancelado",
        },
    ],
};
exports.popoverComOpcoesFakeData = [
    {
        title: "Item 1",
        icon: icons_1.LinkIcon,
        onClick: (popoverItem) => alert(`Você clicou no item ${popoverItem.title}`),
    },
    {
        title: "Item 2",
        icon: icons_1.CopyIcon,
        onClick: (popoverItem) => alert(`Você clicou no item ${popoverItem.title}`),
    },
];
//# sourceMappingURL=fakeData.js.map