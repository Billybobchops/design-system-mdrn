import classes from './Checkbox.module.scss';

interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled = false, id, onChange }) => {
    return (
        <input
            aria-checked={checked}
            checked={checked}
            className={classes.checkbox}
            disabled={disabled}
            id={id}
            name={id}
            onChange={onChange}
            type="checkbox"
            value={id}
        />
    );
};

export default Checkbox;
