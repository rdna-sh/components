import React from "react";
import { Box, Icon, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { NCPopoverWithOptionsProps } from "./types";

export const NCPopoverWithOptions: React.FC<NCPopoverWithOptionsProps> = ({
    triggerComponent,
    options,
    popoverProps,
    optionsProps,
}) => {
    return (
        <Popover placement="bottom-end" {...popoverProps}>
            <PopoverTrigger>{triggerComponent}</PopoverTrigger>
            <PopoverContent width="250px">
                {options.map((option, index) => (
                    <Box
                        key={index}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                        gap={1}
                        borderTopRadius="0.313rem"
                        _hover={{ color: "white", bg: "blue.700" }}
                        _active={{ opacity: 0.5 }}
                        color="popoverTextIcon.500"
                        py={3}
                        fontSize="0.938rem"
                        onClick={() => option.onClick(option)}
                        {...optionsProps}
                    >
                        <Icon as={option.icon ? option.icon : undefined} />
                        <Box as="span">{option.title}</Box>
                    </Box>
                ))}
            </PopoverContent>
        </Popover>
    );
};
