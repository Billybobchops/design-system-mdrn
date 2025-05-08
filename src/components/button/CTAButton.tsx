import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React, { useState } from 'react';
import classes from './CTAButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'outline';
}

const CTAButton: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    icon,
    iconPosition = 'end',
    spacing,
    text,
    type = 'button',
    variant = 'blue',
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const fillColor = (() => {
        if (disabled) {
            return 'var(--utility-neutral-60)';
        }

        if (isHovered && variant !== 'outline') {
            return 'var(--utility-neutral-0)';
        }

        if (variant === 'outline') {
            if (isHovered) {
                return 'var(--theme-a-3)';
            }
            return 'var(--theme-a-4)';
        }
    })();

    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon && iconPosition === 'start' && React.cloneElement(icon, { fill: fillColor })}
            {text}
            {icon && iconPosition === 'end' && React.cloneElement(icon, { fill: fillColor })}
        </button>
    );
};

export default CTAButton;
