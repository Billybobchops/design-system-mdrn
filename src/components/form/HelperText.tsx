import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './HelperText.module.scss';

interface HelperTextProps {
    helperID: string;
    helperText: string;
    spacing?: Spacing | Spacing[];
}

const HelperText: React.FC<HelperTextProps> = ({ helperID, helperText, spacing }) => {
    return (
        <span className={clsx(classes.helperText, spacing)} id={helperID}>
            {helperText}
        </span>
    );
};

export default HelperText;
