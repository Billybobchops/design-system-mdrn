import type { Spacing } from '@styles/spacing';
interface EmailInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}
declare const EmailInput: React.FC<EmailInputProps>;
export default EmailInput;
