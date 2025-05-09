interface MuiTablePaginationProps {
    count: number;
    colSpan: number;
    rowsPerPage: number;
    page: number;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
declare const MuiTablePagination: React.FC<MuiTablePaginationProps>;
export default MuiTablePagination;
