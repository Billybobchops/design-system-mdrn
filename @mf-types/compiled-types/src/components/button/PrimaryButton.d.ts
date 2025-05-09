import type { Spacing } from '@styles/spacing';
import React from 'react';
interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const PrimaryButton: React.FC<ButtonProps>;
export default PrimaryButton;
