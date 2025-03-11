import Collapse from '@mui/material/Collapse';

interface MuiCollapseProps {
    children?: React.ReactNode;
    in: boolean;
}

const MuiCollapse: React.FC<MuiCollapseProps> = ({ children, in: isOpen }) => {
    return <Collapse in={isOpen}>{children}</Collapse>;
};

export default MuiCollapse;
