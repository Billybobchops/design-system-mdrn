interface SelectOption {
    value: string;
}
interface SelectProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    options: SelectOption[];
}
declare const Select: React.FC<SelectProps>;
export default Select;
