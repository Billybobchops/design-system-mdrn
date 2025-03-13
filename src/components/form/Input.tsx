import InputHelperText from '@components/form/HelperText';
import Label from '@components/form/Label';
import { useId } from 'react';
import classes from './Input.module.scss';

interface InputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    type: 'text' | 'tel' | 'number';
}

const Input: React.FC<InputProps> = ({ disabled = false, helperText = '', label, name, required = false, type }) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <div className={classes.inputContainer}>
            <Label inline={false} inputID={inputID} label={label} required={required} />
            <input
                aria-invalid={false}
                aria-describedby={helperID}
                className={classes.input}
                disabled={disabled}
                id={inputID}
                name={name}
                required={required}
                type={type}
            />
            <InputHelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default Input;
