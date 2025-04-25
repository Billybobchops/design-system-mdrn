import type { Spacing } from '@styles/spacing';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from './TextInput';

interface MonetaryInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    max?: number;
    min?: number;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
    step?: number;
}

const MonetaryInput: React.FC<MonetaryInputProps> = ({
    disabled = false,
    helperText = '',
    label = 'Amount',
    max,
    min = 0,
    name = 'amount',
    placeholder = '',
    required = false,
    spacing,
    step = 0.01,
}) => {
    const { setValue } = useFormContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Block 'e', 'E', '+', '-' characters
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        // Allow empty or single decimal
        if (input === '' || input === '.') {
            setValue(name, min, { shouldValidate: false });
            return;
        }

        // Enforce max 2 decimal places
        const decimalParts = input.split('.');
        if (decimalParts[1]?.length > 2) {
            e.target.value = `${decimalParts[0]}.${decimalParts[1].slice(0, 2)}`;
            return;
        }

        const numValue = Number.parseFloat(input);
        setValue(name, Number.isNaN(numValue) ? min : numValue, { shouldValidate: false });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        let numValue = Number.parseFloat(e.target.value);

        if (Number.isNaN(numValue)) {
            if (required) {
                // Let it stay NaN to trigger validation
                return;
            }
            numValue = min;
        }

        // Apply step precision and boundaries
        const steppedValue = Math.round(numValue / step) * step;
        const finalValue = Math.max(min, max ? Math.min(steppedValue, max) : steppedValue);

        // Format display without changing the actual value
        if (inputRef.current) {
            inputRef.current.value = finalValue.toFixed(2);
        }
        setValue(name, finalValue, { shouldValidate: true });
    };

    return (
        <TextInput
            adornment={<span>$</span>}
            adornmentPosition="left"
            disabled={disabled}
            helperText={helperText}
            inputMode="decimal"
            label={label}
            max={max}
            min={min}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeydown={handleKeyDown}
            placeholder={placeholder}
            ref={inputRef}
            rules={{
                required: required ? 'Amount is required' : false,
                min: {
                    value: min,
                    message: `Minimum amount is ${min}`,
                },
                ...(max && {
                    max: {
                        value: max,
                        message: `Maximum amount is ${max}`,
                    },
                }),
                valueAsNumber: true,
            }}
            required={required}
            spacing={spacing}
            step={step}
            type="number"
        />
    );
};

export default MonetaryInput;
