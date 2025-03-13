import classes from './Label.module.scss';

interface LabelProps {
    children?: React.ReactNode;
    inline: boolean;
    inputID: string;
    label?: string;
    required?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, inline, inputID, label, required }) => {
    return (
        <label className={inline ? classes.inlineLabel : classes.label} htmlFor={inputID}>
            {label}
            {required && !inline && <span className={classes.required}> *</span>}
            {children}
        </label>
    );
};

export default Label;
