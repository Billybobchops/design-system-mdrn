import type { NavigationLink } from './types';
interface HeaderProps {
    homeLink: string;
    logoAltText: string;
    logoSrc: string;
    navLinks: NavigationLink[];
}
declare const Header: React.FC<HeaderProps>;
export default Header;
