import Alert from '@components/Alert';

const AlertStory = () => {
    return (
        <>
            <Alert
                content="Please enter a valid Phone Number to receive TEXT notifications."
                isDismissable={true}
                variant="default"
            />
            <Alert
                content="Note about product or how to use it. We can use this to call out new features or offer general knowledge."
                isDismissable={false}
                variant="default"
            />
            <Alert
                content="Note: Signing up for AutoPay will automatically enroll you in Paperless Billing as well."
                isDismissable={true}
                variant="warning"
            />
            <Alert
                content="Note about product or how to use it. We can use this to call out new features or offer general knowledge."
                isDismissable={false}
                variant="warning"
            />
            <Alert
                content="Please enter a valid Phone Number to receive TEXT notifications."
                isDismissable={true}
                variant="error"
            />
            <Alert
                content="Please enter a valid Phone Number to receive TEXT notifications."
                isDismissable={false}
                variant="error"
            />
            <Alert
                content="Please enter a valid Phone Number to receive TEXT notifications."
                isDismissable={true}
                variant="success"
            />
            <Alert
                content="Please enter a valid Phone Number to receive TEXT notifications."
                isDismissable={false}
                variant="success"
            />
        </>
    );
};

export default AlertStory;
