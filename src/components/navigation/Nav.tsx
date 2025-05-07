import { DropdownChevron } from '@components/Icon';
import { NavLink } from '@modern-js/runtime/router';
import { useEffect, useRef, useState } from 'react';
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
    const navItemRef = useRef<HTMLLIElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(prev => !prev);
        }
    };

    useEffect(() => {
        if (!isOpen) return; // Only add listeners when dropdown is open

        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click was outside our nav item
            if (navItemRef.current && !navItemRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        // Clean up event listeners on unmount or when dropdown closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen]);

    return (
        <li
            className={`${classes.navItem} ${isOpen ? classes.isActive : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={navItemRef}
        >
            <div className={`${classes.linkGrid} ${link.subMenu ? '' : classes.linkGridSingleColumn}`}>
                {link.href ? (
                    <NavLink to={link.href} className={classes.navLink}>
                        <span className={classes.labelContent}>
                            {!link.iconOnly && !link.mobileOnlyText && <span>{link.label}</span>}
                            {link.mobileOnlyText && <span className={classes.mobileLabel}>{link.label}</span>}
                            {link.icon && link.icon}
                        </span>
                    </NavLink>
                ) : (
                    <button className={classes.navLink} onClick={() => setIsOpen(prev => !prev)} type="button">
                        {!link.iconOnly && <span>{link.label}</span>}
                        {link.icon && link.icon}
                    </button>
                )}

                {link.subMenu && (
                    <button
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={classes.dropdownToggle}
                        onClick={() => setIsOpen(prev => !prev)}
                        onKeyDown={handleKeyDown}
                        type="button"
                    >
                        <span aria-hidden="true" className={`${isOpen ? classes.iconRotate : ''}`}>
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
