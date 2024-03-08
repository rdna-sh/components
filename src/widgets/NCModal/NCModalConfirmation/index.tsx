import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { NCModal } from "../index";
import { NCButton } from "../../../components/NCButton";
import { ModalConfirmationProps } from "./types";

/**
 *
 * Modal usada para confirmar deleção ou edição ou criação
 *
 */
export const NCModalConfirmation: React.FC<ModalConfirmationProps> = ({
    title,
    description,
    actions = [],
    onClickCloseModal,
    isOpen,

}) => {
    return (
        <NCModal title={title} isOpen={isOpen} onClickCloseModal={onClickCloseModal}>
            <Text fontSize="1rem">{description}</Text>
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={{ base: "center", md: "flex-end" }}
                mt={5}
                alignItems={{ md: "center" }}
                gap={5}
            >
                {actions.map((action, index) => (
                    <NCButton
                        key={index}
                        onClick={action.onClick}
                        colorScheme={action.colorScheme}
                        color={action.color}
                        variant={action.variant}
                        bg={action.background}
                        isLoading={action.isLoading}
                        isDisabled={action.isDisabled}
                    >
                        {action.title}
                    </NCButton>
                ))}
            </Flex>
        </NCModal>
    );
};
