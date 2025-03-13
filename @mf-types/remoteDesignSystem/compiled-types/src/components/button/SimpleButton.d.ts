interface SimpleButtonProps {
    clickHandler: () => void;
    disabled?: boolean;
    text: string;
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const SimpleButton: React.FC<SimpleButtonProps>;
export default SimpleButton;
