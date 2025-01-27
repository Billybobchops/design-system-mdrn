import classes from './UnorderedList.module.scss';

interface UnorderedListProps {
    items: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
    return (
        <ul className={classes.list}>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default UnorderedList;
