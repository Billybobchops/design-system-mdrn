import FeatureStatus from '@components/FeatureStatus';

const FeatureStatusStory = () => {
    return (
        <>
            <FeatureStatus
                autoPayStatus="Not Enrolled"
                autoPayLink="#"
                paperlessStatus="Partially Enrolled"
                paperlessLink="#"
                payByTextStatus="Enrolled"
                payByTextLink="#"
            />
        </>
    );
};

export default FeatureStatusStory;
