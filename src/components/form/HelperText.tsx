import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './HelperText.module.scss';

interface HelperTextProps {
    helperID: string;
    helperText?: string;
    error?: string;
    spacing?: Spacing | Spacing[];
}

const HelperText: React.FC<HelperTextProps> = ({ helperID, helperText, error, spacing }) => {
    return (
        <span className={clsx(classes.helperText, { [classes.errorText]: !!error }, spacing)} id={helperID}>
            {error || helperText}
        </span>
    );
};

export default HelperText;
