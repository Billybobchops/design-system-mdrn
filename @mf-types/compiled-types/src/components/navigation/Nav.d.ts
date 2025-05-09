import type { NavigationLink } from './types';
type NavigationProps = {
    links: NavigationLink[];
    isMobileNavOpen: boolean;
};
declare const Nav: ({ links, isMobileNavOpen }: NavigationProps) => import("react").JSX.Element;
export default Nav;
