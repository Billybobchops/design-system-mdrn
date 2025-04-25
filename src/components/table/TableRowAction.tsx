import { TableChevronCollapsed, TableChevronExpanded } from '@components/Icon';
import Checkbox from '@components/form/Checkbox';
import VisuallyHidden from '../accessibility/VisuallyHidden';
import MuiTableCell from './MuiTableCell';
import classes from './TableRowAction.module.scss';

interface TableRowActionProps {
    onClick: () => void;
    isOpen?: boolean;
    isChecked?: boolean;
    type: 'chevron' | 'checkbox';
}

const TableRowAction: React.FC<TableRowActionProps> = ({ onClick, isOpen, isChecked = false, type }) => {
    const accessibleText = type === 'chevron' ? (isOpen ? 'Collapse' : 'Expand') : 'Select all rows';

    return (
        <MuiTableCell
            sx={{
                padding: '0 !important',
                backgroundColor: isOpen ? 'var(--utility-blue-10)' : 'none',
                boxShadow: isOpen ? '0 1px 0 0 var(--theme-a-4)' : 'none',
                position: isOpen ? 'relative' : 'static',
                minWidth: '50px',
            }}
        >
            <button
                className={classes.button}
                onClick={onClick}
                type="button"
                aria-expanded={type === 'chevron' ? isOpen : undefined}
            >
                {type === 'chevron' ? (
                    isOpen ? (
                        <TableChevronExpanded fill={'var(--theme-a-3)'} />
                    ) : (
                        <TableChevronCollapsed fill={'var(--theme-a-3)'} />
                    )
                ) : (
                    <Checkbox checked={isChecked} onChange={onClick} />
                )}
                <VisuallyHidden>{accessibleText}</VisuallyHidden>
            </button>
        </MuiTableCell>
    );
};

export default TableRowAction;
