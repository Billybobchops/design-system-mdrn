import classes from './SecondaryButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}

const SecondaryButton: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    type = 'button',
    variant = 'blue',
}) => {
    return (
        <button
            className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
        >
            {text}
        </button>
    );
};

export default SecondaryButton;
