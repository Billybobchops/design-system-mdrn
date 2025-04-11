import Collapse from '@mui/material/Collapse';
import type { SxProps, Theme } from '@mui/material/styles';

interface MuiCollapseProps {
    children?: React.ReactNode;
    in: boolean;
    sx?: SxProps<Theme>;
}

const MuiCollapse: React.FC<MuiCollapseProps> = ({ children, in: isOpen, sx }) => {
    return (
        <Collapse in={isOpen} sx={sx}>
            {children}
        </Collapse>
    );
};

export default MuiCollapse;
