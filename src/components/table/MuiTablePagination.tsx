import { FirstPage, LastPage, NextPage, PreviousPage } from '@components/Icon';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import clsx from 'clsx';
import classes from './MuiTablePagination.module.scss';

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
        <Box sx={{ display: 'flex', gap: 'var(--spacing-s)', margin: '0 var(--spacing-s)' }}>
            {/* replace these with icon buttons and delete MuiTablePagination.module.scss */}
            {/* This will be better componentization and have ability to hook into disabled state style changes */}
            <button
                className={clsx(classes.paginationButton)}
                type="button"
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                <FirstPage fill={'var(--theme-a-3)'} />
            </button>
            <button
                className={classes.paginationButton}
                type="button"
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                <PreviousPage fill={'var(--theme-a-3)'} />
            </button>
            <button
                className={classes.paginationButton}
                type="button"
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                <NextPage fill={'var(--theme-a-3)'} />
            </button>
            <button
                className={classes.paginationButton}
                type="button"
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <LastPage fill={'var(--theme-a-3)'} />
            </button>
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
            slotProps={{
                select: {
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={MuiTablePaginationActions}
        />
    );
};

export default MuiTablePagination;
