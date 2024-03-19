import React from "react";
import { Tooltip, TooltipProps } from "@chakra-ui/react";

export const NCTooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
    return (
        <Tooltip _active={{ opacity: 0.5 }} colorScheme="blue" fontWeight={500} {...props}>
            {children}
        </Tooltip>
    );
};
