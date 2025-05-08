import FeatureStatus from '@components/FeatureStatus';

const FeatureStatusStory = () => {
    return (
        <>
            <FeatureStatus
                autoPayStatus="Not Enrolled"
                autoPayLink="/profile/autopay"
                paperlessStatus="Partially Enrolled"
                paperlessLink="/profile/paperless"
                payByTextStatus="Enrolled"
                payByTextLink="/profile/paybytext"
            />
        </>
    );
};

export default FeatureStatusStory;
