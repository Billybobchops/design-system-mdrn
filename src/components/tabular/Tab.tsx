import classes from './Tab.module.scss';
import { useTabsContext } from './TabsContext';

interface TabProps {
    children: React.ReactNode;
    tab: string;
}

const Tab: React.FC<TabProps> = ({ children, tab }) => {
    const { selectedTab, setSelectedTab, tabsPrefix } = useTabsContext();

    return (
        <button
            aria-controls={`tab-${tabsPrefix}-tabpanel-${tab}`}
            aria-selected={selectedTab === tab}
            className={classes.tab}
            onClick={() => setSelectedTab(tab)}
            role="tab"
            tabIndex={selectedTab === tab ? 0 : -1}
            type="button"
        >
            {children}
        </button>
    );
};

export default Tab;
