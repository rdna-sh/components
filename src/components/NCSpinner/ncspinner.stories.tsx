import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCSpinner } from "./index";
import { Stack } from "@chakra-ui/react";

const meta: Meta<typeof NCSpinner> = {
    title: "Novacap/Components/Spinner",
    component: NCSpinner,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCSpinner>;

export const Default: Story = {
    args: {},
};

export const DifferentSize: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <NCSpinner size="xs" />
            <NCSpinner size="sm" />
            <NCSpinner size="md" />
            <NCSpinner size="lg" />
            <NCSpinner size="xl" />
        </Stack>
    ),
};
