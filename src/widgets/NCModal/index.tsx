import React from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { NCModalProps } from "./types";

export const NCModal: React.FC<NCModalProps> = ({
    title,
    modalContentProps,
    modalHeaderProps,
    modalProps,
    modalBodyProps,
    isOpen = false,
    onClickCloseModal,
    children,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClickCloseModal} {...modalProps} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="0.3rem" width="100%" maxWidth="800px"  {...modalContentProps}>
                <ModalHeader
                    borderTopRadius="0.3rem"
                    bg="blue.700"
                    color="white"
                    textAlign="center"
                    fontFamily="Roboto"
                    fontWeight={500}
                    {...modalHeaderProps}
                >
                    {title}
                </ModalHeader>
                <ModalCloseButton color="white" size="lg" />
                <ModalBody
                    borderBottomRadius="0.3rem"
                    bg="backgroundModalContent.500"
                    paddingY="1rem"
                    {...modalBodyProps}
                >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
