import type { SxProps, Theme } from '@mui/material/styles';
interface MuiCollapseProps {
    children?: React.ReactNode;
    in: boolean;
    sx?: SxProps<Theme>;
}
declare const MuiCollapse: React.FC<MuiCollapseProps>;
export default MuiCollapse;
