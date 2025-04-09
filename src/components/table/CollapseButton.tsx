import { TableChevronCollapsed, TableChevronExpanded } from '@components/Icon';
import VisuallyHidden from '../accessibility/VisuallyHidden';
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
            <button className={classes.button} onClick={onClick} type="button" aria-expanded={isOpen}>
                {isOpen ? (
                    <TableChevronExpanded fill={'var(--theme-a-3)'} />
                ) : (
                    <TableChevronCollapsed fill={'var(--theme-a-3)'} />
                )}
                <VisuallyHidden>{isOpen ? 'Collapse all' : 'Expand all'}</VisuallyHidden>
            </button>
        </MuiTableCell>
    );
};

export default CollapseButton;
