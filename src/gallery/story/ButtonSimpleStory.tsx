import SimpleButton from '@components/button/SimpleButton';

const ButtonSimpleStory = () => {
    return (
        <>
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text="cancel"
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text="cancel"
                variant="green"
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text="cancel"
                variant="red"
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                disabled={true}
                text="cancel"
                variant="red"
            />
        </>
    );
};

export default ButtonSimpleStory;
