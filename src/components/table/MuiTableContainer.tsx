import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import type { SxProps, Theme } from '@mui/material/styles';

interface MuiTableContainerProps {
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
}

const MuiTableContainer: React.FC<MuiTableContainerProps> = ({ children, sx = {} }) => {
    const baseStyles: SxProps<Theme> = {
        width: '100%',
        minWidth: '700px',
        borderCollapse: 'separate',

        '& .MuiTableBody-root > .MuiTableRow-root': {
            backgroundColor: 'var(--utility-neutral-0)',

            // '&:not(.nested-row):nth-of-type(4n+1)': {
            //     backgroundColor: 'var(--utility-neutral-05)',
            // },

            '&:not(.nested-row):nth-of-type(odd)': {
                backgroundColor: 'var(--utility-neutral-05)',
            },
        },
        '& .MuiTableRow-root:not(.nested-row) .MuiTableCell-root': {
            padding: '12px var(--spacing-xs)',
        },
        '& .MuiTableRow-root.nested-row .nested-row .MuiTableCell-root': {
            padding: '12px var(--spacing-xs)',
        },
        '& .MuiTableHead-root .MuiTableRow-root': {
            boxShadow: '0 1px 0 0 var(--theme-a-4)',
            position: 'relative',
            zIndex: 1,
        },
        '& .MuiTableRow-root:not(.nested-row, .MuiTableRow-head, .MuiTableRow-footer):hover': {
            boxShadow: '0 1px 0 0 var(--theme-a-4), 0 -1px 0 0 var(--theme-a-4)',
            position: 'relative',
            zIndex: 1,
        },
        '& .MuiTableCell-root.MuiTableCell-footer.MuiTablePagination-root': {
            padding: '0 !important',
        },
    };

    return (
        <TableContainer sx={sx}>
            <Table sx={{ ...baseStyles, ...sx }}>{children}</Table>
        </TableContainer>
    );
};

export default MuiTableContainer;
