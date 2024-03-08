import React from "react";
import { NCButton } from "../../../components/NCButton";
import { NavbarItem } from "../types";

export interface NavLinkProps {
    navbarItem: NavbarItem;
}

export const NavLink: React.FC<NavLinkProps> = ({ navbarItem }) => {
    return (
        <NCButton
            onClick={() => navbarItem.onClick(navbarItem)}
            variant="ghost"
            colorScheme="blue"
            rounded={"md"}
            color={navbarItem.activeRoute ? "yellow.500" : "white"}
            _active={{ opacity: "0.5" }}
            isDisabled={navbarItem.disabled}
            leftIcon={navbarItem.icon ? <navbarItem.icon /> : undefined}
            fontFamily="Roboto"
            display="inline-block"
            fontSize="md"
            fontWeight="600"
            borderBottomColor={navbarItem.activeRoute ? "yellow.500" : "transparent"}
            borderBottomWidth="1px"
            borderTopWidth="1px"
            borderTopColor="transparent"
            borderRadius={0}
            marginX={0}
        >
            {navbarItem.title}
        </NCButton>
    );
};
