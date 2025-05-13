export interface TablePaginationNumeralsProps {
    currentPage: number;
    totalRows: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}
declare const TablePaginationNumerals: React.FC<TablePaginationNumeralsProps>;
export default TablePaginationNumerals;
