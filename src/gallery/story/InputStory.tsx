import { Chevron } from '@components/Icon';
import PrimaryButton from '@components/button/PrimaryButton';
import Checkboxes from '@components/form/Checkboxes';
import DatePickerInput from '@components/form/DatePicker';
import Form from '@components/form/Form';
import Input from '@components/form/Input';
import InputMonetary from '@components/form/InputMonetary';
import MultiSelect from '@components/form/MultiSelect';
import PhoneInput from '@components/form/PhoneInput';
import RadioGroup from '@components/form/RadioGroup';
import Select from '@components/form/Select';
import Textarea from '@components/form/Textarea';
import { useState } from 'react';

const InputStory = () => {
    // dummy data
    const checkboxOptions = [
        {
            text: 'Batman Begins',
            id: 'batman begins',
            checked: false,
        },
        {
            text: 'The Dark Knight',
            id: 'the dark night',
            checked: false,
        },
        {
            text: 'The Dark Knight Rises',
            id: 'the dark night rises',
            checked: false,
        },
        {
            text: 'Interstellar',
            id: 'interstellar',
            checked: false,
        },
        {
            text: 'Inception',
            id: 'inception',
            checked: false,
        },
    ];
    const radioGroupOptions = [{ id: 'Bland' }, { id: 'Medium' }, { id: 'Hot' }, { id: 'Absolute Destruction' }];

    const [selectedValues, setSelectValues] = useState<string[]>(['Real Estate', 'Utility']);

    const multiSelectOptions = [
        { value: 'Real Estate' },
        { value: 'Utility' },
        { value: 'Electric' },
        { value: 'Property Taxes' },
        { value: 'Pizza Tax' },
        { value: 'Surf Tax' },
        { value: 'Coffee Tax' },
        { value: 'Birth Certificate' },
    ];

    const onSubmit = () => {
        console.log('Form submitted!');
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Input label="First name" name="firstName" required={true} type="text" />
                <Input
                    disabled={true}
                    helperText="This is a disabled input"
                    label="Last name"
                    name="lastName"
                    required={false}
                    type="text"
                />
                <Input
                    helperText="Please enter a valid billing address."
                    label="Billing address"
                    name="billingAddress"
                    required={true}
                    type="text"
                />
                <PhoneInput
                    helperText="Please enter a valid phone number."
                    label="Phone number"
                    name="phoneNumber"
                    required={true}
                />
                <DatePickerInput
                    label="Start date of first payment"
                    helperText="Please select a date for your first payment."
                    required={true}
                />
                <Select
                    label="Select an account"
                    name="selectAccount"
                    options={[
                        { value: 'Dropdown Option 1' },
                        { value: 'Dropdown Option 2' },
                        { value: 'Dropdown Option 3' },
                    ]}
                    required={true}
                    helperText="Select your account from the options."
                />
                <InputMonetary
                    helperText="Helper text goes here!"
                    label="How much do you wish to pay?"
                    name="paymentAmount"
                    required={true}
                />
                <Textarea
                    helperText="The quick brown fox jumps over the lazy dog."
                    label="This is a textarea"
                    name="textareaExample"
                    required={false}
                />
                <Checkboxes legend="What are your favorite Nolan movies?" options={checkboxOptions} />
                <RadioGroup legend="What's your level of spice?" options={radioGroupOptions} />
                <MultiSelect
                    helperText="Begin typing to search for invoice types"
                    onChange={setSelectValues}
                    required={true}
                    selectedValues={selectedValues}
                    label="Multi-select Invoice Type(s)"
                    name="selectInvoiceType"
                    options={multiSelectOptions}
                />
                <PrimaryButton clickHandler={onSubmit} disabled={false} icon={<Chevron />} text="Complete Form" />
            </Form>
        </>
    );
};

export default InputStory;
