import React from "react";
import { NCButton } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { PhoneIcon } from "@chakra-ui/icons";

const meta: Meta<typeof NCButton> = {
    title: "Novacap/Components/Button",
    component: NCButton,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCButton>;

export const Primary: Story = {
    render: () => <NCButton colorScheme="blue">Button test</NCButton>,
};

export const Yellow: Story = {
    render: () => <NCButton colorScheme="yellow">Button test</NCButton>,
};

export const YellowButtonWithDarkBlueText: Story = {
    render: () => (
        <NCButton colorScheme="yellow" color="blue.700">
            Button test
        </NCButton>
    ),
};

export const LightBlue: Story = {
    args: {
        children: "Light blue",
        colorScheme: "lightBlue",
    },
};

export const DarkBlue: Story = {
    args: {
        children: "Dark blue",
        colorScheme: "blue",
        background: "blue.700",
        color: "white",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        colorScheme: "blue",
        children: "Button test",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Button test",
        colorScheme: "blue",
    },
};

export const SolidVariant: Story = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        variant: "solid",
    },
};

export const Loading: Story = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        isLoading: true,
        loadingText: "Loading",
    },
};

export const VarianteOutline: Story = {
    args: {
        children: "Button test",
        colorScheme: "blue",
        variant: "outline",
    },
};

export const ButtonWithIcon: Story = {
    render: () => (
        <NCButton leftIcon={<PhoneIcon />} colorScheme="yellow" color="blue.700">
            Settings
        </NCButton>
    ),
};
export const ButtonWithOutlineIcon: Story = {
    render: () => (
        <NCButton leftIcon={<PhoneIcon />} colorScheme="blue" variant="outline">
            Settings
        </NCButton>
    ),
};

export const LinearGradient: Story = {
    args: {
        bgGradient: "linear(to-r, blue.700, yellow.500)",
        children: "Button test",
        size: "lg",
    },
};

export const HoverLinearGradient: Story = {
    args: {
        _hover: { bgGradient: "linear(to-r, blue.700, yellow.500)" },
        children: "Button test",
        colorScheme: "blue",
    },
};
