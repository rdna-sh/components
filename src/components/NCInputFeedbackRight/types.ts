import { InputAddonProps, InputGroupProps, InputProps } from "@chakra-ui/react";

export type NCInputFeedbackRightProps = {
    feedbackValue: string | number;
    feedbackWidth?: string | number;
    inputGroupProps?: InputGroupProps;
    inputAddonProps?: InputAddonProps;
} & InputProps;
