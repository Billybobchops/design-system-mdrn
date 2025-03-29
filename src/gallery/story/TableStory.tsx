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
];

const CollapsibleTableRow: React.FC<{ row: RowData }> = ({ row }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MuiTableRow>
                <MuiTableCell sx={{ width: '5%' }}>
                    <CollapseButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                </MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>{row.customerName}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>{row.accountNumber}</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Invoice Number</MuiTableCell>
                <MuiTableCell sx={{ width: '15%', textAlign: 'right' }}>Payment Amount</MuiTableCell>
                <MuiTableCell sx={{ width: '20%' }}>Payment Date</MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
                <MuiTableCell colSpan={6} sx={{ padding: 0 }}>
                    <MuiCollapse in={isOpen}>
                        <MuiTable>
                            <MuiTableBody>
                                {row.payments.map(payment => (
                                    <MuiTableRow key={payment.invoice}>
                                        <MuiTableCell sx={{ width: '5%' }} />
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
    return (
        <>
            <MuiTable>
                <MuiTableHead>
                    <MuiTableRow>
                        <MuiTableCell sx={{ width: '5%' }} />
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
