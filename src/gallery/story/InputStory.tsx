import { ChevronRight } from '@components/Icon';
import PrimaryButton from '@components/button/PrimaryButton';
import Checkboxes from '@components/form/Checkboxes';
import DatePickerInput from '@components/form/DatePicker';
import EmailInput from '@components/form/EmailInput';
import Form from '@components/form/Form';
import MonetaryInput from '@components/form/MonetaryInput';
import MultiSelect from '@components/form/MultiSelect';
import PasswordInput from '@components/form/PasswordInput';
import PhoneInput from '@components/form/PhoneInput';
import RadioGroup from '@components/form/RadioGroup';
import Select from '@components/form/Select';
import TextInput from '@components/form/TextInput';
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

    const [selectedValues, setSelectValues] = useState<string[]>(['Real Estate', 'Utility', 'Electric']);

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
                <EmailInput required={true} />
                <PasswordInput required={true} />
                <TextInput
                    label="First name"
                    name="firstName"
                    required={true}
                    rules={{
                        minLength: {
                            value: 2,
                            message: 'Password must be at least 2 characters',
                        },
                        validate: value => {
                            if (/\d/.test(value)) {
                                return 'Numbers are not allowed';
                            }
                            return true;
                        },
                    }}
                />
                <TextInput
                    disabled={true}
                    helperText="This is a disabled input"
                    label="Last name"
                    name="lastName"
                    required={false}
                />
                <TextInput
                    helperText="Example helper text goes here!"
                    label="Billing address"
                    name="billingAddress"
                    required={true}
                    rules={{
                        minLength: {
                            value: 5,
                            message: 'Billing address must be at least 5 characters long',
                        },
                        maxLength: {
                            value: 100,
                            message: 'Billing address cannot exceed 100 characters',
                        },
                        validate: value => {
                            if (!/^[a-zA-Z0-9\s,.'-]*$/.test(value)) {
                                return 'Billing address contains invalid characters';
                            }
                            return true;
                        },
                    }}
                />
                <MonetaryInput
                    helperText="Helper text goes here!"
                    label="How much do you wish to pay?"
                    name="paymentAmount"
                    required={true}
                />
                <PhoneInput
                    helperText="Example helper text goes here!"
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
                <PrimaryButton clickHandler={onSubmit} disabled={false} icon={<ChevronRight />} text="Complete Form" />
            </Form>
        </>
    );
};

export default InputStory;
