import type { Spacing } from '@styles/spacing';
interface LabelProps {
    children?: React.ReactNode;
    inline: boolean;
    inputID: string;
    label?: string;
    required?: boolean;
    spacing?: Spacing | Spacing[];
}
declare const Label: React.FC<LabelProps>;
export default Label;
