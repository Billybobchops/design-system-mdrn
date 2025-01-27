import Accordion from '@components/Accordion';
import ButtonSecondary from '@components/button/PrimaryButton';
import Paragraph from '@components/typography/Paragraph';

const AccordionStory = () => {
    return (
        <>
            <Accordion title="Accordion Heading">
                <Paragraph>Dummy content, yay!</Paragraph>
                <ButtonSecondary disabled={false} text="View Invoice" />
            </Accordion>

            <Accordion title="Accordion Heading">
                <Paragraph>Dummy content, yay!</Paragraph>
            </Accordion>
        </>
    );
};

export default AccordionStory;
