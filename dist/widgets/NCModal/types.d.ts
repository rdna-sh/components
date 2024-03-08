import { ModalBodyProps, ModalContentProps, ModalHeaderProps, ModalProps } from "@chakra-ui/react";
import React from "react";
export type NCModalProps = {
    title: string;
    modalContentProps?: ModalContentProps;
    modalProps?: ModalProps;
    modalHeaderProps?: ModalHeaderProps;
    modalBodyProps?: ModalBodyProps;
    isOpen: boolean;
    onClickCloseModal: () => void;
    children?: React.ReactNode;
};
//# sourceMappingURL=types.d.ts.map