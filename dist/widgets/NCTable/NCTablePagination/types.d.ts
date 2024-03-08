export interface NCTablePaginationProps {
    onPageChange: (newPage: number) => void;
    pageIndex: number;
    total: number;
    onChangeRowsPerPage: (newValueOfItemsPerPage: number) => void;
    rowsPerPage?: number;
    rowsPerPageOptions?: Array<number>;
    rowsPerPageLabel?: string;
    previousPageFeedbackLabel?: string;
    nextPageFeedbackLabel?: string;
    labelRowsPerPage?: string;
}
//# sourceMappingURL=types.d.ts.map