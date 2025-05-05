import { formatHeader, getNestedColumns, isNestedArray, isRecord } from '@/components/table/utils';
import CollapsibleTableRow from '@components/table/CollapsibleTableRow';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableContainer from '@components/table/MuiTableContainer';
import MuiTableFooter from '@components/table/MuiTableFooter';
import MuiTableHead from '@components/table/MuiTableHead';
import MuiTablePagination from '@components/table/MuiTablePagination';
import MuiTableRow from '@components/table/MuiTableRow';
import TableRowAction from '@components/table/TableRowAction';
import Heading from '@components/typography/Heading';
import { useCallback, useMemo, useState } from 'react';

interface MuiTableProps {
    data: unknown[];
    getRowId?: (row: Record<string, unknown>) => string;
    title?: string;
    hasCheckboxes?: boolean;
    onSelectAll?: (selected: boolean) => void;
    allSelected?: boolean;
}

const MuiTable = ({ data, getRowId, title, hasCheckboxes, onSelectAll, allSelected }: MuiTableProps) => {
    // Validate data shape
    if (!data.every(isRecord)) {
        return <div>Invalid data format</div>;
    }

    const getRowKey = useCallback(
        (row: Record<string, unknown>) => {
            return (getRowId?.(row) ?? row.id) ? String(row.id) : JSON.stringify(row);
        },
        [getRowId],
    );

    // State management
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const typedData = data as Array<Record<string, unknown>>;
    const sampleItem = typedData[0] || {};

    // Toggle all rows
    const toggleAllRows = useCallback(() => {
        setExpandedRows(prev => {
            const allCurrentlyExpanded = typedData.every(row => prev[getRowKey(row)]);
            return Object.fromEntries(typedData.map(row => [getRowKey(row), !allCurrentlyExpanded]));
        });
    }, [typedData, getRowKey]); // Removed expandedRows dependency

    // Toggle single row
    const toggleRow = useCallback((rowId: string) => {
        setExpandedRows(prev => ({
            ...prev,
            [rowId]: !prev[rowId],
        }));
    }, []);

    // Check if all rows are expanded
    const allExpanded = useMemo(() => {
        return typedData.length > 0 && typedData.every(row => expandedRows[getRowKey(row)]);
    }, [typedData, expandedRows, getRowKey]);

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

    // Derived values
    const hasNestedData = nestedTables.length > 0;

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(Number.parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
        <>
            <Heading semanticLevel={'h3'}>{title}</Heading>
            <MuiTableContainer sx={{ tableLayout: hasNestedData ? 'auto' : 'fixed' }}>
                <MuiTableHead>
                    <MuiTableRow isNested={false}>
                        {hasNestedData ? (
                            <TableRowAction type="chevron" onClick={toggleAllRows} isOpen={allExpanded} />
                        ) : hasCheckboxes ? (
                            <TableRowAction
                                type="checkbox"
                                onClick={() => onSelectAll?.(!allSelected)}
                                isChecked={allSelected}
                            />
                        ) : (
                            ''
                        )}

                        {columns.map(col => (
                            <MuiTableCell key={col.key} sx={{ width: `${100 / columns.length}%` }}>
                                {col.header}
                            </MuiTableCell>
                        ))}
                    </MuiTableRow>
                </MuiTableHead>

                <MuiTableBody>
                    {(rowsPerPage > 0
                        ? typedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : typedData
                    ).map(row => {
                        const rowId = getRowKey(row);
                        const isExpanded = !!expandedRows[rowId];
                        const rowHasNestedData = nestedTables.some(table => isNestedArray(row[table.key]));

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

                    {emptyRows > 0 && (
                        <MuiTableRow isNested={false} sx={{ height: 45 * emptyRows }}>
                            <MuiTableCell colSpan={columns.length + 1} />
                        </MuiTableRow>
                    )}
                </MuiTableBody>

                <MuiTableFooter>
                    <MuiTableRow isNested={false}>
                        <MuiTablePagination
                            count={data.length}
                            colSpan={6}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            handleChangePage={handleChangePage}
                            handleChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </MuiTableRow>
                </MuiTableFooter>
            </MuiTableContainer>
        </>
    );
};

export default MuiTable;
