import { Meta, StoryObj } from "@storybook/react";
import { NCCheckbox } from "./index";

const meta: Meta<typeof NCCheckbox> = {
    title: "Novacap/Components/Checkbox",
    component: NCCheckbox,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCCheckbox>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

export const Large: Story = {
    args: {
        defaultChecked: true,
        size: "lg",
    },
};

export const Small: Story = {
    args: {
        defaultChecked: true,
        size: "sm",
    },
};

export const Disabled: Story = {
    args: {
        defaultChecked: true,
        isDisabled: true,
    },
};
