import React from "react";
import { Input, InputProps } from "@chakra-ui/react";

export const NCInput: React.FC<InputProps> = (props) => {
    return (
        <Input
            focusBorderColor="yellow.500"
            borderColor="blue.700"
            borderWidth="2px"
            _focus={{ borderWidth: "1px" }}
            {...props}
        />
    );
};
