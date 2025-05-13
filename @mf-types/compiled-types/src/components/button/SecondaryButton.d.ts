import type { Spacing } from '@styles/spacing';
interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const SecondaryButton: React.FC<ButtonProps>;
export default SecondaryButton;
