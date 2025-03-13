import React from 'react';
interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
