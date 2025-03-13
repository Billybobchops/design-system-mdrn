import React from 'react';
interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green';
}
declare const CTAButton: React.FC<ButtonProps>;
export default CTAButton;
