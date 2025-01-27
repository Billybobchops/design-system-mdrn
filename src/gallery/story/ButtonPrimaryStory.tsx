import { Chevron, Remove, Search } from '@components/Icon';
import PrimaryButton from '@components/button/PrimaryButton';

const ButtonPrimaryStory = () => {
    return (
        <>
            <PrimaryButton disabled={false} icon={<Search />} iconPosition="start" text="Search Invoices" />
            <PrimaryButton
                disabled={false}
                icon={<Search />}
                iconPosition="start"
                text="Search Invoices"
                variant="green"
            />
            <PrimaryButton disabled={true} icon={<Search />} iconPosition="start" text="Search Invoices" />
            <PrimaryButton disabled={false} icon={<Chevron />} text="Register Now" />
            <PrimaryButton disabled={true} icon={<Chevron />} text="Register Now" />
            <PrimaryButton
                disabled={false}
                icon={<Remove />}
                iconPosition={'start'}
                text="Remove Email Address"
                variant="red"
            />
            <PrimaryButton
                disabled={true}
                icon={<Remove />}
                iconPosition={'start'}
                text="Remove Email Address"
                variant="red"
            />
        </>
    );
};

export default ButtonPrimaryStory;
