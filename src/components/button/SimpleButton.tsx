import classes from './SimpleButton.module.scss';

interface SimpleButtonProps {
    clickHandler: () => void;
    disabled?: boolean;
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    type = 'button',
    variant = 'blue',
}) => {
    const buttonClasses = `${classes.button} ${disabled ? classes.disabled : classes[variant]}`;

    return (
        <button className={buttonClasses} disabled={disabled} onClick={clickHandler} type={type}>
            {text}
        </button>
    );
};

export default SimpleButton;
