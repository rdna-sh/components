import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCCheckboxGroup } from "./index";
import { NCCheckbox } from "../NCCheckbox";
import { Stack } from "@chakra-ui/react";

const meta: Meta<typeof NCCheckboxGroup> = {
    title: "Novacap/Components/CheckboxGroup",
    component: NCCheckboxGroup,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCCheckboxGroup>;

export const Default: Story = {
    render: () => (
        <NCCheckboxGroup>
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <NCCheckbox value="naruto">Naruto</NCCheckbox>
                <NCCheckbox value="sasuke">Sasuke</NCCheckbox>
                <NCCheckbox value="kakashi">Kakashi</NCCheckbox>
            </Stack>
        </NCCheckboxGroup>
    ),
};
