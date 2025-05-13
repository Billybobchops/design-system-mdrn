import type { Spacing } from '@styles/spacing';
interface AccountLink {
    href: string;
    text: string;
}
interface AccountLinksProps {
    links: AccountLink[];
    spacing?: Spacing | Spacing[];
}
declare const AccountLinks: React.FC<AccountLinksProps>;
export default AccountLinks;
