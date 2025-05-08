import { Kebab } from '@components/Icon';
import clsx from 'clsx';
import { useState } from 'react';
import classes from './KebabMenu.module.scss';

interface KebabProps {
    actions: { label: string; onClick: () => void }[];
}

const KebabMenu: React.FC<KebabProps> = ({ actions }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.container}>
            <button
                className={clsx(classes.button, isOpen && classes.active)}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <Kebab fill={isOpen ? 'var(--utility-neutral-0)' : 'var(--theme-a-4)'} />
            </button>

            {isOpen && (
                <ul className={classes.actions}>
                    {actions.map(action => (
                        <li key={action.label} className={classes.actionItem}>
                            <button className={classes.action} type="button" onClick={action.onClick}>
                                {action.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default KebabMenu;

// pass the row data to the kebab component to use in the actions
// example row.accountNumber: href=`https://www.google.com/search?q=${row.accountNumber}`
