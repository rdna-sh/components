import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCPopoverWithOptions } from "./index";
import { NCButton } from "../../components/NCButton";
import { popoverComOpcoesFakeData } from "../../utils/fakeData";

const meta: Meta<typeof NCPopoverWithOptions> = {
    title: "Novacap/Widgets/PopoverWithOptions",
    component: NCPopoverWithOptions, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCPopoverWithOptions>;

export const Default: Story = {
    render: () => (
        <NCPopoverWithOptions options={popoverComOpcoesFakeData} triggerComponent={<NCButton>Trigger</NCButton>} />
    ),
};
