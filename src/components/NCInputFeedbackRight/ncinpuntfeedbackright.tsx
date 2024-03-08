import { Meta, StoryObj } from "@storybook/react";
import { NCInputFeedbackRight } from "./index";

const meta: Meta<typeof NCInputFeedbackRight> = {
    title: "Novacap/Components/InputFeedbackRight",
    component: NCInputFeedbackRight,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCInputFeedbackRight>;

export const Default: Story = {
    args: {
        feedbackValue: "feedback value",
        defaultValue: "12",
    },
};
