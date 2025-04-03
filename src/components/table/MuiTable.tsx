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
                              //   borderCollapse: 'separate',
                              //   borderSpacing: 0,
                              '& .MuiTableBody-root > .MuiTableRow-root': {
                                  backgroundColor: 'var(--utility-neutral-0)',

                                  '&:not(.nested-row):nth-child(4n+1)': {
                                      backgroundColor: 'var(--utility-neutral-05)',
                                  },
                              },
                              '& .MuiTableRow-root:not(.nested-row) .MuiTableCell-root': {
                                  padding: '12px var(--spacing-xs)',
                              },
                              '& .MuiTableRow-head': {
                                  borderBottom: '2px solid var(--theme-a-4)',
                              },
                              '& .MuiTableRow-root:not(.nested-row, .MuiTableRow-head, .MuiTableRow-footer):hover': {
                                  borderTop: '1.5px solid var(--theme-a-4)',
                                  borderBottom: '1.5px solid var(--theme-a-4)',
                              },
                              '& .MuiTableCell-root.MuiTableCell-footer.MuiTablePagination-root': {
                                  padding: '0 !important',
                              },
                          }
                        : {}
                }
            >
                {children}
            </Table>
        </TableContainer>
    );
};

export default MuiTable;
