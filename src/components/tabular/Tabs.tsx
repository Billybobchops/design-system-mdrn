import { TabsProvider } from '@components/tabular/TabsContext';
import { useId } from 'react';
import classes from './Tabs.module.scss';

interface TabsProps {
    children: React.ReactNode;
    defaultSelectedTab: string;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultSelectedTab }) => {
    const tabsPrefix = useId();

    return (
        <TabsProvider defaultSelectedTab={defaultSelectedTab} tabsPrefix={tabsPrefix}>
            <div className={classes.tabContainer}>{children}</div>
        </TabsProvider>
    );
};

export default Tabs;
