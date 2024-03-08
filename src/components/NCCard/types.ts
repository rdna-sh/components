import { BoxProps } from "@chakra-ui/react";
import React from "react";

export type NCCardProps = {
    title: string;
    containerProps?: BoxProps;
    titleProps?: BoxProps;
    contentProps?: BoxProps;
    children: React.ReactNode;
};