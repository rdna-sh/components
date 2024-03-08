import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

export const NCPageTitle: React.FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <Heading color="pageTitle.500" fontFamily="Roboto" fontSize="2rem" fontWeight={500} {...props}>
            {children}
        </Heading>
    );
};
