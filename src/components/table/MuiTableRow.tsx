import TableRow from '@mui/material/TableRow';
import type { SxProps, Theme } from '@mui/material/styles';

interface MuiTableRowProps {
    children?: React.ReactNode;
    isNested: boolean;
    sx?: SxProps<Theme>;
}

const MuiTableRow: React.FC<MuiTableRowProps> = ({ children, isNested, sx }) => {
    return (
        <TableRow className={isNested ? 'nested-row' : ''} sx={sx}>
            {children}
        </TableRow>
    );
};

export default MuiTableRow;
