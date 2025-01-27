import Tab from '@components/tabular/Tab';
import TabList from '@components/tabular/TabList';
import TabPanel from '@components/tabular/TabPanel';
import Tabs from '@components/tabular/Tabs';
import Paragraph from '@components/typography/Paragraph';

const TabsStory = () => {
    return (
        <Tabs defaultSelectedTab="tab1">
            <TabList ariaLabel="tabular options">
                <Tab tab="tab1">Tab 1</Tab>
                <Tab tab="tab2">Tab 2</Tab>
                <Tab tab="tab3">Tab 3</Tab>
                <Tab tab="tab4">Tab 4</Tab>
            </TabList>

            <TabPanel tab="tab1">
                <Paragraph>
                    Content for tab 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta error.
                    Id dignissimos dolorum facere.
                </Paragraph>
            </TabPanel>

            <TabPanel tab="tab2">
                <Paragraph>
                    Content for tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta error.
                    Id dignissimos dolorum facere.
                </Paragraph>
            </TabPanel>

            <TabPanel tab="tab3">
                <Paragraph>
                    Content for tab 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta error.
                    Id dignissimos dolorum facere.
                </Paragraph>
            </TabPanel>

            <TabPanel tab="tab4">
                <Paragraph>
                    Content for tab 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, soluta error.
                    Id dignissimos dolorum facere.
                </Paragraph>
            </TabPanel>
        </Tabs>
    );
};

export default TabsStory;
