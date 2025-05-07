import MenuToggle from '@components/navigation/MenuToggle';
import Nav from '@components/navigation/Nav';
import { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import type { NavigationLink } from './types';

interface HeaderProps {
    homeLink: string;
    logoAltText: string;
    logoSrc: string;
    navLinks: NavigationLink[];
}

const Header: React.FC<HeaderProps> = ({ homeLink, logoAltText, logoSrc, navLinks }) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Prevent scrolling when mobile nav is open
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to ensure scrolling is restored when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileNavOpen]);

    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileNavOpen) {
                setIsMobileNavOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isMobileNavOpen]);

    const handleBackdropClick = () => {
        setIsMobileNavOpen(false);
    };

    return (
        <>
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

            {isMobileNavOpen && (
                <div
                    className={classes.backdrop}
                    onClick={handleBackdropClick}
                    onKeyDown={e => {
                        if (e.key === 'Escape') {
                            handleBackdropClick();
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Close navigation"
                />
            )}
        </>
    );
};

export default Header;
