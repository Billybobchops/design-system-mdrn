import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import classes from './LinkIconButton.module.scss';

interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}

const IconButton: React.FC<IconButtonProps> = ({
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
    const getFillColor = (variant: string, disabled: boolean) => {
        if (disabled) {
            return { fill: 'var(--utility-neutral-60)', hoverFill: 'var(--utility-neutral-60)' };
        }
        switch (variant) {
            case 'blue':
                return { fill: 'var(--theme-a-4)', hoverFill: 'var(--theme-a-3)' };
            case 'green':
                return { fill: 'var(--utility-green-70)', hoverFill: 'var(--utility-green-80)' };
            case 'red':
                return { fill: 'var(--utility-red-50)', hoverFill: 'var(--utility-red-70)' };
            default:
                return { fill: 'var(--utility-neutral-60)', hoverFill: 'var(--utility-neutral-60)' };
        }
    };
    const fillColor = isHovered ? getFillColor(variant, disabled).hoverFill : getFillColor(variant, disabled).fill;

    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type={type}
        >
            {icon && iconPosition === 'start' && (
                <span aria-hidden="true" className={classes.iconStart}>
                    {React.cloneElement(icon, { fill: fillColor })}
                </span>
            )}
            <span>{text}</span>
            {icon && iconPosition === 'end' && (
                <span aria-hidden="true" className={classes.iconEnd}>
                    {React.cloneElement(icon, { fill: fillColor })}
                </span>
            )}
        </button>
    );
};

export default IconButton;
