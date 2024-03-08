import React from "react";
import { Box } from "@chakra-ui/react";
import { NCCardProps } from "./types";

export const NCCard: React.FC<NCCardProps> = ({ children, titleProps, containerProps, title, contentProps }) => {
    return (
        <Box boxShadow="md" borderRadius="1rem" {...containerProps}>
            <Box
                color="white"
                bg="blue.700"
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingY="0.8rem"
                fontFamily="Roboto"
                fontSize="1rem"
                borderTopRadius="10px"
                {...titleProps}
            >
                {title}
            </Box>
            <Box bg="white" padding={4} borderBottomRadius="10px" {...contentProps}>
                {children}
            </Box>
        </Box>
    );
};
