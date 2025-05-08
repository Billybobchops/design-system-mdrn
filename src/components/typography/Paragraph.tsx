import clsx from 'clsx';
import classes from './Paragraph.module.scss';

interface ParagraphProps {
    children: React.ReactNode;
    size?: 'xs' | 's';
}

const Paragraph: React.FC<ParagraphProps> = ({ children, size }) => {
    return (
        <p className={clsx(classes.paragraph, size === 's' && classes.s, size === 'xs' && classes.xs)}>{children}</p>
    );
};

export default Paragraph;
