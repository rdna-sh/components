import { AlertProps } from "@chakra-ui/react";

export type NCAlertProps = {
    message: string;
    type: "error" | "info" | "warning" | "success" | "loading" | undefined;
} & AlertProps;
