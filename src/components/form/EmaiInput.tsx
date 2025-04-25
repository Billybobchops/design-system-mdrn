import type { Spacing } from '@styles/spacing';
import TextInput from './TextInput';

interface EmailInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}

const EmailInput: React.FC<EmailInputProps> = ({
    disabled = false,
    helperText = '',
    label = 'Email',
    name = 'email',
    placeholder = '',
    required = false,
    spacing,
}) => {
    return (
        <TextInput
            label={label}
            disabled={disabled}
            helperText={helperText}
            placeholder={placeholder}
            required={required}
            spacing={spacing}
            name={name}
            rules={{
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                },
            }}
        />
    );
};

export default EmailInput;
