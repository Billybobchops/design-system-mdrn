import HelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { forwardRef, useId } from 'react';
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
    onKeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    ref?: React.Ref<HTMLInputElement>;
    required?: boolean;
    rules?: RegisterOptions;
    spacing?: Spacing | Spacing[];
    step?: number;
    type?: 'text' | 'email' | 'password' | 'number';
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
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
            onKeydown,
            placeholder = '',
            required = false,
            rules = {},
            spacing,
            step = 0.01,
            type = 'text',
        },
        ref,
    ) => {
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
            propOnChange?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setValue(name, value, { shouldValidate: true });
            propOnBlur?.(e);
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
                        onKeyDown={onKeydown}
                        ref={ref}
                        defaultValue={getValues(name) || ''}
                        disabled={disabled}
                        id={inputID}
                        inputMode={inputMode}
                        max={max}
                        min={min}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={placeholder}
                        step={step}
                        type={type}
                    />
                </div>
                <HelperText helperID={helperID} helperText={helperText} error={hasError ? errorMessage : undefined} />
            </div>
        );
    },
);

export default TextInput;
