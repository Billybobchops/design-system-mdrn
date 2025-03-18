import MuiTableHead from '@/components/table/MuiTableHead';
import { Minus, Plus } from '@components/Icon';
import MuiCollapse from '@components/table/MuiCollapse';
import MuiTable from '@components/table/MuiTable';
import MuiTableBody from '@components/table/MuiTableBody';
import MuiTableCell from '@components/table/MuiTableCell';
import MuiTableRow from '@components/table/MuiTableRow';
import Heading from '@components/typography/Heading';
import { useState } from 'react';

type RowData = {
    customerName: string;
    accountNumber: string;
    invoices: string[];
    payments: { amount: number; date: string }[];
};

const dummyRowData = [
    {
        customerName: 'Joseph Erlinda Fillare',
        accountNumber: 'XSD38513336',
        invoices: ['INV-001', 'INV-002', 'INV-003'],
        payments: [{ amount: 460.59, date: '2021-01-01' }],
    },
];

const CollapsibleTableRow: React.FC<{ row: RowData }> = ({ row }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MuiTableRow>
                <MuiTableCell>
                    <button onClick={() => setIsOpen(!isOpen)} type="button">
                        {isOpen ? <Minus /> : <Plus />}
                    </button>
                </MuiTableCell>
                <MuiTableCell>{row.customerName}</MuiTableCell>
                <MuiTableCell>{row.accountNumber}</MuiTableCell>
                {/* <MuiTableCell>{row.emailAddress}</MuiTableCell> */}
                {/* <MuiTableCell>{row.accessLevel}</MuiTableCell> */}
            </MuiTableRow>
            <MuiTableRow>
                <MuiTableCell colSpan={5}>
                    <MuiCollapse in={isOpen}>
                        <Heading semanticLevel={'h3'}>Account Settings</Heading>
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
                        <MuiTableCell />
                        <MuiTableCell>Customer Name</MuiTableCell>
                        <MuiTableCell>Account Number</MuiTableCell>
                        <MuiTableCell>Email Address</MuiTableCell>
                        <MuiTableCell>Access Level</MuiTableCell>
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
