import { ChevronRight } from '@components/Icon';
import CTAButton from '@components/button/CTAButton';

const ButtonCTAStory = () => {
    return (
        <>
            <CTAButton disabled={false} icon={<ChevronRight />} text="Pay Now" />
            <CTAButton disabled={false} icon={<ChevronRight />} text="Pay Now" variant="green" />
            <CTAButton disabled={false} icon={<ChevronRight />} text="Pay Now" variant="outline" />
            <CTAButton disabled={true} icon={<ChevronRight />} text="Pay Now" />
        </>
    );
};

export default ButtonCTAStory;
