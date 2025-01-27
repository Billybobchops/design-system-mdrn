import { useCallback, useRef } from 'react';

interface TabListProps {
    children: React.ReactNode;
    ariaLabel: string;
}

const TabList: React.FC<TabListProps> = ({ children, ariaLabel }) => {
    const refList = useRef<HTMLDivElement>(null);

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        const list = refList.current;
        if (!list) return;

        const tabs = Array.from<HTMLElement>(list.querySelectorAll('[role="tab"]:not([disabled])'));

        const index = tabs.indexOf(document.activeElement as HTMLElement);

        if (index < 0) return;
        switch (e.key) {
            case 'ArrowUp':
            case 'ArrowLeft': {
                const next = (index - 1 + tabs.length) % tabs.length;
                tabs[next]?.focus();
                break;
            }
            case 'ArrowDown':
            case 'ArrowRight': {
                const next = (index + 1 + tabs.length) % tabs.length;
                tabs[next]?.focus();
                break;
            }
        }
    }, []);

    return (
        <div aria-label={ariaLabel} onKeyDown={onKeyDown} ref={refList} role="tablist">
            {children}
        </div>
    );
};

export default TabList;
