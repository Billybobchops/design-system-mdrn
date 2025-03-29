import TableCell from '@mui/material/TableCell';
import type { SxProps, Theme } from '@mui/material/styles';

interface MuiTableCellProps {
    children?: React.ReactNode;
    colSpan?: number;
    sx?: SxProps<Theme>;
}

const MuiTableCell: React.FC<MuiTableCellProps> = ({ children, colSpan, sx }) => {
    return (
        <TableCell sx={sx} colSpan={colSpan}>
            {children}
        </TableCell>
    );
};

export default MuiTableCell;
