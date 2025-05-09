import InlineLink from '@components/InlineLink';
import classes from './Footer.module.scss';

export interface Link {
    label?: string;
    href: string;
    variant: 'grey' | 'blue';
    imageSrc?: string;
    imageAlt?: string;
}

interface FooterProps {
    logo: React.ReactNode;
    links: Link[];
}

const Footer: React.FC<FooterProps> = ({ logo, links }) => {
    return (
        <footer className={classes.container}>
            <span className={classes.logo}>{logo}</span>

            {links.map(link =>
                link.imageSrc ? (
                    <span key={link.label} className={classes.flex}>
                        <img src={link.imageSrc} alt={link.imageAlt || ''} />
                        <InlineLink href={link.href} variant={link.variant}>
                            {link.label}
                        </InlineLink>
                    </span>
                ) : (
                    <InlineLink key={link.label} href={link.href} variant={link.variant}>
                        {link.label}
                    </InlineLink>
                ),
            )}
        </footer>
    );
};

export default Footer;
