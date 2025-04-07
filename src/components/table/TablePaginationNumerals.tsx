import { FirstPage, LastPage, NextPage, PreviousPage } from '@components/Icon';
import { Pagination, PaginationItem } from '@mui/material';

export interface TablePaginationNumeralsProps {
    currentPage: number;
    totalRows: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

const TablePaginationNumerals: React.FC<TablePaginationNumeralsProps> = ({
    currentPage,
    totalRows,
    rowsPerPage,
    onPageChange,
}) => {
    const pageCount = Math.ceil(totalRows / rowsPerPage);

    if (pageCount <= 1) return null;

    return (
        <Pagination
            page={currentPage + 1}
            count={pageCount}
            onChange={(_, page) => onPageChange(page)}
            shape="rounded"
            showFirstButton
            showLastButton
            // hidePrevButton
            // hideNextButton
            renderItem={item => (
                <PaginationItem
                    slots={{ previous: PreviousPage, next: NextPage, first: FirstPage, last: LastPage }}
                    {...item}
                />
            )}
            siblingCount={1} // Number of pages to show on each side of current page
            boundaryCount={1} // Number of pages to show at start/end
            sx={{
                '& .MuiPagination-ul': {
                    flexFlow: 'row',
                    flexWrap: 'nowrap',
                },
                '& .MuiButtonBase-root': {
                    color: 'var(--theme-a-4)',
                    borderRadius: 'var(--border-radius-s)',
                    fontWeight: 700,
                    fontSize: '16px',

                    '&.Mui-selected': {
                        backgroundColor: 'var(--theme-a-4)',
                        borderRadius: 'var(--border-radius-s)',
                        color: 'var(--utility-neutral-0)',

                        '&:hover': {
                            backgroundColor: 'var(--theme-a-4)',
                        },
                    },
                },
            }}
        />
    );
};

export default TablePaginationNumerals;
