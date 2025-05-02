import GalleryDisplayArea from './GalleryDisplayArea';
import AccordionStory from './story/AccordionStory';
import AccountLinksStory from './story/AccountLinksStory';
import AlertStory from './story/AlertStory';
import BadgeStory from './story/BadgeStory';
import ButtonCTAStory from './story/ButtonCTAStory';
import ButtonPrimaryStory from './story/ButtonPrimaryStory';
import ButtonSecondaryStory from './story/ButtonSecondaryStory';
import ButtonSimpleStory from './story/ButtonSimpleStory';
import DialogStory from './story/DialogStory';
import DividerStory from './story/DividerStory';
import InlineLinkStory from './story/InlineLinkStory';
import InputStory from './story/InputStory';
import LinkIconButtonStory from './story/LinkIconButtonStory';
import NavigationStory from './story/NavigationStory';
import TabsStory from './story/TabStory';
import TableStory from './story/TableStory';
import TypographyStory from './story/TypographyStory';

export function Gallery() {
    return (
        <main>
            <GalleryDisplayArea title="Header & Navigation *Updating to match latest design*">
                <NavigationStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Typography (Fluid) *Need to add sizing variations to the paragraph*">
                <TypographyStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Inline Link">
                <InlineLinkStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Account Links (legacy)">
                <AccountLinksStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Primary Button *Need to update all icons to latest icons (without baked in spacing)*">
                <ButtonPrimaryStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Secondary Button">
                <ButtonSecondaryStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Link Icon Buttons">
                <LinkIconButtonStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Simple Button">
                <ButtonSimpleStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="CTA Button *Need to fix hover state styles*">
                <ButtonCTAStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Accordion">
                <AccordionStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Tabs *Need to update to match latest design updates*">
                <TabsStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Dialog">
                <DialogStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Badge">
                <BadgeStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Alert">
                <AlertStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Inputs *Need to add validation to all inputs after the phone input, etc.*">
                <InputStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Dynamic Table (Our most complex component) *Work In Progress now*">
                <TableStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Divider">
                <DividerStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Kebab Menu: COMING SOON"> </GalleryDisplayArea>

            <GalleryDisplayArea title="Charts: COMING SOON"> </GalleryDisplayArea>

            <GalleryDisplayArea title="Toast: COMING SOON"> </GalleryDisplayArea>

            <GalleryDisplayArea title="Grid: COMING SOON"> </GalleryDisplayArea>

            <GalleryDisplayArea title="Progress Indicator: COMING SOON"> </GalleryDisplayArea>

            <GalleryDisplayArea title="Transfer: COMING SOON"> </GalleryDisplayArea>
        </main>
    );
}
