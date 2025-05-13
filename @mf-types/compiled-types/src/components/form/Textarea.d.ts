import type { Spacing } from '@styles/spacing';
interface TextareaProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
}
declare const Textarea: React.FC<TextareaProps>;
export default Textarea;
