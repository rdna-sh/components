import { Meta, StoryObj } from "@storybook/react";
import { NCAlert } from "./index";

const meta: Meta<typeof NCAlert> = {
    title: "Novacap/Widgets/Alert",
    component: NCAlert, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCAlert>;

export const Default: Story = {
    args: {
        message: "Success message",
    },
};

export const Loading: Story = {
    args: {
        message: "Loading message",
        type: "loading",
    },
};

export const Error: Story = {
    args: {
        message: "Error message",
        type: "error",
    },
};

export const Warning: Story = {
    args: {
        message: "Warning message",
        type: "warning",
    },
};
