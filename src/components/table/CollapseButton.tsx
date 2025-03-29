import { Chevron } from '@components/Icon';
import clsx from 'clsx';
import classes from './CollapseButton.module.scss';

interface CollapseButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

const CollapseButton: React.FC<CollapseButtonProps> = ({ onClick, isOpen }) => {
    return (
        <button className={clsx(classes.button, isOpen && classes.openButton)} onClick={onClick} type="button">
            <Chevron fill={'var(--theme-a-3)'} />
        </button>
    );
};

export default CollapseButton;
