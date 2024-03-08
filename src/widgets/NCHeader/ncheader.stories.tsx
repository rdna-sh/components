import { Meta, StoryObj } from "@storybook/react";
import { NCHeader } from "./index";
import { navbarItemsFake, opcoesPerfilFake } from "../../utils/fakeData";

const meta: Meta<typeof NCHeader> = {
    title: "Novacap/Widgets/Header",
    component: NCHeader, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NCHeader>;

export const Default: Story = {
    args: {
        navbarItems: navbarItemsFake,
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};

export const WithoutProfilePicture: Story = {
    args: {
        navbarItems: navbarItemsFake,
        profileOptions: opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};

export const NavbarDisabled: Story = {
    args: {
        navbarItems: navbarItemsFake.map((menu) => ({ ...menu, disabled: true })),
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: opcoesPerfilFake,
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};

export const ProfileOptionsDisabled: Story = {
    args: {
        navbarItems: navbarItemsFake,
        profilePicture: "https://i.pinimg.com/550x/25/6c/5d/256c5d210e7ebba0b72146023cf9740d.jpg",
        profileOptions: opcoesPerfilFake.map((opcao) => ({ ...opcao, disabled: true })),
        logoHeader: "../../../src/assets/images/header-novacap-branco.png",
        profilePicturePlaceholder: "../../../src/assets/images/user-placeholder.png",
    },
};
