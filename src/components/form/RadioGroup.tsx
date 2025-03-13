import Fieldset from '@components/form/Fieldset';
import Label from '@components/form/Label';
import { useState } from 'react';
import classes from './RadioGroup.module.scss';
interface RadioGroupProps {
    legend: string;
    options: { id: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ legend, options }) => {
    const [selected, setSelected] = useState(options[0]);
    const onOptionChange = (index: number) => {
        setSelected(options[index]);
    };

    return (
        <Fieldset legend={legend}>
            {options.map((option, i) => {
                return (
                    <Label inline={true} inputID={option.id} key={option.id}>
                        <input
                            checked={selected.id === option.id}
                            className={classes.radio}
                            id={option.id}
                            onChange={() => onOptionChange(i)}
                            type="radio"
                            value={option.id}
                        />
                        {option.id}
                    </Label>
                );
            })}
        </Fieldset>
    );
};

export default RadioGroup;
