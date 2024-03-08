import React from "react";
import { Spinner, SpinnerProps } from "@chakra-ui/react";

export const NCSpinner: React.FC<SpinnerProps> = (props) => {
    return <Spinner thickness="0.35rem" speed="0.65s" emptyColor="gray.200" color="blue.700" size="xl" {...props} />;
};
