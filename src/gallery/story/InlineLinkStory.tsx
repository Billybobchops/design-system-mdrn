import InlineLink from '@components/InlineLink';
import Paragraph from '@components/typography/Paragraph';

const InlineLinkStory = () => {
    return (
        <Paragraph>
            The quick brown fox jumps over the <InlineLink>inline link.</InlineLink>
        </Paragraph>
    );
};

export default InlineLinkStory;
