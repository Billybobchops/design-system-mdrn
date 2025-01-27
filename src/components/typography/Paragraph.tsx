import classes from './Paragraph.module.scss';

interface ParagraphProps {
    children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
    return <p className={classes.paragraph}>{children}</p>;
};

export default Paragraph;
