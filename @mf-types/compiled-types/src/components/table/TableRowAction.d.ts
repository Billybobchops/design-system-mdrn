interface TableRowActionProps {
    onClick: () => void;
    isOpen?: boolean;
    isChecked?: boolean;
    type: 'chevron' | 'checkbox';
}
declare const TableRowAction: React.FC<TableRowActionProps>;
export default TableRowAction;
