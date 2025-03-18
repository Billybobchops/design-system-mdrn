import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './InlineLink.module.scss';

interface LinkProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    spacing?: Spacing | Spacing[];
    target?: string;
    variant?: 'blue' | 'grey';
}

const InlineLink: React.FC<LinkProps> = ({
    children,
    onClick,
    href = '#',
    spacing,
    target = '_blank',
    variant = 'blue',
}) => {
    return (
        <a className={clsx(classes.link, classes[variant], spacing)} href={href} onClick={onClick} target={target}>
            {children}
        </a>
    );
};

export default InlineLink;
