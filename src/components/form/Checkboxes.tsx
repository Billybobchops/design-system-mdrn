import Checkbox from '@components/form/Checkbox';
import Fieldset from '@components/form/Fieldset';
import Label from '@components/form/Label';
import type { Spacing } from '@styles/spacing';
import { useState } from 'react';

interface CheckboxesProps {
    legend: string;
    spacing?: Spacing | Spacing[];
    options: { text: string; id: string; checked: boolean; required?: boolean }[];
}

const Checkboxes: React.FC<CheckboxesProps> = ({ legend, spacing, options }) => {
    const [checkedItems, setCheckedItems] = useState(options);
    const handleChange = (index: number) => {
        setCheckedItems(
            checkedItems.map((item, curIndex) => {
                return curIndex === index ? { ...item, checked: !item.checked } : item;
            }),
        );
    };

    return (
        <Fieldset legend={legend} spacing={spacing}>
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
