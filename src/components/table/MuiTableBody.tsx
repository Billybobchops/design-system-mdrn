import TableBody from '@mui/material/TableBody';

interface MuiTableBodyProps {
    children?: React.ReactNode;
}

const MuiTableBody: React.FC<MuiTableBodyProps> = ({ children }) => {
    return <TableBody>{children}</TableBody>;
};

export default MuiTableBody;
