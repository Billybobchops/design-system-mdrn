import GalleryDisplayArea from './GalleryDisplayArea';
import AccordionStory from './story/AccordionStory';
import AlertStory from './story/AlertStory';
import BadgeStory from './story/BadgeStory';
import ButtonCTAStory from './story/ButtonCTAStory';
import ButtonIconStory from './story/ButtonIconStory';
import ButtonLinkIconStory from './story/ButtonLinkIconStory';
import ButtonPrimaryStory from './story/ButtonPrimaryStory';
import ButtonSecondaryStory from './story/ButtonSecondaryStory';
import ButtonSimpleStory from './story/ButtonSimpleStory';
import DialogStory from './story/DialogStory';
import DividerStory from './story/DividerStory';
import InlineLinkStory from './story/InlineLinkStory';
import InputStory from './story/InputStory';
import NavigationStory from './story/NavigationStory';
import TabsStory from './story/TabStory';
import TableStory from './story/TableStory';
import TypographyStory from './story/TypographyStory';

export function Gallery() {
    return (
        <main>
            <GalleryDisplayArea title="Header & Navigation">
                <NavigationStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Typography (Fluid)">
                <TypographyStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Inline Link">
                <InlineLinkStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Primary Button">
                <ButtonPrimaryStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Secondary Button">
                <ButtonSecondaryStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Link Icon Button">
                <ButtonLinkIconStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Icon Button (Broken .. merge with Link Icon Button)">
                {/* MERGE with Link Icon Buttons for developer simplicity? */}
                <ButtonIconStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Simple Button">
                <ButtonSimpleStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="CTA Button">
                <ButtonCTAStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Accordion">
                <AccordionStory />
            </GalleryDisplayArea>

            <GalleryDisplayArea title="Tabs">
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

            <GalleryDisplayArea title="Inputs">
                <InputStory />
            </GalleryDisplayArea>

            {/* <GalleryDisplayArea title="Table">
                <TableStory />
            </GalleryDisplayArea> */}

            <GalleryDisplayArea title="Divider">
                <DividerStory />
            </GalleryDisplayArea>
        </main>
    );
}
