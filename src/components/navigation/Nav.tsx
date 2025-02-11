import { DropdownChevron } from '@components/Icon';
import { useState } from 'react';
import classes from './Nav.module.scss';
import type { NavLink } from './types';

type NavigationProps = {
    links: NavLink[];
};

const Nav = ({ links }: NavigationProps) => {
    return (
        <nav className={classes.nav} aria-label="Main Navigation">
            <ul className={classes.navList}>
                {links.map(link => (
                    <NavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
};

const NavItem = ({ link }: { link: NavLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <li
            className={classes.navItem}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={link.href} className={classes.navLink}>
                <div className={classes.linkGrid}>
                    <span>{link.label}</span>
                    {link.subMenu && (
                        <button
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            className={classes.dropdownToggle}
                            onClick={() => setIsOpen(!isOpen)}
                            onKeyDown={handleKeyDown}
                            type="button"
                        >
                            <span aria-hidden="true" className={classes.iconWrapper}>
                                <DropdownChevron
                                    fill={isHovered ? 'var(--nav-link-hover-color)' : 'var(--nav-link-color)'}
                                />
                            </span>
                        </button>
                    )}
                </div>
            </a>

            {link.subMenu && isOpen && (
                <ul className={classes.subMenu}>
                    {link.subMenu.map(subLink => (
                        <li key={subLink.label}>
                            <a href={subLink.href} className={classes.subMenuLink}>
                                {subLink.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Nav;
