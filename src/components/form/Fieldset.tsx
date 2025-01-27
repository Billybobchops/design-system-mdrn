import classes from './Fieldset.module.scss';

interface FieldsetProps {
    legend: string;
    children?: React.ReactNode;
}

const Fieldset: React.FC<FieldsetProps> = ({ children, legend }) => {
    return (
        <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default Fieldset;
