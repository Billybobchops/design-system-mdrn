import MenuToggle from '@components/navigation/MenuToggle';
import Nav from '@components/navigation/Nav';
import { useState } from 'react';
import classes from './Header.module.scss';
import type { NavLink } from './types';

interface HeaderProps {
    homeLink: string;
    logoAltText: string;
    logoSrc: string;
    navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ homeLink, logoAltText, logoSrc, navLinks }) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a href={homeLink} className={classes.homeLink}>
                    <img src={logoSrc} alt={logoAltText} />
                </a>

                <button
                    aria-expanded={isMobileNavOpen}
                    aria-label="Toggle navigation"
                    className={classes.menuButton}
                    onClick={() => setIsMobileNavOpen(prev => !prev)}
                    type="button"
                >
                    <MenuToggle isOpen={isMobileNavOpen} />
                </button>

                <Nav links={navLinks} isMobileNavOpen={isMobileNavOpen} />
            </div>
        </header>
    );
};

export default Header;
