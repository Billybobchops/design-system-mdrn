import { createContext, useContext, useState } from 'react';

export interface TabsContextProps {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
    tabsPrefix: string;
}

const contextErrorString = 'useTabsContext must be used within a TabsProvider';

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error(contextErrorString);
    }
    return context;
};

interface TabsProviderProps {
    children: React.ReactNode;
    defaultSelectedTab: string;
    tabsPrefix: string;
}

export const TabsProvider: React.FC<TabsProviderProps> = ({ children, defaultSelectedTab, tabsPrefix = '' }) => {
    const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

    const contextValue: TabsContextProps = {
        selectedTab,
        setSelectedTab,
        tabsPrefix,
    };

    return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};
