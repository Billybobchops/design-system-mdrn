import trustwave from '@/assets/trustwave.png';
import { ICFooterLogo } from '@components/Icon';
import type { Link } from '@components/navigation/Footer';
import Footer from '@components/navigation/Footer';

const FooterStory = () => {
    const dummyFooterData: Link[] = [
        {
            label: 'Privacy Policy',
            href: 'https://www.invoicecloud.net/privacy-policy',
            variant: 'grey',
        },
        {
            label: 'Accessibility',
            href: 'https://invoicecloud.net/accessibility-statement',
            variant: 'grey',
        },
        {
            label: 'Secure Site',
            href: 'https://sealserver.trustwave.com/cert.php?customerId=e6fe5831b6ba46ef83d7c7330126e94d',
            variant: 'grey',
            imageSrc: trustwave,
            imageAlt: "This site protected by Trustwave's Trust Commerce Program. You may click on seal to validate.",
        },
    ];

    return (
        <>
            <Footer logo={<ICFooterLogo />} links={dummyFooterData} />
        </>
    );
};

export default FooterStory;
