import type { Spacing } from '@styles/spacing';
import { useFormContext } from 'react-hook-form';
import TextInput from './TextInput';

interface MonetaryInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
    min?: number;
    max?: number;
    step?: number;
}

const MonetaryInput: React.FC<MonetaryInputProps> = ({
    disabled = false,
    helperText = '',
    label = 'Amount',
    name = 'amount',
    placeholder = '',
    required = false,
    spacing,
    min = 0,
    max,
    step = 0.01,
}) => {
    const { setValue } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Allow empty input (lets user clear the field)
        if (inputValue === '') {
            setValue(name, '', { shouldValidate: false });
            return;
        }

        const numValue = Number.parseFloat(inputValue);

        // Skip if not a valid number (let user keep typing)
        if (Number.isNaN(numValue)) return;

        // Enforce boundaries
        const clampedValue = Math.max(min, max ? Math.min(numValue, max) : numValue);

        // Update value without validation
        setValue(name, clampedValue, { shouldValidate: false });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        let numValue = Number.parseFloat(e.target.value);

        // Handle empty/invalid input
        if (Number.isNaN(numValue)) {
            numValue = min; // Default to min value
        }

        // Apply step precision and boundaries
        const steppedValue = Math.round(numValue / step) * step;
        const finalValue = Math.max(min, max ? Math.min(steppedValue, max) : steppedValue);

        // Format and validate
        setValue(name, finalValue.toFixed(2), { shouldValidate: true });
    };

    return (
        <TextInput
            adornment={<span>$</span>}
            adornmentPosition="left"
            disabled={disabled}
            helperText={helperText}
            label={label}
            name={name}
            placeholder={placeholder}
            required={required}
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
            spacing={spacing}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default MonetaryInput;
