import SecondaryButton from '@components/button/SecondaryButton';

const ButtonSecondaryStory = () => {
    return (
        <>
            <SecondaryButton disabled={false} text="Cancel Payment" />
            <SecondaryButton disabled={false} text="Add Account" variant="green" />
            <SecondaryButton disabled={false} text="Remove Email Address" variant="red" />
            <SecondaryButton disabled={true} text="Cancel Payment" />
        </>
    );
};

export default ButtonSecondaryStory;
