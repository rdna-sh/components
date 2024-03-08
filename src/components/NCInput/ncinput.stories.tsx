import { Meta, StoryObj } from "@storybook/react";
import { NCInput } from "./index";

const meta: Meta<typeof NCInput> = {
    title: "Novacap/Components/Input",
    component: NCInput, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCInput>;

export const Default: Story = {};

export const DateInput: Story = {
    args: {
        type: "date",
    },
};

export const UnstyledVariant: Story = {
    args: {
        variant: "unstyled",
    },
};
