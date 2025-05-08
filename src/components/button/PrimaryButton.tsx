import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React from 'react';
import classes from './PrimaryButton.module.scss';

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

const PrimaryButton: React.FC<ButtonProps> = ({
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
            <div className={classes.innerButton}>
                {icon && iconPosition === 'start' && React.cloneElement(icon, { fill: fillColor })}
                {text}
                {icon && iconPosition === 'end' && React.cloneElement(icon, { fill: fillColor })}
            </div>
        </button>
    );
};

export default PrimaryButton;
