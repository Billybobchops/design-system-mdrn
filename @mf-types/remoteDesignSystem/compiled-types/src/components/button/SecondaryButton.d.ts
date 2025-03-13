interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const SecondaryButton: React.FC<ButtonProps>;
export default SecondaryButton;
