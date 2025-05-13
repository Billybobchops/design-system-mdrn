import type { SxProps, Theme } from '@mui/material/styles';
interface MuiTableRowProps {
    children?: React.ReactNode;
    isNested: boolean;
    sx?: SxProps<Theme>;
}
declare const MuiTableRow: React.FC<MuiTableRowProps>;
export default MuiTableRow;
