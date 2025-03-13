interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
