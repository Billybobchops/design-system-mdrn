import InputHelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Input.module.scss';

interface InputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
    type: 'text' | 'number';
}

const Input: React.FC<InputProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    spacing,
    type,
}) => {
    const inputID = useId();
    const helperID = useId();
    const { register } = useForm();

    return (
        <div className={clsx(classes.inputContainer, spacing)}>
            <Label inline={false} inputID={inputID} label={label} required={required} />
            <input
                aria-invalid={false}
                aria-describedby={helperID}
                className={classes.input}
                disabled={disabled}
                id={inputID}
                // name={name}
                required={required}
                {...register(name)}
                type={type}
            />
            <InputHelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default Input;
