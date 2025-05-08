import KebabMenu from '@components/KebabMenu';

const kebabActions = [
    { label: 'View Invoice', onClick: () => console.log('Action 1 clicked') },
    { label: 'Payment History', onClick: () => console.log('Action 2 clicked') },
    { label: 'Adjustment History', onClick: () => console.log('Action 3 clicked') },
    { label: 'Schedule Payment History', onClick: () => console.log('Action 4 clicked') },
    { label: 'Refresh History', onClick: () => console.log('Action 5 clicked') },
];

const KebabMenuStory = () => {
    return (
        <span style={{ display: 'flex', justifyContent: 'end' }}>
            <KebabMenu actions={kebabActions} />
        </span>
    );
};

export default KebabMenuStory;
