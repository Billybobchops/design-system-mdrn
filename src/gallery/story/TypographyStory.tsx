import Heading from '@components/typography/Heading';
import Paragraph from '@components/typography/Paragraph';

const TypographyStory = () => {
    return (
        <>
            <Heading level="h1">H1: The quick brown fox jumps over the lazy dog.</Heading>
            <Heading level="h2">H2: The quick brown fox jumps over the lazy dog.</Heading>
            <Heading level="h3">H3: The quick brown fox jumps over the lazy dog.</Heading>
            <Heading level="h4">H4: The quick brown fox jumps over the lazy dog.</Heading>
            <Heading level="h5">H5: The quick brown fox jumps over the lazy dog.</Heading>
            <Heading level="h6">H6: The quick brown fox jumps over the lazy dog.</Heading>
            <Paragraph>
                The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id, delectus ipsum? Ab maxime eligendi saepe! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum odio iure maiores nulla maxime quasi quibusdam in! Consequatur, nostrum sint.
            </Paragraph>
        </>
    );
};

export default TypographyStory;
