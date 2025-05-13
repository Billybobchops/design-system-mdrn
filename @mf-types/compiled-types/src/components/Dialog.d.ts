interface DialogProps {
    handleDialogAction?: () => void;
    actionButtonText?: string;
    children: React.ReactNode;
    color?: string;
    hasAction?: boolean;
    title?: string;
    TriggerElement: React.FC<{
        clickHandler: () => void;
    }>;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
