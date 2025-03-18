import AccountLinks from '@components/AccountLinks';

const AccountLinksStory = () => {
    const dummyAccountLinks = [
        {
            text: '#UTIL-1001 Deana Ada',
            href: '/',
        },
        {
            text: '#UTIL-1004 Nikephoros Botaneiates',
            href: '/',
        },
    ];

    return (
        <>
            <AccountLinks links={dummyAccountLinks} />
        </>
    );
};

export default AccountLinksStory;
