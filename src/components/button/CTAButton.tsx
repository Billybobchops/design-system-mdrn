import React from 'react';
import classes from './CTAButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green';
}

const CTAButton: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    icon,
    iconPosition = 'end',
    text,
    type = 'button',
    variant = 'blue',
}) => {
    const fillColor = disabled ? 'var(--utility-neutral-60)' : 'var(--utility-neutral-0)';

    return (
        <button
            className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
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
