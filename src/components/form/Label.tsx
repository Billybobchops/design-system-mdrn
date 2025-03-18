import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './Label.module.scss';

interface LabelProps {
    children?: React.ReactNode;
    inline: boolean;
    inputID: string;
    label?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}

const Label: React.FC<LabelProps> = ({ children, inline, inputID, label, required, spacing }) => {
    return (
        <label className={clsx(inline ? classes.inlineLabel : classes.label, spacing)} htmlFor={inputID}>
            {label}
            {required && !inline && <span className={classes.required}> *</span>}
            {children}
        </label>
    );
};

export default Label;
