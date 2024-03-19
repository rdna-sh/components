import React from "react";
import { NCTooltip } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { NCButton } from "../NCButton";

const meta: Meta<typeof NCTooltip> = {
    title: "Novacap/Components/Tooltip",
    component: NCTooltip, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCTooltip>;

export const Primary: Story = {
    render: () => (
        <NCTooltip label="Label test" placement="bottom" shouldWrapChildren={true}>
            <NCButton>Button test</NCButton>
        </NCTooltip>
    ),
};
