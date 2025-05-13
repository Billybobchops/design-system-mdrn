import type { ColumnConfig } from '@components/table/types';
interface NestedTableConfig<T, K extends Record<string, unknown>> {
    key: keyof T;
    title: string;
    columns: ColumnConfig<K>[];
}
declare const CollapsibleTableRow: <T extends Record<string, unknown>, K extends Record<string, unknown>>({ row, isOpen, onToggle, columns, nestedTables, }: {
    row: T;
    isOpen: boolean;
    onToggle: () => void;
    columns: Array<ColumnConfig<T> & {
        isNestedHeader?: boolean;
    }>;
    nestedTables?: NestedTableConfig<T, K>[];
}) => import("react").JSX.Element;
export default CollapsibleTableRow;
