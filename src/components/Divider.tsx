import classes from './Divider.module.scss';

interface DividerProps {
    isDark: boolean;
}

const Divider: React.FC<DividerProps> = ({ isDark }) => {
    return <hr className={isDark ? classes.dividerDark : classes.dividerLight} />;
};

export default Divider;
