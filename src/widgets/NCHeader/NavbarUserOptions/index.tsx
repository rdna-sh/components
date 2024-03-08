import React from "react";
import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import { NavbarUserOptionsProps } from "../types";

export const NavbarUserOptions: React.FC<NavbarUserOptionsProps> = ({
    profilePicture,
    profilePicturePlaceholder,
    profileOptions,
}) => {
    return (
        <Menu>
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Flex justifyContent="center" alignItems="center" gap={2}>
                    <Avatar
                        size={{ base: "sm", md: "md" }}
                        src={profilePicture ? profilePicture : profilePicturePlaceholder}
                    />

                    <MdOutlineSettings size={28} color="white" />
                </Flex>
            </MenuButton>
            <MenuList alignItems={"center"} padding={0}>
                {profileOptions.map((option) => (
                    <MenuItem
                        isDisabled={option.disabled}
                        key={option.title}
                        borderRadius="0.3rem"
                        _hover={{ bg: "blue.700", color: "white" }}
                        _active={{ bg: "blue.700", color: "white" }}
                        onClick={() => option.onclick(option)}
                        color="disabled.500"
                    >
                        <Flex justifyContent="center" alignItems="center" gap={2} px={5} py={2}>
                            {option.icon ? <Icon size="md" as={option.icon} /> : null}
                            <Box fontFamily="Roboto" fontSize="md" fontWeight="500">
                                {option.title}
                            </Box>
                        </Flex>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};
