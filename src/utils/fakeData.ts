import { NavbarItem, ProfileOption } from "../widgets/NCHeader/types";
import { CopyIcon, LinkIcon, PhoneIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import { NCPopoverComOpcoesItemProps } from "../widgets/NCPopoverWithOptions/types";

export const gerarDadosFicticiosDeFrutas = () => {
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

function gerarValorUnico() {
    return Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999
}

export const navbarItemsFake: Array<NavbarItem> = [
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: StarIcon,
        title: "Home",
        activeRoute: false,
        children: [],
    },
    {
        onClick: () => {},
        disabled: false,
        icon: CopyIcon,
        title: "Cadastros",
        activeRoute: false,
        children: [
            {
                onClick: (navbarItem) => {
                    alert(`Você clicou no navbarItem ${navbarItem.title}`);
                },
                disabled: false,
                icon: CopyIcon,
                title: "Faturas",
                activeRoute: false,
                children: [
                    {
                        onClick: (navbarItem) => {
                            alert(`Você clicou no navbarItem ${navbarItem.title}`);
                        },
                        disabled: false,
                        icon: CopyIcon,
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
                icon: CopyIcon,
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
        icon: TimeIcon,
        title: "Cobrança",
        activeRoute: false,
        children: [],
    },
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: LinkIcon,
        title: "Recebimento",
        activeRoute: false,
        children: [],
    },
    {
        onClick: (navbarItem) => {
            alert(`Você clicou no navbarItem ${navbarItem.title}`);
        },
        disabled: false,
        icon: PhoneIcon,
        title: "Relatórios",
        activeRoute: false,
        children: [],
    },
];

export const opcoesPerfilFake: Array<ProfileOption> = [
    {
        onclick: (option) => alert(`Você clicou na opção ${option.title}`),
        icon: CopyIcon,
        title: "Atribuições de Perfil",
        disabled: false,
    },
    {
        onclick: (option) => alert(`Você clicou na opção ${option.title}`),
        icon: TimeIcon,
        title: "Logout",
        disabled: false,
    },
];

export const tabelaFakeData = {
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

export const popoverComOpcoesFakeData: NCPopoverComOpcoesItemProps[] = [
    {
        title: "Item 1",
        icon: LinkIcon,
        onClick: (popoverItem) => alert(`Você clicou no item ${popoverItem.title}`),
    },
    {
        title: "Item 2",
        icon: CopyIcon,
        onClick: (popoverItem) => alert(`Você clicou no item ${popoverItem.title}`),
    },
];
