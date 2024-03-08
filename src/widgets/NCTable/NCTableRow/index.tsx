import React from "react";
import { TableRowProps, Tr } from "@chakra-ui/react";

export const NCTableRow: React.FC<TableRowProps> = ({ children, ...rest }) => {
    return (
        <Tr borderBottomWidth="2px" borderColor="tableBorder.500" {...rest}>
            {children}
        </Tr>
    );
};
