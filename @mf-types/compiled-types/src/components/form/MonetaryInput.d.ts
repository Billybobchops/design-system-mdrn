import type { Spacing } from '@styles/spacing';
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
declare const MonetaryInput: React.FC<MonetaryInputProps>;
export default MonetaryInput;
