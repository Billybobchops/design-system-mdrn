import type { Spacing } from '@styles/spacing';
interface DatePickerInputProps {
    helperText?: string;
    label: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
}
declare const DatePickerInput: React.FC<DatePickerInputProps>;
export default DatePickerInput;
