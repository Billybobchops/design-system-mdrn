import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

interface MuiTableProps {
    children?: React.ReactNode;
    isStriped?: boolean;
}

const MuiTable: React.FC<MuiTableProps> = ({ children, isStriped = false }) => {
    return (
        <TableContainer>
            <Table
                sx={
                    isStriped
                        ? {
                              tableLayout: 'fixed',
                              width: '100%',
                              minWidth: '700px',
                              borderCollapse: 'separate',

                              '& .MuiTableBody-root > .MuiTableRow-root': {
                                  backgroundColor: 'var(--utility-neutral-0)',

                                  '&:not(.nested-row):nth-child(4n+1)': {
                                      backgroundColor: 'var(--utility-neutral-05)',
                                  },
                              },
                              '& .MuiTableRow-root:not(.nested-row) .MuiTableCell-root': {
                                  padding: '12px var(--spacing-xs)',
                              },
                              '& .MuiTableRow-root.nested-row .nested-row .MuiTableCell-root': {
                                  padding: '12px var(--spacing-xs)',
                              },
                              '& .MuiTableRow-head': {
                                  borderBottom: '2px solid var(--theme-a-4)',
                              },
                              '& .MuiTableRow-root:not(.nested-row, .MuiTableRow-head, .MuiTableRow-footer):hover': {
                                  boxShadow: '0 1px 0 0 var(--theme-a-4), 0 -1px 0 0 var(--theme-a-4)',
                              },
                              '& .MuiTableCell-root.MuiTableCell-footer.MuiTablePagination-root': {
                                  padding: '0 !important',
                              },
                          }
                        : { tableLayout: 'fixed', width: '100%', minWidth: '700px', borderCollapse: 'separate' }
                }
            >
                {children}
            </Table>
        </TableContainer>
    );
};

export default MuiTable;
