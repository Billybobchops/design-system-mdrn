import type { Spacing } from '@styles/spacing';
interface RadioGroupProps {
    legend: string;
    options: {
        id: string;
    }[];
    spacing?: Spacing | Spacing[];
}
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
