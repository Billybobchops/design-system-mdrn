import { MenuCloseSmall } from '@components/Icon';
import VisuallyHidden from '@components/accessibility/VisuallyHidden';
import { useState } from 'react';
import classes from './Chip.module.scss';

interface ChipProps {
    title: string;
    onRemove: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, onRemove }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${classes.chip} ${isHovered ? classes.chipHover : ''}`}
            onClick={onRemove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
        >
            <span className={classes.title}>{title}</span>
            <span aria-hidden="true" className={`${classes.icon} ${isHovered ? classes.iconHover : ''}`}>
                <MenuCloseSmall fill={isHovered ? 'var(--utility-neutral-0)' : 'var(--theme-a-4)'} />
            </span>
            <VisuallyHidden>{`Remove ${title} as a selection`}</VisuallyHidden>
        </button>
    );
};

export default Chip;
