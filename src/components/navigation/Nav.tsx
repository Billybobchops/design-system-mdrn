import { DropdownChevron } from '@components/Icon';
import { NavLink } from '@modern-js/runtime/router';
import { useState } from 'react';
import classes from './Nav.module.scss';
import type { NavigationLink } from './types';

type NavigationProps = {
    links: NavigationLink[];
    isMobileNavOpen: boolean;
};

const Nav = ({ links, isMobileNavOpen }: NavigationProps) => {
    return (
        <nav className={`${classes.nav} ${isMobileNavOpen ? classes.navOpen : ''}`} aria-label="Main Navigation">
            <ul className={classes.navList}>
                {links.map(link => (
                    <NavItem key={link.label} link={link} />
                ))}
            </ul>
        </nav>
    );
};

const NavItem = ({ link }: { link: NavigationLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(prev => !prev);
        }
    };

    return (
        <li
            className={classes.navItem}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsOpen(false);
            }}
        >
            <div className={`${classes.linkGrid} ${link.subMenu ? '' : classes.linkGridSingleColumn}`}>
                <NavLink to={link.href} className={classes.navLink}>
                    {!link.iconOnly && <span>{link.label}</span>}
                    {link.icon && link.icon}
                </NavLink>

                {link.subMenu && (
                    <button
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={classes.dropdownToggle}
                        onClick={() => setIsOpen(prev => !prev)}
                        onKeyDown={handleKeyDown}
                        type="button"
                    >
                        <span
                            aria-hidden="true"
                            className={`${classes.iconWrapper} ${isOpen ? classes.iconRotate : ''}`}
                        >
                            <DropdownChevron
                                fill={isHovered ? 'var(--nav-link-hover-color)' : 'var(--nav-link-color)'}
                            />
                        </span>
                    </button>
                )}
            </div>

            {link.subMenu && isOpen && (
                <ul className={classes.subMenu}>
                    {link.subMenu.map(subLink => (
                        <NavItem key={subLink.label} link={subLink} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Nav;
