import KebabMenu from '@components/KebabMenu';

const kebabActions = [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
    { label: 'Action 3', onClick: () => console.log('Action 3 clicked') },
];

const KebabMenuStory = () => {
    return (
        <>
            <KebabMenu actions={kebabActions} />
        </>
    );
};

export default KebabMenuStory;
