interface MuiTableProps {
    data: unknown[];
    getRowId?: (row: Record<string, unknown>) => string;
    title?: string;
    hasCheckboxes?: boolean;
}
declare const MuiTable: ({ data, getRowId, title, hasCheckboxes }: MuiTableProps) => import("react").JSX.Element;
export default MuiTable;
