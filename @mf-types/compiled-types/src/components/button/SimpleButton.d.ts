import type { Spacing } from '@styles/spacing';
interface SimpleButtonProps {
    clickHandler: () => void;
    disabled?: boolean;
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const SimpleButton: React.FC<SimpleButtonProps>;
export default SimpleButton;
