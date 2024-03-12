import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export const NCButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button _active={{ opacity: 0.5 }} colorScheme="blue" fontWeight={500} {...props}>
            {children}
        </Button>
    );
};
