import { FirstPage, LastPage, NextPage, PreviousPage } from '@components/Icon';
import LinkIconButton from '@components/button/LinkIconButton';
import TablePaginationNumerals from '@components/table/TablePaginationNumerals';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

interface MuiTablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
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
        <Box sx={{ marginLeft: 'auto', gap: 'var(--spacing-s)', marginRight: 'var(--spacing-s)' }}>
            <TablePaginationNumerals
                currentPage={page}
                totalRows={count}
                rowsPerPage={rowsPerPage}
                onPageChange={newPage => onPageChange(null, newPage - 1)}
            />
        </Box>
    );
};

interface MuiTablePaginationProps {
    count: number;
    colSpan: number;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const MuiTablePagination: React.FC<MuiTablePaginationProps> = ({
    count,
    colSpan,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
}) => {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={colSpan}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage="Show"
            slotProps={{
                select: {
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                },
            }}
            sx={{
                '& .MuiTablePagination-toolbar': {
                    '& .MuiTablePagination-spacer': {
                        display: 'none',
                    },
                },
                '& .MuiInputBase-root .MuiNativeSelect-select.MuiTablePagination-select': {
                    border: '1px solid var(--utility-neutral-50)',
                    borderRadius: 'var(--border-radius-s)',
                },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={MuiTablePaginationActions}
        />
    );
};

export default MuiTablePagination;
