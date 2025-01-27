import { SelectChevron } from '@components/Icon';
import HelperText from '@components/form/HelperText';
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
    // onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    options,
    // onChange,
}) => {
    const selectID = useId();
    const helperID = useId();

    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     onChange(e.target.value);
    // };

    return (
        <div className={classes.selectContainer}>
            <Label inputID={selectID} label={label} required={required} />
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
                <SelectChevron fill={'var(--utility-neutral-70)'} />
            </div>
            <HelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default Select;
