import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

interface MuiTableProps {
    children?: React.ReactNode;
}

const MuiTable: React.FC<MuiTableProps> = ({ children }) => {
    return (
        <TableContainer>
            <Table>{children}</Table>
        </TableContainer>
    );
};

export default MuiTable;
