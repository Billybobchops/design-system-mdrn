import classes from './HelperText.module.scss';

interface HelperTextProps {
    helperID: string;
    helperText: string;
}

const HelperText: React.FC<HelperTextProps> = ({ helperID, helperText }) => {
    return (
        <span className={classes.helperText} id={helperID}>
            {helperText}
        </span>
    );
};

export default HelperText;
