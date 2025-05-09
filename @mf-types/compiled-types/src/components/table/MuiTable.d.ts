interface MuiTableProps {
    data: unknown[];
    getRowId?: (row: Record<string, unknown>) => string;
    title?: string;
    hasCheckboxes?: boolean;
    onSelectAll?: (selected: boolean) => void;
    allSelected?: boolean;
}
declare const MuiTable: ({ data, getRowId, title, hasCheckboxes, onSelectAll, allSelected }: MuiTableProps) => import("react").JSX.Element;
export default MuiTable;
