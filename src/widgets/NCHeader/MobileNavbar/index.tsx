import React from "react";
import { Box, Collapse, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MobileNavbarItemProps, MobileNavbarProps } from "../types";

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ navbarItems, headerBg }) => {
    return (
        <Stack bg={headerBg} p={4} display={{ md: "none" }}>
            {navbarItems.map((navItem, index) => (
                <MobileNavItem key={index} mobileNavItem={navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem: React.FC<MobileNavbarItemProps> = ({ mobileNavItem }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={mobileNavItem.children && onToggle}>
            <Box
                py={2}
                as="a"
                onClick={() => mobileNavItem.onClick(mobileNavItem)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={600} color="white">
                    {mobileNavItem.title}
                </Text>

                {mobileNavItem.children.length > 0 && (
                    <Icon
                        color="white"
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor="yellow.500" align={"start"}>
                    {mobileNavItem.children?.map((child, index) => (
                        <Box
                            color="white"
                            fontFamily="Roboto"
                            as="a"
                            key={index}
                            py={2}
                            onClick={() => child.onClick(child)}
                        >
                            {child.title}
                        </Box>
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
