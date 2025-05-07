import { Kebab } from '@components/Icon';
import { useState } from 'react';

interface KebabProps {
    actions: { label: string; onClick: () => void }[];
}

const KebabMenu: React.FC<KebabProps> = ({ actions }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="kebab-menu">
            <button type="button" className="kebab-icon" onClick={() => setIsOpen(!isOpen)}>
                <Kebab />
            </button>

            {isOpen && (
                <ul className="kebab-actions">
                    {actions.map(action => (
                        <li key={action.label} className="kebab-action">
                            <button type="button" onClick={action.onClick}>
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
