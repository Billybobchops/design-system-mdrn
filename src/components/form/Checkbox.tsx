import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './Checkbox.module.scss';

interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
    spacing?: Spacing | Spacing[];
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled = false, id, onChange, spacing }) => {
    return (
        <input
            aria-checked={checked}
            checked={checked}
            className={clsx(classes.checkbox, spacing)}
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
