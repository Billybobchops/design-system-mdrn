import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './Fieldset.module.scss';

interface FieldsetProps {
    legend: string;
    children?: React.ReactNode;
    spacing?: Spacing | Spacing[];
}

const Fieldset: React.FC<FieldsetProps> = ({ children, spacing, legend }) => {
    return (
        <fieldset className={clsx(classes.fieldset, spacing)}>
            <legend className={classes.legend}>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default Fieldset;
