export interface TabsContextProps {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
    tabsPrefix: string;
}
export declare const useTabsContext: () => TabsContextProps;
interface TabsProviderProps {
    children: React.ReactNode;
    defaultSelectedTab: string;
    tabsPrefix: string;
}
export declare const TabsProvider: React.FC<TabsProviderProps>;
export {};
