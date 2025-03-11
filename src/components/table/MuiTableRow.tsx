import TableRow from '@mui/material/TableRow';

interface MuiTableRowProps {
    children?: React.ReactNode;
}

const MuiTableRow: React.FC<MuiTableRowProps> = ({ children }) => {
    return <TableRow>{children}</TableRow>;
};

export default MuiTableRow;
