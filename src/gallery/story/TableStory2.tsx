import MuiTable from '@components/table/MuiTable';

const dummyRowData = [
    {
        customerName: 'Joseph Erlinda Fillare',
        accountNumber: 'XSD38513336',
        payments: [
            { invoice: 'INV-001', amount: 460.59, date: '2021-01-01' },
            { invoice: 'INV-002', amount: 210.5, date: '2021-01-02' },
            { invoice: 'INV-003', amount: 1410.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-001', amount: 50, date: '2021-02-01' },
            { ticketNumber: 'TCK-002', amount: 75, date: '2021-02-02' },
            { ticketNumber: 'TCK-003', amount: 100, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-004', amount: 60, date: '2021-02-01' },
            { ticketNumber: 'TCK-005', amount: 80, date: '2021-02-02' },
            { ticketNumber: 'TCK-006', amount: 120, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-007', amount: 70, date: '2021-02-01' },
            { ticketNumber: 'TCK-008', amount: 90, date: '2021-02-02' },
            { ticketNumber: 'TCK-009', amount: 110, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-010', amount: 55, date: '2021-02-01' },
            { ticketNumber: 'TCK-011', amount: 85, date: '2021-02-02' },
            { ticketNumber: 'TCK-012', amount: 95, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-013', amount: 65, date: '2021-02-01' },
            { ticketNumber: 'TCK-014', amount: 95, date: '2021-02-02' },
            { ticketNumber: 'TCK-015', amount: 105, date: '2021-02-03' },
        ],
    },
];

const TableStory2 = () => {
    return (
        <>
            <MuiTable title="Example Ai Report Generator" data={dummyRowData} />
        </>
    );
};

export default TableStory2;
