import { TableBodyProps, TableContainerProps, TableFooterProps, TableHeadProps } from "@chakra-ui/react";
import React from "react";
export type NCTableProps = {
    totalItems?: number;
    showTotalItems?: boolean;
    showTotalItemsLabel?: string;
    tableHeaderColumns: Array<string>;
    tableHeaderProps?: TableHeadProps;
    tableContainerProps?: TableContainerProps;
    tableBodyProps?: TableBodyProps;
    tableFooterProps?: TableFooterProps;
    children?: React.ReactNode;
};
//# sourceMappingURL=types.d.ts.map