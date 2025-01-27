import classes from './IconParagraph.module.scss';
import Paragraph from './Paragraph';

interface IconParagraphProps {
    content: string;
    icon: React.ReactNode;
}

const IconParagraph: React.FC<IconParagraphProps> = ({ content, icon }) => {
    return (
        <div className={classes.grid}>
            <span aria-hidden="true">{icon}</span>
            <Paragraph>{content}</Paragraph>
        </div>
    );
};

export default IconParagraph;
