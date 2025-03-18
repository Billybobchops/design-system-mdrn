import Divider from '@components/Divider';
import Heading from '@components/typography/Heading';
import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import { useState } from 'react';
import classes from './AccountLinks.module.scss';

interface AccountLink {
    href: string;
    text: string;
}

interface AccountLinksProps {
    links: AccountLink[];
    spacing?: Spacing | Spacing[];
}

const AccountLinks: React.FC<AccountLinksProps> = ({ links, spacing }) => {
    const [selected, setSelected] = useState<AccountLink | null>(links[0] || null);
    const onOptionChange = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        setSelected(links[index]);
    };

    return (
        <div className={clsx(spacing)}>
            <Heading semanticLevel="h2" classLevel="h5">
                Your Accounts
            </Heading>
            <Divider isDark={false} />
            {links.map((link, i) => (
                <a
                    key={link.text}
                    href={link.href}
                    // className={clsx({ [classes.selected]: selected === link }, classes.accountLink)}
                    className={clsx({ [classes.selected]: selected?.text === link.text }, classes.accountLink)}
                    onClick={e => onOptionChange(i, e)}
                >
                    {link.text}
                </a>
            ))}
        </div>
    );
};

export default AccountLinks;
