import { Box, Popover, PopoverContent, PopoverTrigger, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { DesktopNavbarProps, DesktopSubNavbarProps } from "../types";
import { NCButton } from "../../../components/NCButton";

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ desktopNavbarItems }) => {
    return (
        <Stack direction={"row"} spacing={{ base: 0, lg: 4 }} display={{ base: "none", md: "flex" }}>
            {desktopNavbarItems.map((navItem, index) => (
                <Box key={index}>
                    <Popover trigger={"hover"}>
                        <PopoverTrigger>
                            <Box>
                                <NCButton
                                    onClick={() => navItem.onClick(navItem)}
                                    variant="ghost"
                                    colorScheme="blue"
                                    rounded={"md"}
                                    color={navItem.activeRoute ? "yellow.500" : "white"}
                                    _active={{ opacity: "0.5" }}
                                    _hover={{ opacity: "1" }}
                                    isDisabled={navItem.disabled}
                                    leftIcon={navItem.icon ? <navItem.icon /> : undefined}
                                    fontFamily="Roboto"
                                    display="inline-block"
                                    fontSize={{ base: "0.8rem", lg: "md" }}
                                    size={{ base: "sm", md: "sm", lg: "md" }}
                                    fontWeight="600"
                                    borderBottomColor={navItem.activeRoute ? "yellow.500" : "transparent"}
                                    borderBottomWidth="1px"
                                    borderTopWidth="1px"
                                    borderTopColor="transparent"
                                    borderRadius={0}
                                    marginX={0}
                                >
                                    {navItem.title}
                                </NCButton>
                            </Box>
                        </PopoverTrigger>

                        {navItem.children.length > 0 && !navItem.disabled && (
                            <PopoverContent border={0} boxShadow={"xl"} bg="white" borderTopRadius="5px">
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.title} desktopSubNavbarItem={child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav: React.FC<DesktopSubNavbarProps> = ({ desktopSubNavbarItem }) => {
    return (
        <Box
            onClick={() => desktopSubNavbarItem.onClick(desktopSubNavbarItem)}
            role={"group"}
            display={"block"}
            p={2}
            borderTopRadius="5px"
            _hover={{ bg: "blue.700" }}
            fontWeight="500"
            cursor="pointer"
        >
            <Stack direction={"row"} align={"center"} justifyContent="center">
                <Text
                    fontFamily="Roboto"
                    fontSize="0.9rem"
                    color="disabled.500"
                    transition={"all .3s ease"}
                    _groupHover={{ color: "white" }}
                    fontWeight={500}
                >
                    {desktopSubNavbarItem.title}
                </Text>
            </Stack>
        </Box>
    );
};
