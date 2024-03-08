import React from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

export const NCCheckbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
    return (
        <Checkbox colorScheme="blue" {...props}>
            {children}
        </Checkbox>
    );
};
