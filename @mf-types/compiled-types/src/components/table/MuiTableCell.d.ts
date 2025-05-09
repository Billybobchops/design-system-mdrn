import type { SxProps, Theme } from '@mui/material/styles';
interface MuiTableCellProps {
    children?: React.ReactNode;
    colSpan?: number;
    sx?: SxProps<Theme>;
}
declare const MuiTableCell: React.FC<MuiTableCellProps>;
export default MuiTableCell;
