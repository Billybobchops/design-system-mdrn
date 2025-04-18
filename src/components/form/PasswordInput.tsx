import type { Spacing } from '@styles/spacing';
import { useState } from 'react';
import classes from './PasswordInput.module.scss';
import TextInput from './TextInput';

interface PasswordInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    disabled = false,
    helperText = 'Use a strong password',
    label = 'Password',
    name = 'password',
    placeholder = '',
    required = false,
    spacing,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const checkPasswordStrength = (password: string) => {
        if (!password) return 'Password is required';

        const rules = [
            { test: (p: string) => p.length >= 8, message: '8+ characters' },
            { test: (p: string) => /[A-Z]/.test(p), message: '1 uppercase letter' },
            { test: (p: string) => /[a-z]/.test(p), message: '1 lowercase letter' },
            { test: (p: string) => /[0-9]/.test(p), message: '1 number' },
            { test: (p: string) => /[^A-Za-z0-9]/.test(p), message: '1 special character' },
        ];

        const failedRules = rules.filter(rule => !rule.test(password));

        if (failedRules.length > 0) {
            return `Weak password. Missing: ${failedRules.map(r => r.message).join(', ')}`;
        }

        return true; // Validation passes
    };

    return (
        <TextInput
            adornment={
                <button
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className={classes.toggleButton}
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            }
            adornmentPosition="right"
            disabled={disabled}
            label={label}
            helperText={helperText}
            placeholder={placeholder}
            required={required}
            rules={{
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                },
                validate: {
                    strength: checkPasswordStrength, // Custom validator
                    noSpaces: value => !value.includes(' ') || 'Spaces are not allowed',
                },
            }}
            spacing={spacing}
            name={name}
            type={showPassword ? 'text' : 'password'}
        />
    );
};

export default PasswordInput;
