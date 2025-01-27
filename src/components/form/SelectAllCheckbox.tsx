import classes from './SelectAllCheckbox.module.scss';

interface SelectAllCheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
    partialCheck: boolean;
}

const SelectAllCheckbox: React.FC<SelectAllCheckboxProps> = ({
    checked,
    disabled = false,
    id,
    onChange,
    partialCheck = false,
}) => {
    return (
        <input
            aria-checked={checked}
            checked={checked}
            className={`${classes.checkbox} ${partialCheck ? classes.partialCheck : ''}`}
            disabled={disabled}
            id={id}
            name={id}
            onChange={onChange}
            type="checkbox"
            value={id}
        />
    );
};

export default SelectAllCheckbox;
