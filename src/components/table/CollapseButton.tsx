import { TableChevronCollapsed, TableChevronExpanded } from '@components/Icon';
import clsx from 'clsx';
import classes from './CollapseButton.module.scss';
import MuiTableCell from './MuiTableCell';

interface CollapseButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

const CollapseButton: React.FC<CollapseButtonProps> = ({ onClick, isOpen }) => {
    return (
        <MuiTableCell
            sx={{
                padding: '0 !important',
                borderBottom: isOpen ? '1.5px solid var(--theme-a-4)' : 'none',

                '& MuiTableCell-root': {},
            }}
        >
            <button className={clsx(classes.button, isOpen && classes.openButton)} onClick={onClick} type="button">
                {isOpen ? (
                    <TableChevronExpanded fill={'var(--theme-a-3)'} />
                ) : (
                    <TableChevronCollapsed fill={'var(--theme-a-3)'} />
                )}
            </button>
        </MuiTableCell>
    );
};

export default CollapseButton;
