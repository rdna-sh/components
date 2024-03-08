import { Meta, StoryObj } from "@storybook/react";
import { NCFooter } from "./index";
import imageGDF from "../../assets/images/footer-novacap-gdf-e-tempo-e-acao.png";
import imageNovacap from "../../assets/images/footer-novacap-azul.png";

const meta: Meta<typeof NCFooter> = {
    title: "Novacap/Widgets/Footer",
    component: NCFooter, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCFooter>;

export const Default: Story = {
    args: {
        logoLeft: imageGDF,
        logoRight: imageNovacap,
    },
};
