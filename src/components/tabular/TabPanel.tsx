import classes from './TabPanel.module.scss';
import { useTabsContext } from './TabsContext';

interface TabPanelProps {
    children: React.ReactNode;
    tab: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, tab }) => {
    const { selectedTab, tabsPrefix } = useTabsContext();
    if (selectedTab !== tab) return null;

    return (
        <div
            className={classes.tabPanel}
            id={`tab-${tabsPrefix}-tabpanel-${tab}`}
            role="tabpanel"
            // biome-ignore lint: tabpanel must be focusable
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default TabPanel;
