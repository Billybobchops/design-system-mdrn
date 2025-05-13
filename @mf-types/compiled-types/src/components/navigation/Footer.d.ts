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
declare const Footer: React.FC<FooterProps>;
export default Footer;
