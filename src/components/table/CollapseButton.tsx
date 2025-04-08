import { TableChevronCollapsed, TableChevronExpanded } from '@components/Icon';
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
                backgroundColor: isOpen ? 'var(--ic-blue-10)' : 'none',
                boxShadow: isOpen ? '0 1px 0 0 var(--theme-a-4)' : 'none',
                position: isOpen ? 'relative' : 'static',
                minWidth: '50px',
            }}
        >
            <button className={classes.button} onClick={onClick} type="button">
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
