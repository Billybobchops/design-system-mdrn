import type { Spacing } from '@styles/spacing';
interface SelectAllCheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
    partialCheck: boolean;
    spacing?: Spacing | Spacing[];
}
declare const SelectAllCheckbox: React.FC<SelectAllCheckboxProps>;
export default SelectAllCheckbox;
