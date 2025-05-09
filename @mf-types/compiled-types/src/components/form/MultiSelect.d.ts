import type { Spacing } from '@styles/spacing';
import type React from 'react';
interface MultiSelectOption {
    value: string;
}
interface MultiSelectProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    onChange: (selectedValues: string[]) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    required?: boolean;
    selectedValues: string[];
    spacing?: Spacing | Spacing[];
}
declare const MultiSelect: React.FC<MultiSelectProps>;
export default MultiSelect;
