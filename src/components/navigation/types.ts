export type NavigationLink = {
    href?: string;
    label: string;
    subMenu?: NavigationLink[];
    icon?: React.ReactNode;
    iconOnly?: boolean;
};
