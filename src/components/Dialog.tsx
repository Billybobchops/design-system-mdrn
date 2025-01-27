import { Chevron, MenuCloseLarge } from '@components/Icon';
import VisuallyHidden from '@components/accessibility/VisuallyHidden';
import PrimaryButton from '@components/button/PrimaryButton';
import SimpleButton from '@components/button/SimpleButton';
import { useCallback, useEffect, useRef } from 'react';
import classes from './Dialog.module.scss';

interface DialogProps {
    handleDialogAction?: () => void;
    actionButtonText?: string;
    children: React.ReactNode;
    color?: string;
    hasAction?: boolean;
    title?: string;
    TriggerElement: React.FC<{ clickHandler: () => void }>;
}

const Dialog: React.FC<DialogProps> = ({
    handleDialogAction,
    actionButtonText,
    hasAction = false,
    children,
    color = 'var(--theme-a-4)',
    title,
    TriggerElement,
}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const scrollPositionRef = useRef(0);

    const openDialog = () => {
        scrollPositionRef.current = window.scrollY;
        dialogRef.current?.showModal();
        document.body.style.top = `-${scrollPositionRef.current}px`;
        document.body.classList.add('no-scroll');
    };

    const closeDialog = useCallback(() => {
        dialogRef.current?.close();
        document.body.classList.remove('no-scroll');
        document.body.style.top = '';
        window.scrollTo(0, scrollPositionRef.current);
    }, []);

    useEffect(() => {
        const dialog = dialogRef.current;
        const handleBackdropClick = (e: MouseEvent) => {
            const dialogDimensions = dialog?.getBoundingClientRect();

            if (
                dialogDimensions &&
                (e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom)
            ) {
                closeDialog();
            }
        };

        dialog?.addEventListener('close', closeDialog);
        dialog?.addEventListener('click', handleBackdropClick);

        return () => {
            dialog?.removeEventListener('close', closeDialog);
            dialog?.removeEventListener('click', handleBackdropClick);
        };
    }, [closeDialog]);

    return (
        <div className={classes.dialog}>
            <TriggerElement clickHandler={openDialog} />
            <dialog ref={dialogRef}>
                <button className={classes.menuClose} onClick={closeDialog} type="button">
                    <span aria-hidden="true">
                        <MenuCloseLarge fill={color} />
                    </span>
                    <VisuallyHidden>Close Dialog</VisuallyHidden>
                </button>

                <div className={`${classes.dialogGrid} ${hasAction ? '' : classes.textCenter}`}>
                    <div>
                        {title && <h1 className={classes.dialogTitle}>{title}</h1>}
                        {children}
                    </div>

                    <div className={`${hasAction ? classes.actionBar : ''}`}>
                        <div className={`${classes.actions} ${hasAction ? '' : classes.buttonCenter}`}>
                            {hasAction && (
                                <>
                                    <SimpleButton
                                        text="cancel"
                                        clickHandler={closeDialog}
                                        disabled={false}
                                        variant="blue"
                                    />
                                    <PrimaryButton
                                        disabled={false}
                                        clickHandler={handleDialogAction}
                                        icon={<Chevron />}
                                        text={actionButtonText ? actionButtonText : ''}
                                        variant="blue"
                                    />
                                </>
                            )}
                            {!hasAction && (
                                <PrimaryButton
                                    disabled={false}
                                    clickHandler={closeDialog}
                                    icon={<Chevron />}
                                    text="Close"
                                    variant="blue"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dialog;
