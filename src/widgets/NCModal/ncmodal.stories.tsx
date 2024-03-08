import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCModal } from "./index";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { novaCapTheme } from "../../theme/theme";
import { NCButton } from "../../components/NCButton";
import { NCModalConfirmation } from "./NCModalConfirmation";

const meta: Meta<typeof NCModal> = {
    title: "Novacap/Widgets/Modal",
    component: NCModal, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCModal>;

export const Default: Story = {
    decorators: [(StoryDecorator) => <ChakraProvider theme={novaCapTheme}>{StoryDecorator()}</ChakraProvider>],
    render: () => {
        const { isOpen, onToggle } = useDisclosure();

        return (
            <>
                <NCButton onClick={onToggle}>Open Modal</NCButton>
                <NCModal title="Modal Title" isOpen={isOpen} onClickCloseModal={onToggle}>
                    <h2>Modal content</h2>
                    <h2>Modal content</h2>
                    <h2>Modal content</h2>
                    <h2>Modal content</h2>
                    <h2>Modal content</h2>
                </NCModal>
            </>
        );
    },
};

export const ModalConfirmation: Story = {
    decorators: [(StoryDecorator) => <ChakraProvider theme={novaCapTheme}>{StoryDecorator()}</ChakraProvider>],
    render: () => {
        const { isOpen, onToggle } = useDisclosure();

        return (
            <>
                <NCButton onClick={onToggle}>Open Modal</NCButton>
                <NCModalConfirmation
                    isOpen={isOpen}
                    onClickCloseModal={onToggle}
                    title="Modal Confirmation title"
                    description="Modal confirmation description"
                    actions={[
                        {
                            colorScheme: "blue",
                            onClick: () => {},
                            title: "Yep",
                            background: "blue.700",
                        },
                        {
                            onClick: onToggle,
                            title: "Nope",
                            variant: "ghost",
                        },
                    ]}
                />
            </>
        );
    },
};
