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
        customerName: 'Constantine the Great',
        accountNumber: 'XSD55513336',
        payments: [
            { invoice: 'INV-016', amount: 500.59, date: '2021-01-01' },
            { invoice: 'INV-017', amount: 300.5, date: '2021-01-02' },
            { invoice: 'INV-018', amount: 1200.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-016', amount: 45, date: '2021-02-01' },
            { ticketNumber: 'TCK-017', amount: 70, date: '2021-02-02' },
            { ticketNumber: 'TCK-018', amount: 95, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Justinian I',
        accountNumber: 'BSD66613337',
        payments: [
            { invoice: 'INV-019', amount: 150.59, date: '2021-01-01' },
            { invoice: 'INV-020', amount: 410.5, date: '2021-01-02' },
            { invoice: 'INV-021', amount: 310.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-019', amount: 55, date: '2021-02-01' },
            { ticketNumber: 'TCK-020', amount: 85, date: '2021-02-02' },
            { ticketNumber: 'TCK-021', amount: 115, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Theodora',
        accountNumber: 'CSD77719986',
        payments: [
            { invoice: 'INV-022', amount: 210.59, date: '2021-01-01' },
            { invoice: 'INV-023', amount: 510.5, date: '2021-01-02' },
            { invoice: 'INV-024', amount: 105.75, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-022', amount: 65, date: '2021-02-01' },
            { ticketNumber: 'TCK-023', amount: 95, date: '2021-02-02' },
            { ticketNumber: 'TCK-024', amount: 125, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Basil II',
        accountNumber: 'CSD88844986',
        payments: [
            { invoice: 'INV-025', amount: 604.59, date: '2021-01-01' },
            { invoice: 'INV-026', amount: 710.5, date: '2021-01-02' },
            { invoice: 'INV-027', amount: 201.75, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-025', amount: 75, date: '2021-02-01' },
            { ticketNumber: 'TCK-026', amount: 105, date: '2021-02-02' },
            { ticketNumber: 'TCK-027', amount: 135, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Alexios I Komnenos',
        accountNumber: 'DSD99944986',
        payments: [
            { invoice: 'INV-028', amount: 8404.59, date: '2021-01-01' },
            { invoice: 'INV-029', amount: 20.5, date: '2021-01-02' },
            { invoice: 'INV-030', amount: 51.75, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-028', amount: 85, date: '2021-02-01' },
            { ticketNumber: 'TCK-029', amount: 115, date: '2021-02-02' },
            { ticketNumber: 'TCK-030', amount: 145, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Anna Komnene',
        accountNumber: 'XSD11113336',
        payments: [
            { invoice: 'INV-031', amount: 300.59, date: '2021-01-01' },
            { invoice: 'INV-032', amount: 200.5, date: '2021-01-02' },
            { invoice: 'INV-033', amount: 100.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-031', amount: 35, date: '2021-02-01' },
            { ticketNumber: 'TCK-032', amount: 55, date: '2021-02-02' },
            { ticketNumber: 'TCK-033', amount: 75, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'John II Komnenos',
        accountNumber: 'BSD22213337',
        payments: [
            { invoice: 'INV-034', amount: 450.59, date: '2021-01-01' },
            { invoice: 'INV-035', amount: 350.5, date: '2021-01-02' },
            { invoice: 'INV-036', amount: 250.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-034', amount: 45, date: '2021-02-01' },
            { ticketNumber: 'TCK-035', amount: 65, date: '2021-02-02' },
            { ticketNumber: 'TCK-036', amount: 85, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Manuel I Komnenos',
        accountNumber: 'CSD33319986',
        payments: [
            { invoice: 'INV-037', amount: 550.59, date: '2021-01-01' },
            { invoice: 'INV-038', amount: 450.5, date: '2021-01-02' },
            { invoice: 'INV-039', amount: 350.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-037', amount: 55, date: '2021-02-01' },
            { ticketNumber: 'TCK-038', amount: 75, date: '2021-02-02' },
            { ticketNumber: 'TCK-039', amount: 95, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Andronikos I Komnenos',
        accountNumber: 'CSD44444986',
        payments: [
            { invoice: 'INV-040', amount: 650.59, date: '2021-01-01' },
            { invoice: 'INV-041', amount: 550.5, date: '2021-01-02' },
            { invoice: 'INV-042', amount: 450.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-040', amount: 65, date: '2021-02-01' },
            { ticketNumber: 'TCK-041', amount: 85, date: '2021-02-02' },
            { ticketNumber: 'TCK-042', amount: 105, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Isaac II Angelos',
        accountNumber: 'DSD55544986',
        payments: [
            { invoice: 'INV-043', amount: 750.59, date: '2021-01-01' },
            { invoice: 'INV-044', amount: 650.5, date: '2021-01-02' },
            { invoice: 'INV-045', amount: 550.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-043', amount: 75, date: '2021-02-01' },
            { ticketNumber: 'TCK-044', amount: 95, date: '2021-02-02' },
            { ticketNumber: 'TCK-045', amount: 115, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Isaac II Angelos',
        accountNumber: 'DSD55544986',
        payments: [
            { invoice: 'INV-043', amount: 750.59, date: '2021-01-01' },
            { invoice: 'INV-044', amount: 650.5, date: '2021-01-02' },
            { invoice: 'INV-045', amount: 550.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-043', amount: 75, date: '2021-02-01' },
            { ticketNumber: 'TCK-044', amount: 95, date: '2021-02-02' },
            { ticketNumber: 'TCK-045', amount: 115, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Michael VIII Palaiologos',
        accountNumber: 'XSD66677788',
        payments: [
            { invoice: 'INV-046', amount: 850.59, date: '2021-01-01' },
            { invoice: 'INV-047', amount: 950.5, date: '2021-01-02' },
            { invoice: 'INV-048', amount: 1050.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-046', amount: 85, date: '2021-02-01' },
            { ticketNumber: 'TCK-047', amount: 105, date: '2021-02-02' },
            { ticketNumber: 'TCK-048', amount: 125, date: '2021-02-03' },
        ],
    },
    {
        customerName: 'Andronikos II Palaiologos',
        accountNumber: 'BSD88899900',
        payments: [
            { invoice: 'INV-049', amount: 950.59, date: '2021-01-01' },
            { invoice: 'INV-050', amount: 1150.5, date: '2021-01-02' },
            { invoice: 'INV-051', amount: 1250.5, date: '2021-01-03' },
        ],
        parkingTickets: [
            { ticketNumber: 'TCK-049', amount: 95, date: '2021-02-01' },
            { ticketNumber: 'TCK-050', amount: 115, date: '2021-02-02' },
            { ticketNumber: 'TCK-051', amount: 135, date: '2021-02-03' },
        ],
    },
];

const TableStory = () => {
    return (
        <>
            <MuiTable title="Example Ai Report Generator with nested rows" data={dummyRowData} />
        </>
    );
};

export default TableStory;
