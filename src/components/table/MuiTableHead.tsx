import TableHead from '@mui/material/TableHead';

interface MuiTableHeadProps {
    children?: React.ReactNode;
}

const MuiTableHead: React.FC<MuiTableHeadProps> = ({ children }) => {
    return <TableHead>{children}</TableHead>;
};

export default MuiTableHead;
