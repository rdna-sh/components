import React from "react";
import { TableCellProps, Td } from "@chakra-ui/react";

export const NCTableCell: React.FC<TableCellProps> = ({ children, ...rest }) => {
    return (
        <Td textAlign="center" py={2} px={1} {...rest}>
            {children}
        </Td>
    );
};
