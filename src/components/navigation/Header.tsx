import Nav from '@components/navigation/Nav';
import classes from './Header.module.scss';
import type { NavLink } from './types';

interface HeaderProps {
    homeLink: string;
    logoAltText: string;
    logoSrc: string;
    navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ homeLink, logoAltText, logoSrc, navLinks }) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a href={homeLink} className={classes.homeLink}>
                    <img src={logoSrc} alt={logoAltText} />
                </a>
                <Nav links={navLinks} />
            </div>
        </header>
    );
};

export default Header;
