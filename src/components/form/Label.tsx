import classes from './Label.module.scss';

interface LabelProps {
    inputID: string;
    label: string;
    required: boolean;
}

const Label: React.FC<LabelProps> = ({ inputID, label, required }) => {
    return (
        <label className={classes.label} htmlFor={inputID}>
            {label}
            {required && <span className={classes.required}> *</span>}
        </label>
    );
};

export default Label;
