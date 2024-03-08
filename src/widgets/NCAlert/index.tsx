import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { NCAlertProps } from "./types";

export const NCAlert: React.FC<NCAlertProps> = ({ message, type = "success", ...rest }) => {
    return (
        <Alert status={type} borderRadius="0.3rem" {...rest}>
            <AlertIcon />
            {message}
        </Alert>
    );
};
