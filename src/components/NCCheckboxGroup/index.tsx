import React from "react";
import { CheckboxGroup, CheckboxGroupProps } from "@chakra-ui/react";

export const NCCheckboxGroup: React.FC<CheckboxGroupProps> = ({ children, ...props }) => {
    return (
        <CheckboxGroup colorScheme="blue" {...props}>
            {children}
        </CheckboxGroup>
    );
};
