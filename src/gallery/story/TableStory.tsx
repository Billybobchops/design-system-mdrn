import CollapseButton from '@components/table/CollapseButton';
import MuiCollapse from '@components/table/MuiCollapse';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableContainer from '@components/table/MuiTableContainer';
import MuiTableFooter from '@components/table/MuiTableFooter';
import MuiTableHead from '@components/table/MuiTableHead';
import MuiTablePagination from '@components/table/MuiTablePagination';
import MuiTableRow from '@components/table/MuiTableRow';
import Box from '@mui/material/Box';
import { useState } from 'react';

type RowData = {
    customerName: string;
    accountNumber: string;
    payments: { invoice: string; amount: number; date: string }[];
};

const dummyRowData: RowData[] = [
    {
        customerName: 'Joseph Erlinda Fillare',
        accountNumber: 'XSD38513336',
        payments: [
            { invoice: 'INV-001', amount: 460.59, date: '2021-01-01' },
            { invoice: 'INV-002', amount: 210.5, date: '2021-01-02' },
            { invoice: 'INV-003', amount: 1410.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Nikephoros Botaneiates',
        accountNumber: 'BSD32113337',
        payments: [
            { invoice: 'INV-004', amount: 104.59, date: '2021-01-01' },
            { invoice: 'INV-005', amount: 3410.5, date: '2021-01-02' },
            { invoice: 'INV-006', amount: 10.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Vlad Wallachian',
        accountNumber: 'CSD32119986',
        payments: [
            { invoice: 'INV-007', amount: 2104.59, date: '2021-01-01' },
            { invoice: 'INV-008', amount: 6510.5, date: '2021-01-02' },
            { invoice: 'INV-009', amount: 105.75, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Octavian Augustus',
        accountNumber: 'CSD32344986',
        payments: [
            { invoice: 'INV-010', amount: 404.59, date: '2021-01-01' },
            { invoice: 'INV-011', amount: 510.5, date: '2021-01-02' },
            { invoice: 'INV-012', amount: 1.75, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Marcus Aurelius',
        accountNumber: 'DSD44444986',
        payments: [
            { invoice: 'INV-013', amount: 9404.59, date: '2021-01-01' },
            { invoice: 'INV-014', amount: 10.5, date: '2021-01-02' },
            { invoice: 'INV-015', amount: 41.75, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Quark Gul Dukat',
        accountNumber: 'XSD44044989',
        payments: [
            { invoice: 'INV-016', amount: 4.59, date: '2021-01-01' },
            { invoice: 'INV-017', amount: 13.5, date: '2021-01-02' },
            { invoice: 'INV-018', amount: 310.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Quintus Fabius Maximus',
        accountNumber: 'FDD44044911',
        payments: [
            { invoice: 'INV-019', amount: 4100.59, date: '2021-01-01' },
            { invoice: 'INV-020', amount: 223.5, date: '2021-01-02' },
            { invoice: 'INV-021', amount: 10.5, date: '2021-01-03' },
            { invoice: 'INV-022', amount: 4310.5, date: '2021-01-04' },
        ],
    },
    {
        customerName: 'Duchamp Dax',
        accountNumber: 'ZZE44044911',
        payments: [
            { invoice: 'INV-023', amount: 30.59, date: '2021-01-01' },
            { invoice: 'INV-024', amount: 90.5, date: '2021-01-02' },
            { invoice: 'INV-025', amount: 10.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Karl Friedrich Gauss',
        accountNumber: 'XZE44044887',
        payments: [
            { invoice: 'INV-026', amount: 2330.59, date: '2021-01-01' },
            { invoice: 'INV-027', amount: 450.5, date: '2021-01-02' },
            { invoice: 'INV-029', amount: 4.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Constantine XI Palaiologos',
        accountNumber: 'SZE44044999',
        payments: [
            { invoice: 'INV-030', amount: 42330.59, date: '2021-01-01' },
            { invoice: 'INV-031', amount: 66450.5, date: '2021-01-02' },
            { invoice: 'INV-032', amount: 404.5, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Leonardo Fibonacci',
        accountNumber: 'FIB12345678',
        payments: [
            { invoice: 'INV-033', amount: 1234.56, date: '2021-01-01' },
            { invoice: 'INV-034', amount: 789.01, date: '2021-01-02' },
            { invoice: 'INV-035', amount: 456.78, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Ada Lovelace',
        accountNumber: 'ADA98765432',
        payments: [
            { invoice: 'INV-036', amount: 9876.54, date: '2021-01-01' },
            { invoice: 'INV-037', amount: 5432.1, date: '2021-01-02' },
            { invoice: 'INV-038', amount: 210.98, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Alan Turing',
        accountNumber: 'TUR19283746',
        payments: [
            { invoice: 'INV-039', amount: 1928.37, date: '2021-01-01' },
            { invoice: 'INV-040', amount: 3746.29, date: '2021-01-02' },
            { invoice: 'INV-041', amount: 4629.18, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Grace Hopper',
        accountNumber: 'HOP11223344',
        payments: [
            { invoice: 'INV-042', amount: 1122.33, date: '2021-01-01' },
            { invoice: 'INV-043', amount: 3344.55, date: '2021-01-02' },
            { invoice: 'INV-044', amount: 5566.77, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Charles Babbage',
        accountNumber: 'BAB55667788',
        payments: [
            { invoice: 'INV-045', amount: 5566.77, date: '2021-01-01' },
            { invoice: 'INV-046', amount: 7788.99, date: '2021-01-02' },
            { invoice: 'INV-047', amount: 9900.11, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Nikola Tesla',
        accountNumber: 'TES99887766',
        payments: [
            { invoice: 'INV-048', amount: 9988.77, date: '2021-01-01' },
            { invoice: 'INV-049', amount: 7766.55, date: '2021-01-02' },
            { invoice: 'INV-050', amount: 5544.33, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Marie Curie',
        accountNumber: 'CUR44556677',
        payments: [
            { invoice: 'INV-051', amount: 4455.66, date: '2021-01-01' },
            { invoice: 'INV-052', amount: 6677.88, date: '2021-01-02' },
            { invoice: 'INV-053', amount: 8899.0, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Isaac Newton',
        accountNumber: 'NEW33221100',
        payments: [
            { invoice: 'INV-054', amount: 3322.11, date: '2021-01-01' },
            { invoice: 'INV-055', amount: 1100.22, date: '2021-01-02' },
            { invoice: 'INV-056', amount: 2200.33, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Galileo Galilei',
        accountNumber: 'GAL22334455',
        payments: [
            { invoice: 'INV-057', amount: 2233.44, date: '2021-01-01' },
            { invoice: 'INV-058', amount: 3445.56, date: '2021-01-02' },
            { invoice: 'INV-059', amount: 4556.67, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Johannes Kepler',
        accountNumber: 'KEP55667788',
        payments: [
            { invoice: 'INV-060', amount: 5566.77, date: '2021-01-01' },
            { invoice: 'INV-061', amount: 7788.99, date: '2021-01-02' },
            { invoice: 'INV-062', amount: 9900.11, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'John von Neumann',
        accountNumber: 'VON99887766',
        payments: [
            { invoice: 'INV-063', amount: 25566.77, date: '2021-01-01' },
            { invoice: 'INV-064', amount: 74788.99, date: '2021-01-02' },
            { invoice: 'INV-065', amount: 900.11, date: '2021-01-03' },
        ],
    },
    {
        customerName: 'Afredis Mokpeksoon',
        accountNumber: 'AFN99887766',
        payments: [
            { invoice: 'INV-066', amount: 66.77, date: '2021-01-01' },
            { invoice: 'INV-067', amount: 88.99, date: '2021-01-02' },
            { invoice: 'INV-068', amount: 30.11, date: '2021-01-03' },
        ],
    },
];

const CollapsibleTableRow: React.FC<{ row: RowData; isOpen: boolean; onToggle: () => void }> = ({
    row,
    isOpen,
    onToggle,
}) => {
    return (
        <>
            <MuiTableRow
                isNested={false}
                sx={{ boxShadow: isOpen ? '0 -1px 0 0 var(--theme-a-4)' : 'none', position: 'relative' }}
            >
                <CollapseButton onClick={onToggle} isOpen={isOpen} />
                <MuiTableCell sx={{ width: '20%' }}>{row.customerName}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>{row.accountNumber}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Invoice Number</MuiTableCell>
                <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>Payment Amount</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Payment Date</MuiTableCell>
            </MuiTableRow>

            <MuiTableRow isNested={true}>
                <MuiTableCell colSpan={6} sx={{ padding: 0 }}>
                    <MuiCollapse in={isOpen}>
                        <MuiTableContainer>
                            <MuiTableBody>
                                {row.payments.map(payment => (
                                    <MuiTableRow key={payment.invoice} isNested={true}>
                                        <MuiTableCell
                                            sx={{
                                                padding: 0,
                                                backgroundColor: isOpen ? 'var(--ic-blue-10)' : '',
                                                minWidth: '50px',
                                            }}
                                        />
                                        <MuiTableCell sx={{ width: '20%' }} />
                                        <MuiTableCell sx={{ width: '20%' }} />
                                        <MuiTableCell sx={{ width: '20%' }}>{payment.invoice}</MuiTableCell>
                                        <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>
                                            {payment.amount}
                                        </MuiTableCell>
                                        <MuiTableCell sx={{ width: '20%' }}>{payment.date}</MuiTableCell>
                                    </MuiTableRow>
                                ))}
                            </MuiTableBody>
                        </MuiTableContainer>
                    </MuiCollapse>
                </MuiTableCell>
            </MuiTableRow>
        </>
    );
};

const CollapsibleTable = () => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(Number.parseInt(event.target.value, 10));
        setPage(0);
    };

    // Toggle all rows
    const toggleAllRows = () => {
        const allCurrentlyExpanded = Object.values(expandedRows).every(Boolean);
        const newExpandedState: Record<string, boolean> = {};

        // biome-ignore lint: forEach is fine
        dummyRowData.forEach(row => {
            newExpandedState[row.accountNumber] = !allCurrentlyExpanded;
        });

        setExpandedRows(newExpandedState);
    };

    // Toggle single row
    const toggleRow = (accountNumber: string) => {
        setExpandedRows(prev => ({
            ...prev,
            [accountNumber]: !prev[accountNumber],
        }));
    };

    // Check if all rows are expanded (for header button state)
    const allExpanded = dummyRowData.length > 0 && dummyRowData.every(row => expandedRows[row.accountNumber]);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dummyRowData.length) : 0;

    return (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <MuiTableContainer isStriped={true}>
                <MuiTableHead>
                    <MuiTableRow isNested={false}>
                        <CollapseButton onClick={toggleAllRows} isOpen={allExpanded} />
                        <MuiTableCell sx={{ width: '20%' }}>Customer Name</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }}>Account Number</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }}>Invoices</MuiTableCell>
                        <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>Payments</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }} />
                    </MuiTableRow>
                </MuiTableHead>

                <MuiTableBody>
                    {(rowsPerPage > 0
                        ? dummyRowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : dummyRowData
                    ).map(row => (
                        <CollapsibleTableRow
                            key={row.accountNumber}
                            row={row}
                            isOpen={!!expandedRows[row.accountNumber]}
                            onToggle={() => toggleRow(row.accountNumber)}
                        />
                    ))}

                    {emptyRows > 0 && (
                        <MuiTableRow isNested={false} sx={{ height: 45 * emptyRows }}>
                            <MuiTableCell colSpan={6} />
                        </MuiTableRow>
                    )}
                </MuiTableBody>

                <MuiTableFooter>
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
                </MuiTableFooter>
            </MuiTableContainer>
        </Box>
    );
};

const TableStory = () => {
    return (
        <>
            <CollapsibleTable />
        </>
    );
};

export default TableStory;
