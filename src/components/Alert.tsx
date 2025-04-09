import { ErrorIcon, Info, MenuClose, Success, Warning } from '@components/Icon';
import VisuallyHidden from '@components/accessibility/VisuallyHidden';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useState } from 'react';
import classes from './Alert.module.scss';

interface AlertProps {
    children?: React.ReactNode;
    isDismissable: boolean;
    spacing?: Spacing | Spacing[];
    variant: 'default' | 'warning' | 'error' | 'success';
}

const Alert: React.FC<AlertProps> = ({ children, isDismissable, spacing, variant }) => {
    const [isActive, setIsActive] = useState(true);
    const getFillColor = (variant: string) => {
        switch (variant) {
            case 'default':
                return 'var(--theme-a-4)';
            case 'warning':
                return 'var(--utility-yellow-80)';
            case 'error':
                return 'var(--utility-red-60)';
            case 'success':
                return 'var(--utility-green-80)';
            default:
                return 'var(--theme-a-4)';
        }
    };

    let symbol = <Info fill={getFillColor(variant)} />;
    if (variant === 'error') {
        symbol = <ErrorIcon fill={getFillColor(variant)} />;
    } else if (variant === 'warning') {
        symbol = <Warning fill={getFillColor(variant)} />;
    } else if (variant === 'success') {
        symbol = <Success fill={getFillColor(variant)} />;
    }

    return (
        <>
            {isActive && (
                <div role="alert" className={clsx(classes.alert, classes[variant], spacing)}>
                    <span aria-hidden="true">{symbol}</span>
                    {children}
                    {isDismissable && (
                        <button className={classes.button} onClick={() => setIsActive(false)} type="button">
                            <MenuClose fill={getFillColor(variant)} />
                            <VisuallyHidden>close alert</VisuallyHidden>
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

export default Alert;
