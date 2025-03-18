import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import type React from 'react';
import classes from './IconButton.module.scss';

interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
    spacing?: Spacing | Spacing[];
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}

const IconButton: React.FC<IconButtonProps> = ({
    clickHandler,
    disabled = false,
    icon,
    spacing,
    type = 'button',
    variant = 'blue',
}) => {
    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
        >
            {icon}
        </button>
    );
};

export default IconButton;
