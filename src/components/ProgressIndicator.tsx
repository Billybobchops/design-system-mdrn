import classes from './ProgressIndicator.module.scss';

interface ProgressIndicatorProps {
    activeStep: 1 | 2 | 3;
    stepTitles?: string[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    activeStep,
    stepTitles = ['Customer Payment Information', 'Payment Options', 'Payment Confirmation'],
}) => {
    return (
        <div aria-live="polite" aria-valuemax={stepTitles.length} aria-valuemin={1} aria-valuenow={activeStep}>
            <ol className={classes.stepList}>
                {stepTitles.map((title, index) => (
                    <li
                        key={title}
                        aria-current={activeStep === index + 1 ? 'step' : undefined}
                        className={`${classes.step} ${activeStep === index + 1 ? classes.active : ''}`}
                    >
                        {title}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProgressIndicator;
