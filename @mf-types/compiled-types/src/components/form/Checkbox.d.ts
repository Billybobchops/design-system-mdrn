import type { Spacing } from '@styles/spacing';
interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    onChange: () => void;
    spacing?: Spacing | Spacing[];
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
