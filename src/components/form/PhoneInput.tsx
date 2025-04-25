import HelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './Input.module.scss';

interface PhoneInputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}

const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    spacing,
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
        const formatted = formatPhoneNumber(e.target.value);
        setValue(name, formatted, { shouldValidate: false });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setValue(name, formatted, { shouldValidate: true });
    };

    return (
        <div className={clsx(classes.inputContainer, spacing)}>
            <Label inline={false} inputID={inputID} label={label} required={required} />
            <input
                {...register(name, {
                    required: required ? 'Phone number is required' : false,
                    pattern: { value: /^\(\d{3}\) \d{3}-\d{4}$/, message: 'Invalid phone number format' },
                })}
                aria-invalid={hasError}
                aria-describedby={helperID}
                className={clsx(classes.input, { [classes.error]: hasError })}
                disabled={disabled}
                id={inputID}
                type="tel"
                defaultValue={getValues(name) || ''}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <HelperText helperID={helperID} helperText={helperText} error={hasError ? errorMessage : undefined} />
        </div>
    );
};

export default PhoneInput;
