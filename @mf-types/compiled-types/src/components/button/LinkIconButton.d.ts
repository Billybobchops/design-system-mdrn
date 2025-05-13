import type { Spacing } from '@styles/spacing';
import React from 'react';
interface IconButtonProps {
    ariaLabel?: string;
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text?: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
