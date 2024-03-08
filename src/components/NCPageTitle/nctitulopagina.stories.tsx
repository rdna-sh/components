import { Meta, StoryObj } from "@storybook/react";
import { NCPageTitle } from "./index";

const meta: Meta<typeof NCPageTitle> = {
    title: "Novacap/Components/PageTitle",
    component: NCPageTitle,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCPageTitle>;

export const Default: Story = {
    args: {
        children: "Test title",
    },
};
