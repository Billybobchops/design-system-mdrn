import { formatHeader, getNestedColumns, isNestedArray, isRecord } from '@/components/table/utils';
import CollapsibleTableRow from '@components/table/CollapsibleTableRow';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableContainer from '@components/table/MuiTableContainer';
import MuiTableHead from '@components/table/MuiTableHead';
import MuiTableRow from '@components/table/MuiTableRow';
import { useCallback, useState } from 'react';

interface MuiTableProps {
    data: unknown[];
    getRowId?: (row: Record<string, unknown>) => string;
}

const MuiTable = ({ data, getRowId }: MuiTableProps) => {
    // Validate data shape
    if (!data.every(isRecord)) {
        return <div>Invalid data format</div>;
    }

    // State management
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const typedData = data as Array<Record<string, unknown>>;
    const sampleItem = typedData[0] || {};

    // Memoized callbacks
    const toggleRow = useCallback((rowId: string) => {
        setExpandedRows(prev => ({ ...prev, [rowId]: !prev[rowId] }));
    }, []);

    // Get all top-level keys in original order
    const allKeysInOrder = Object.keys(sampleItem);

    // Create columns for ALL top-level data (including headers for nested tables)
    const columns = allKeysInOrder.map(key => {
        if (isNestedArray(sampleItem[key])) {
            return {
                key,
                header: formatHeader(key), // Shows "Payments", "Parking Tickets" etc.
                width: 'auto',
                isNestedHeader: true, // Flag to indicate this is a nested table header
            };
        }
        return {
            key,
            header: formatHeader(key),
            width: 'auto',
        };
    });

    // Create nested table configurations
    const nestedTables = allKeysInOrder
        .filter(key => isNestedArray(sampleItem[key]))
        .map(key => ({
            key,
            title: formatHeader(key),
            columns: getNestedColumns(sampleItem[key]),
        }));

    const getRowKey = useCallback(
        (row: Record<string, unknown>) => {
            return (getRowId?.(row) ?? row.id) ? String(row.id) : JSON.stringify(row);
        },
        [getRowId],
    );

    // Derived values
    const hasNestedData = nestedTables.length > 0;

    return (
        <MuiTableContainer>
            <MuiTableHead>
                <MuiTableRow isNested={false}>
                    {/* This first cell will need a select all checkbox or expand all chevron IF hasNestedData is TRUE */}
                    {hasNestedData && <MuiTableCell />}
                    {columns.map(col => (
                        <MuiTableCell key={col.key}>{col.header}</MuiTableCell>
                    ))}
                </MuiTableRow>
            </MuiTableHead>

            <MuiTableBody>
                {typedData.map(row => {
                    const rowId = getRowKey(row);
                    const isExpanded = !!expandedRows[rowId];
                    const rowHasNestedData = hasNestedData && nestedTables.some(table => isNestedArray(row[table.key]));

                    return rowHasNestedData ? (
                        <CollapsibleTableRow
                            key={rowId}
                            row={row}
                            isOpen={isExpanded}
                            onToggle={() => toggleRow(rowId)}
                            columns={columns}
                            nestedTables={nestedTables}
                        />
                    ) : (
                        <MuiTableRow isNested={false} key={rowId}>
                            {columns.map(column => (
                                <MuiTableCell key={column.key}>{String(row[column.key])}</MuiTableCell>
                            ))}
                        </MuiTableRow>
                    );
                })}
            </MuiTableBody>

            {/* <MuiTableFooter>
                <MuiTableRow isNested={false}>
                    <MuiTablePagination
                        count={dummyRowData.length}
                        colSpan={6}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </MuiTableRow>
            </MuiTableFooter> */}
        </MuiTableContainer>
    );
};

export default MuiTable;
