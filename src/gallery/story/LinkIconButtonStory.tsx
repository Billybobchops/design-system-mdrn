import Divider from '@/components/Divider';
import { ChevronRight, MenuCloseMedium, NewWindow, Plus } from '@components/Icon';
import LinkIconButton from '@components/button/LinkIconButton';

const LinkIconButtonStory = () => {
    return (
        <>
            <LinkIconButton disabled={false} icon={<ChevronRight />} text="Recent Open Invoices" variant="blue" />
            <LinkIconButton disabled={true} icon={<ChevronRight />} text="Recent Open Invoices" variant="blue" />
            <LinkIconButton
                disabled={false}
                icon={<NewWindow />}
                iconPosition="start"
                text="View Invoice"
                variant="blue"
            />
            <LinkIconButton
                disabled={true}
                icon={<NewWindow />}
                iconPosition="start"
                text="View Invoice"
                variant="blue"
            />
            <LinkIconButton
                disabled={false}
                icon={<MenuCloseMedium />}
                iconPosition="start"
                text="Delete Email Address"
                variant="red"
            />
            <LinkIconButton
                disabled={true}
                icon={<MenuCloseMedium />}
                iconPosition="start"
                text="Delete Email Address"
                variant="red"
            />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" text="Add Account" variant="green" />
            <LinkIconButton disabled={true} icon={<Plus />} iconPosition="start" text="Add Account" variant="green" />

            <Divider isDark={true} />

            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="red" />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="green" />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="blue" />
            <LinkIconButton disabled={true} icon={<Plus />} iconPosition="start" variant="green" />
        </>
    );
};

export default LinkIconButtonStory;
