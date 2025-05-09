import type { Spacing } from '@styles/spacing';
interface PasswordInputProps {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}
declare const PasswordInput: React.FC<PasswordInputProps>;
export default PasswordInput;
