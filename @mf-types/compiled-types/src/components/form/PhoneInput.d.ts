import type { Spacing } from '@styles/spacing';
interface PhoneInputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}
declare const PhoneInput: React.FC<PhoneInputProps>;
export default PhoneInput;
