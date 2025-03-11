import TableCell from '@mui/material/TableCell';

interface MuiTableCellProps {
    children?: React.ReactNode;
    colSpan?: number;
}

const MuiTableCell: React.FC<MuiTableCellProps> = ({ children, colSpan }) => {
    return <TableCell colSpan={colSpan}>{children}</TableCell>;
};

export default MuiTableCell;
