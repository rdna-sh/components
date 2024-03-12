/// <reference types="react" />
import { BoxProps } from "@chakra-ui/react";
export interface NavbarItem {
    icon: React.ReactNode | any;
    title: string;
    onClick: (navbarItem: NavbarItem) => void;
    disabled: boolean;
    activeRoute: boolean;
    children: NavbarItem[];
}
export interface ProfileOption {
    icon: React.ReactNode | any;
    title: string;
    onclick: (opcaoPerfil: ProfileOption) => void;
    disabled: boolean;
}
export interface NCHeaderProps {
    navbarItems?: Array<NavbarItem>;
    profileOptions?: Array<ProfileOption>;
    profilePicture?: string | any;
    logoHeader?: string | any;
    profilePicturePlaceholder?: string | any;
    headerBg?: string;
    headerProps?: BoxProps;
}
export interface DesktopNavbarProps {
    desktopNavbarItems: NavbarItem[];
}
export interface DesktopSubNavbarProps {
    desktopSubNavbarItem: NavbarItem;
}
export interface MobileNavbarItemProps {
    mobileNavItem: NavbarItem;
}
export interface MobileNavbarProps {
    navbarItems: NavbarItem[];
    headerBg: string;
}
export interface NavbarUserOptionsProps {
    profilePicture: string | any;
    profilePicturePlaceholder: string | any;
    profileOptions: ProfileOption[];
}
//# sourceMappingURL=types.d.ts.map