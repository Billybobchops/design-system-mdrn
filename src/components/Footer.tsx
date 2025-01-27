import trustwave from '@/assets/trustwave.png';
import { ICFooterLogo } from '@components/Icon';
import InlineLink from '@components/InlineLink';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.container}>
            <span className={classes.logo}>
                <ICFooterLogo />
            </span>

            <InlineLink href="https://www.invoicecloud.net/privacy-policy" variant="grey">
                Privacy Policy
            </InlineLink>

            <InlineLink href="https://invoicecloud.net/accessibility-statement" variant="grey">
                Accessibility
            </InlineLink>

            <span className={classes.flex}>
                <img
                    src={trustwave}
                    width={100}
                    height={17}
                    alt="This site protected by Trustwave's Trust Commerce Program. You may click on seal to validate."
                />
                <InlineLink
                    href="https://sealserver.trustwave.com/cert.php?customerId=e6fe5831b6ba46ef83d7c7330126e94d"
                    variant="grey"
                >
                    Secure Site
                </InlineLink>
            </span>
        </footer>
    );
};

export default Footer;
