import type { Spacing } from '@styles/spacing';
import type { RegisterOptions } from 'react-hook-form';
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
declare const TextInput: import("react").ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default TextInput;
