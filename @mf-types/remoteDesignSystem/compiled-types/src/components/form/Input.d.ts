interface InputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    type: 'text' | 'tel' | 'number';
}
declare const Input: React.FC<InputProps>;
export default Input;
