export interface ModalConfirmationAction {
    variant?: string;
    colorScheme?: string;
    color?: string;
    title: string;
    background?: string;
    onClick: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}
export interface ModalConfirmationProps {
    isOpen: boolean;
    onClickCloseModal: () => void;
    title: string;
    description: string;
    actions: ModalConfirmationAction[];
}
//# sourceMappingURL=types.d.ts.map