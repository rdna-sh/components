import React from "react";
import { IconType } from "react-icons";
import { BoxProps, ComponentWithAs, IconProps, PopoverProps } from "@chakra-ui/react";
export interface NCPopoverComOpcoesItemProps {
    title: string;
    icon?: IconType | ComponentWithAs<"svg", IconProps> | undefined;
    onClick: (opcao: NCPopoverComOpcoesItemProps) => void;
}
export interface NCPopoverWithOptionsProps {
    triggerComponent: React.ReactNode;
    options: NCPopoverComOpcoesItemProps[];
    popoverProps?: PopoverProps;
    optionsProps?: BoxProps;
}
//# sourceMappingURL=types.d.ts.map