import { TableFooter } from '@mui/material';

interface MuiTableFooterProps {
    children?: React.ReactNode;
}

const MuiTableFooter: React.FC<MuiTableFooterProps> = ({ children }) => {
    return <TableFooter>{children}</TableFooter>;
};

export default MuiTableFooter;
