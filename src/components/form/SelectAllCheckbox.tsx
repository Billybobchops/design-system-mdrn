import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './SelectAllCheckbox.module.scss';

interface SelectAllCheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
    partialCheck: boolean;
    spacing?: Spacing | Spacing[];
}

const SelectAllCheckbox: React.FC<SelectAllCheckboxProps> = ({
    checked,
    disabled = false,
    id,
    onChange,
    partialCheck = false,
    spacing,
}) => {
    return (
        <input
            aria-checked={checked}
            checked={checked}
            className={clsx(classes.checkbox, partialCheck && classes.partialCheck, spacing)}
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
