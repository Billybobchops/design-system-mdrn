export type NavigationLink = {
    href?: string;
    label: string;
    mobileOnlyText?: boolean;
    subMenu?: NavigationLink[];
    icon?: React.ReactNode;
    iconOnly?: boolean;
};
