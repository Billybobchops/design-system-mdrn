import type { Spacing } from '@styles/spacing';
interface CheckboxesProps {
    legend: string;
    spacing?: Spacing | Spacing[];
    options: {
        text: string;
        id: string;
        checked: boolean;
        required?: boolean;
    }[];
}
declare const Checkboxes: React.FC<CheckboxesProps>;
export default Checkboxes;
