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
    {
        customerName: 'Quark Gul Dukat',
        accountNumber: 'XSD44044989',
        payments: [
            { invoice: 'INV-016', amount: 4.59, date: '2021-01-01' },
            { invoice: 'INV-017', amount: 13.5, date: '2021-01-02' },
            { invoice: 'INV-018', amount: 310.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-016', amount: 45, date: '2021-02-01' },
            { ticketNumber: 'TCK-017', amount: 75, date: '2021-02-02' },
            { ticketNumber: 'TCK-018', amount: 85, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-019', amount: 75, date: '2021-02-01' },
            { ticketNumber: 'TCK-020', amount: 105, date: '2021-02-02' },
            { ticketNumber: 'TCK-021', amount: 115, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-022', amount: 35, date: '2021-02-01' },
            { ticketNumber: 'TCK-023', amount: 65, date: '2021-02-02' },
            { ticketNumber: 'TCK-024', amount: 75, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-025', amount: 85, date: '2021-02-01' },
            { ticketNumber: 'TCK-026', amount: 115, date: '2021-02-02' },
            { ticketNumber: 'TCK-027', amount: 125, date: '2021-02-03' },
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
        parkingTickets: [
            { ticketNumber: 'TCK-028', amount: 95, date: '2021-02-01' },
            { ticketNumber: 'TCK-029', amount: 125, date: '2021-02-02' },
            { ticketNumber: 'TCK-030', amount: 135, date: '2021-02-03' },
        ],
    },
];

const TableStory2 = () => {
    return (
        <>
            <MuiTable data={dummyRowData} />
        </>
    );
};

export default TableStory2;
