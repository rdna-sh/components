import React from "react";
import { Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { NCTableProps } from "./types";

export const NCTable: React.FC<NCTableProps> = ({
    tableHeaderColumns = [],
    totalItems = 0,
    showTotalItems = true,
    showTotalItemsLabel = "Quantidade de registros",
    tableHeaderProps,
    tableContainerProps,
    tableBodyProps,
    tableFooterProps,
    children,
}) => {
    return (
        <TableContainer
            borderRadius="0.625rem"
            borderWidth="2px"
            borderColor="tableBorder.500"
            {...tableContainerProps}
        >
            <Table variant="simple">
                <Thead bg="tableHeaderBackground.500" {...tableHeaderProps}>
                    <Tr>
                        {tableHeaderColumns.map((column, index) => (
                            <Th
                                key={index}
                                color="tableTextBody.500"
                                fontFamily="Roboto"
                                fontSize="0.875rem"
                                textAlign="center"
                            >
                                {column}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody color="tableTextBody.500" fontFamily="Roboto" {...tableBodyProps}>
                    {children}
                </Tbody>

                <Tfoot fontWeight={600} {...tableFooterProps} display={showTotalItems ? "initial" : "none"}>
                    <Tr>
                        <Th color="tableTextBody.500" fontFamily="Roboto" fontSize="sm" textTransform="uppercase">
                            {showTotalItemsLabel}: {totalItems}
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};
