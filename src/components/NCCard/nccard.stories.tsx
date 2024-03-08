import React from "react";
import { NCCard } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NCCard> = {
    title: "Novacap/Components/Card",
    component: NCCard,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCCard>;

export const Primary: Story = {
    render: () => (
        <NCCard title="Test title">
            <h2>Test content</h2>
            <h2>Test content</h2>
            <h2>Test content</h2>
            <h2>Test content</h2>
            <h2>Test content</h2>
        </NCCard>
    ),
};
