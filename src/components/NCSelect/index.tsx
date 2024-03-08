import React from "react";
import { Select, SelectProps } from "@chakra-ui/react";

export const NCSelect: React.FC<SelectProps> = ({ children, ...rest }) => {
    return (
        <Select
            focusBorderColor="yellow.500"
            borderColor="blue.700"
            borderWidth="2px"
            _focus={{ borderWidth: "1px" }}
            {...rest}
        >
            {children}
        </Select>
    );
};
