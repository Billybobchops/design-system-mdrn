import Badge from '@components/Badge';

const BadgeStory = () => {
    return (
        <>
            <Badge content="Success" variant="success" />
            <Badge content="Warning" variant="warning" />
            <Badge content="Error" variant="error" />
            <Badge content="Neutral" variant="neutral" />
            <Badge content="Informational" variant="informational" />
        </>
    );
};

export default BadgeStory;
