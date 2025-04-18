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
    inputMode?: 'text' | 'numeric' | 'decimal' | 'search' | 'none';
    label: string;
    max?: number;
    min?: number;
    name: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    rules?: RegisterOptions;
    spacing?: Spacing | Spacing[];
    step?: number;
    type?: 'text' | 'email' | 'password' | 'number';
}

const TextInput: React.FC<TextInputProps> = ({
    adornment,
    adornmentPosition = 'left',
    disabled = false,
    helperText = '',
    inputMode = 'text',
    label,
    max,
    min,
    name,
    onBlur: propOnBlur,
    onChange: propOnChange,
    placeholder = '',
    required = false,
    rules = {},
    spacing,
    step = 0.01,
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(name, value, { shouldValidate: false });
        propOnChange?.(e); // Call prop if provided
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(name, value, { shouldValidate: true });
        propOnBlur?.(e); // Call prop if provided
    };

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
                    {...register(name, {
                        required: required ? 'This field is required' : false,
                        ...rules,
                    })}
                    aria-invalid={hasError}
                    aria-describedby={helperID}
                    className={clsx(classes.input, {
                        [classes.error]: hasError,
                        [classes.inputPaddingRight]: adornment && adornmentPosition === 'right',
                        [classes.inputPaddingLeft]: adornment && adornmentPosition === 'left',
                    })}
                    disabled={disabled}
                    id={inputID}
                    inputMode={inputMode}
                    min={min}
                    max={max}
                    placeholder={placeholder}
                    step={step}
                    type={type}
                    defaultValue={getValues(name) || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <HelperText helperID={helperID} helperText={helperText} error={hasError ? errorMessage : undefined} />
        </div>
    );
};

export default TextInput;
