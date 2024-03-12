"use client";

import React from "react";
import { Box, Collapse, Flex, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MobileNavbar } from "./MobileNavbar";
import { NCHeaderProps } from "./types";
import { DesktopNavbar } from "./DesktopNavbar";
import { NavbarUserOptions } from "./NavbarUserOptions";

export const NCHeader: React.FC<NCHeaderProps> = ({
    headerBg = "headerNovacap.500",
    navbarItems = [],
    headerProps,
    logoHeader,
    profilePicturePlaceholder,
    profilePicture,
    profileOptions = [],
}) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as="header" bg={headerBg} {...headerProps}>
            <Flex
                color="white"
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={"center"}
                display="flex"
                alignItems={"center"}
                justifyContent={{ base: "center", md: "flex-start" }}
            >
                <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={"ghost"}
                        color="white"
                        _active={{ opacity: 0.5, bg: "transparent" }}
                        _hover={{ bg: "transparent" }}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <Box>
                    <img src={logoHeader} alt="Logo Novacap" />
                </Box>

                <HStack alignItems={"center"} justifyContent="center" flex={1}>
                    <DesktopNavbar desktopNavbarItems={navbarItems} />
                </HStack>

                <Flex alignItems={"center"}>
                    <NavbarUserOptions
                        profilePicturePlaceholder={profilePicturePlaceholder}
                        profilePicture={profilePicture}
                        profileOptions={profileOptions}
                    />
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNavbar navbarItems={navbarItems} headerBg={headerBg} />
            </Collapse>
        </Box>
    );
};
