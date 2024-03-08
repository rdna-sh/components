import React from "react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { NCInputFeedbackRightProps } from "./types";

export const NCInputFeedbackRight: React.FC<NCInputFeedbackRightProps> = ({
    inputGroupProps,
    inputAddonProps,
    feedbackWidth = "auto",
    feedbackValue,
    ...inputProps
}) => {
    return (
        <InputGroup {...inputGroupProps}>
            <Input
                focusBorderColor="yellow.500"
                borderColor="blue.700"
                borderWidth="2px"
                _focus={{ borderWidth: "1px" }}
                {...inputProps}
            />
            <InputRightAddon width={feedbackWidth} {...inputAddonProps}>
                {feedbackValue}
            </InputRightAddon>
        </InputGroup>
    );
};
