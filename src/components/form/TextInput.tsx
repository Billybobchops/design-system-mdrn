import HelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegisterOptions } from 'react-hook-form';
import classes from './TextInput.module.scss';

interface TextInputProps {
    adornment?: React.ReactNode;
    adornmentPosition?: 'left' | 'right';
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    rules?: RegisterOptions;
    spacing?: Spacing | Spacing[];
    type?: 'text' | 'email' | 'password' | 'number';
}

const TextInput: React.FC<TextInputProps> = ({
    adornment,
    adornmentPosition = 'left',
    disabled = false,
    helperText = '',
    label,
    name,
    placeholder = '',
    required = false,
    rules = {},
    spacing,
    type = 'text',
}) => {
    const inputID = useId();
    const helperID = useId();
    const {
        register,
        setValue,
        getValues,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors[name]?.message?.toString();
    const hasError = !!errorMessage;

    return (
        <div className={clsx(classes.inputContainer, spacing)}>
            <Label inline={false} inputID={inputID} label={label} required={required} />

            <div className={classes.inputInnerContainer}>
                {adornment && (
                    <div
                        className={clsx(classes.inputAdornment, {
                            [classes.adornmentRight]: adornmentPosition === 'right',
                        })}
                    >
                        {adornment}
                    </div>
                )}
                <input
                    aria-invalid={hasError}
                    aria-describedby={helperID}
                    className={clsx(classes.input, {
                        [classes.error]: hasError,
                        [classes.inputPaddingRight]: adornment && adornmentPosition === 'right',
                        [classes.inputPaddingLeft]: adornment && adornmentPosition === 'left',
                    })}
                    disabled={disabled}
                    id={inputID}
                    placeholder={placeholder}
                    type={type}
                    defaultValue={getValues(name) || ''}
                    {...register(name, {
                        required: required ? 'This field is required' : false,
                        ...rules, // Spread any additional rules passed via props
                        onChange: e => {
                            const value = e.target.value;
                            setValue(name, value, { shouldValidate: false });
                        },
                        onBlur: e => {
                            const value = e.target.value;
                            setValue(name, value, { shouldValidate: true });
                        },
                    })}
                />
            </div>

            <HelperText helperID={helperID} helperText={helperText} error={hasError ? errorMessage : undefined} />
        </div>
    );
};

export default TextInput;
