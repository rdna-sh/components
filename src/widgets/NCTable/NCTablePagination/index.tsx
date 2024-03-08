import React, { useMemo } from "react";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { NCSelect } from "../../../components/NCSelect";
import { NCTablePaginationProps } from "./types";

export const NCTablePagination: React.FC<NCTablePaginationProps> = ({
    onPageChange,
    pageIndex = 0,
    total = 0,
    rowsPerPage = 10,
    onChangeRowsPerPage,
    rowsPerPageOptions = [5, 10, 20],
    rowsPerPageLabel = "Registros por página:",
    previousPageFeedbackLabel = "Página Anterior",
    nextPageFeedbackLabel = "Próxima Página",
    labelRowsPerPage = "Página :currentPage: de :lastPage:",
}) => {
    const canPreviousPage = useMemo(() => {
        return pageIndex > 0;
    }, [pageIndex]);

    const canNextPage = useMemo(() => {
        const itemsShowedUntilTheMoment = (pageIndex + 1) * rowsPerPage;
        return itemsShowedUntilTheMoment < total;
    }, [pageIndex, rowsPerPage, total]);

    const lastPage = useMemo(() => {
        return Math.ceil(total / rowsPerPage);
    }, [rowsPerPage, total]);

    return (
        <Flex
            justifyContent={{ base: "space-between", md: "flex-end" }}
            m={4}
            alignItems={{ base: "flex-start", md: "center" }}
            gap={5}
        >
            <Flex alignItems={{ md: "center" }} gap={{ base: 1, md: 2 }} direction={{ base: "column", md: "row" }}>
                <Text fontSize="sm">{rowsPerPageLabel}</Text>

                {/* @ts-expect-error O e.target.value sempre virá preenchido */}
                <NCSelect w={32} size="sm" borderRadius="0.5rem" value={rowsPerPage} onChange={(e) => onChangeRowsPerPage(e.target.value)}>
                    {rowsPerPageOptions.map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </NCSelect>
            </Flex>

            <Flex alignItems="center" gap={2}>
                <Tooltip label={previousPageFeedbackLabel}>
                    <IconButton
                        onClick={() => onPageChange(pageIndex - 1)}
                        isDisabled={!canPreviousPage}
                        aria-label=""
                        icon={<ChevronLeftIcon h={6} w={6} />}
                        size="sm"
                    />
                </Tooltip>

                <Text flexShrink="0" fontSize="sm">
                    {labelRowsPerPage
                        .replace(":currentPage:", String(pageIndex + 1))
                        .replace(":lastPage:", String(lastPage))}
                </Text>

                <Tooltip label={nextPageFeedbackLabel}>
                    <IconButton
                        onClick={() => onPageChange(pageIndex + 1)}
                        isDisabled={!canNextPage}
                        aria-label=""
                        size="sm"
                        icon={<ChevronRightIcon h={6} w={6} />}
                    />
                </Tooltip>
            </Flex>
        </Flex>
    );
};
