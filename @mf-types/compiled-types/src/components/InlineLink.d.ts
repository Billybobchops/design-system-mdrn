interface LinkProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: string;
    variant?: 'blue' | 'grey';
}
declare const InlineLink: React.FC<LinkProps>;
export default InlineLink;
