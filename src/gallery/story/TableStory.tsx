import MuiTableHead from '@/components/table/MuiTableHead';
import CollapseButton from '@components/table/CollapseButton';
import MuiCollapse from '@components/table/MuiCollapse';
import MuiTable from '@components/table/MuiTable';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableRow from '@components/table/MuiTableRow';
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
];

const CollapsibleTableRow: React.FC<{ row: RowData }> = ({ row }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MuiTableRow isNested={false} sx={isOpen ? { borderTop: '1.5px solid var(--theme-a-4)' } : {}}>
                <MuiTableCell
                    sx={{
                        width: '5%',
                        // display: 'inline-block',
                        padding: '0 !important',
                        borderBottom: isOpen ? '1.5px solid var(--theme-a-4)' : 'none',
                    }}
                >
                    <CollapseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                </MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>{row.customerName}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>{row.accountNumber}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Invoice Number</MuiTableCell>
                <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>Payment Amount</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Payment Date</MuiTableCell>
            </MuiTableRow>

            <MuiTableRow isNested={true}>
                <MuiTableCell colSpan={6} sx={{ padding: 0 }}>
                    <MuiCollapse in={isOpen}>
                        <MuiTable>
                            <MuiTableBody>
                                {row.payments.map(payment => (
                                    <MuiTableRow key={payment.invoice} isNested={true}>
                                        <MuiTableCell
                                            sx={{ width: '5%', backgroundColor: isOpen ? 'var(--ic-blue-10)' : '' }}
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
                        </MuiTable>
                    </MuiCollapse>
                </MuiTableCell>
            </MuiTableRow>
        </>
    );
};

const CollapsibleTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MuiTable isStriped={true}>
                <MuiTableHead>
                    <MuiTableRow isNested={false}>
                        <MuiTableCell sx={{ width: '5%', padding: 0 }}>
                            <CollapseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                        </MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }}>Customer Name</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }}>Account Number</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }}>Invoices</MuiTableCell>
                        <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>Payments</MuiTableCell>
                        <MuiTableCell sx={{ width: '20%' }} />
                    </MuiTableRow>
                </MuiTableHead>
                <MuiTableBody>
                    {dummyRowData.map(row => (
                        <CollapsibleTableRow key={row.accountNumber} row={row} />
                    ))}
                </MuiTableBody>
            </MuiTable>
        </>
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
