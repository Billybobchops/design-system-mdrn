import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React from 'react';
import classes from './CTAButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green';
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
    const fillColor = disabled ? 'var(--utility-neutral-60)' : 'var(--utility-neutral-0)';

    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
        >
            {icon && iconPosition === 'start' && (
                <span aria-hidden="true" className={classes.iconStart}>
                    {React.cloneElement(icon, { fill: fillColor })}
                </span>
            )}
            {text}
            {icon && iconPosition === 'end' && (
                <span aria-hidden="true" className={classes.iconEnd}>
                    {React.cloneElement(icon, { fill: fillColor })}
                </span>
            )}
        </button>
    );
};

export default CTAButton;
