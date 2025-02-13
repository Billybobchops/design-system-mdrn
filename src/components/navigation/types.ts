export type NavLink = {
    href: string;
    label: string;
    subMenu?: NavLink[];
    icon?: React.ReactNode;
    iconOnly?: boolean;
};
