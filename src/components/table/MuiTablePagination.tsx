import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

interface MuiTablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const MuiTablePaginationActions: React.FC<MuiTablePaginationActionsProps> = ({
    count,
    page,
    rowsPerPage,
    onPageChange,
}) => {
    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <button type="button" onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {/* <FirstPageIcon /> */}
            </button>
            <button type="button" onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {/* <KeyboardArrowLeft /> */}
            </button>
            <button
                type="button"
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {/* <KeyboardArrowRight /> */}
            </button>
            <button
                type="button"
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {/* <LastPageIcon /> */}
            </button>
        </Box>
    );
};

// const MuiTablePagination: React.FC = () => {
//     return (
//         <TablePagination
//             rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//             colSpan={3}
//             count={rows.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             slotProps={{
//                 select: {
//                     inputProps: {
//                         'aria-label': 'rows per page',
//                     },
//                     native: true,
//                 },
//             }}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             ActionsComponent={TablePaginationActions}
//         />
//     );
// };
