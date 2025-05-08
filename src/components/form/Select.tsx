import { ChevronDown } from '@components/Icon';
import HelperText from '@components/form/HelperText';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import Label from './Label';
import classes from './Select.module.scss';

interface SelectOption {
    value: string;
}

interface SelectProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    options: SelectOption[];
    spacing?: Spacing | Spacing[];
    // onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    options,
    spacing,
    // onChange,
}) => {
    const selectID = useId();
    const helperID = useId();

    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     onChange(e.target.value);
    // };

    return (
        <div className={clsx(classes.selectContainer, spacing)}>
            <Label inline={false} inputID={selectID} label={label} required={required} />
            <div className={classes.chevronPositioning}>
                <select
                    aria-describedby={helperID}
                    aria-invalid={false}
                    className={classes.select}
                    disabled={disabled}
                    id={selectID}
                    name={name}
                    // onChange={handleChange}
                    required={required}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>
                <ChevronDown fill={'var(--utility-neutral-70)'} />
            </div>
            <HelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default Select;
