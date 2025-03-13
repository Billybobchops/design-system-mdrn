interface AlertProps {
    content: string;
    isDismissable: boolean;
    variant: 'default' | 'warning' | 'error' | 'success';
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
