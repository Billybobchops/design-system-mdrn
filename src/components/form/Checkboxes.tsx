import Checkbox from '@components/form/Checkbox';
import Fieldset from '@components/form/Fieldset';
import Label from '@components/form/Label';
import { useState } from 'react';
import classes from './Checkboxes.module.scss';

interface CheckboxesProps {
    legend: string;
    options: { text: string; id: string; checked: boolean; required?: boolean }[];
}

const Checkboxes: React.FC<CheckboxesProps> = ({ legend, options }) => {
    const [checkedItems, setCheckedItems] = useState(options);
    const handleChange = (index: number) => {
        setCheckedItems(
            checkedItems.map((item, curIndex) => {
                return curIndex === index ? { ...item, checked: !item.checked } : item;
            }),
        );
    };

    return (
        <Fieldset legend={legend}>
            {checkedItems.map((item, i) => {
                return (
                    <Label inline={true} key={item.id} inputID={item.id} required={item.required}>
                        <Checkbox checked={item.checked} id={item.id} onChange={() => handleChange(i)} />
                        {item.text}
                    </Label>
                );
            })}
        </Fieldset>
    );
};

export default Checkboxes;
