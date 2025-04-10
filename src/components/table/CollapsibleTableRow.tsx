import CollapseButton from '@components/table/CollapseButton';
import MuiCollapse from '@components/table/MuiCollapse';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableContainer from '@components/table/MuiTableContainer';
import MuiTableHead from '@components/table/MuiTableHead';
import MuiTableRow from '@components/table/MuiTableRow';
import type { ColumnConfig } from '@components/table/types';

interface NestedTableConfig<T, K extends Record<string, unknown>> {
    key: keyof T;
    title: string;
    columns: ColumnConfig<K>[];
}

const CollapsibleTableRow = <T extends Record<string, unknown>, K extends Record<string, unknown>>({
    row,
    isOpen,
    onToggle,
    columns,
    nestedTables = [],
}: {
    row: T;
    isOpen: boolean;
    onToggle: () => void;
    columns: Array<ColumnConfig<T> & { isNestedHeader?: boolean }>;
    nestedTables?: NestedTableConfig<T, K>[];
}) => {
    return (
        <>
            {/* Main Row */}
            <MuiTableRow
                isNested={false}
                sx={{ boxShadow: isOpen ? '0 -1px 0 0 var(--theme-a-4)' : 'none', position: 'relative' }}
            >
                <CollapseButton onClick={onToggle} isOpen={isOpen} />
                {columns.map(column => {
                    if (column.isNestedHeader) {
                        return <MuiTableCell key={String(column.key)}>Expand to View</MuiTableCell>;
                    }
                    return (
                        <MuiTableCell key={String(column.key)}>
                            {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                        </MuiTableCell>
                    );
                })}
            </MuiTableRow>

            {/* Expanded Content */}
            {isOpen && nestedTables.length > 0 && (
                <MuiTableRow isNested={true}>
                    <MuiTableCell colSpan={columns.length + nestedTables.length + 1} sx={{ padding: 0 }}>
                        <MuiCollapse in={isOpen}>
                            {nestedTables.map(section => {
                                const nestedData = row[section.key] as K[] | undefined;
                                if (!nestedData || !nestedData.length) return null;

                                return (
                                    <MuiTableContainer key={section.title} isStriped={true}>
                                        <MuiTableHead>
                                            <MuiTableRow isNested={true}>
                                                <MuiTableCell colSpan={section.columns.length}>
                                                    {section.title}
                                                </MuiTableCell>
                                            </MuiTableRow>
                                        </MuiTableHead>

                                        <MuiTableBody>
                                            <MuiTableRow isNested={true}>
                                                {section.columns.map(col => (
                                                    <MuiTableCell key={String(col.key)}>{col.header}</MuiTableCell>
                                                ))}
                                            </MuiTableRow>

                                            {nestedData.map((nestedRow, index) => {
                                                const rowKey = 'key' in nestedRow ? nestedRow.key : index;
                                                return (
                                                    <MuiTableRow isNested={true} key={rowKey as React.Key}>
                                                        {section.columns.map(col => (
                                                            <MuiTableCell key={String(col.key)}>
                                                                {col.render
                                                                    ? col.render(
                                                                          nestedRow[col.key as keyof K],
                                                                          nestedRow,
                                                                      )
                                                                    : String(nestedRow[col.key as keyof K])}
                                                            </MuiTableCell>
                                                        ))}
                                                    </MuiTableRow>
                                                );
                                            })}
                                        </MuiTableBody>
                                    </MuiTableContainer>
                                );
                            })}
                        </MuiCollapse>
                    </MuiTableCell>
                </MuiTableRow>
            )}
        </>
    );
};

export default CollapsibleTableRow;
