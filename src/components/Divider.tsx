import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './Divider.module.scss';

interface DividerProps {
    isDark: boolean;
    spacing?: Spacing | Spacing[];
}

const Divider: React.FC<DividerProps> = ({ isDark, spacing }) => {
    return <hr className={clsx(isDark ? classes.dividerDark : classes.dividerLight, spacing)} />;
};

export default Divider;
