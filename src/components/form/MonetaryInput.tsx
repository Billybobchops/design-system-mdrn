import HelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import classes from './MonetaryInput.module.scss';

interface MonetaryInput {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
}

const MonetaryInput: React.FC<MonetaryInput> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    spacing,
}) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <div className={clsx(classes.inputContainer, spacing)}>
            <Label inline={false} inputID={inputID} label={label} required={required} />
            <div className={classes.inputInnerContainer}>
                <div className={classes.inputAdornment}>$</div>
                <input
                    aria-invalid={false}
                    aria-describedby={helperID}
                    className={classes.input}
                    disabled={disabled}
                    id={inputID}
                    name={name}
                    required={required}
                    type="number"
                />
            </div>
            <HelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default MonetaryInput;
