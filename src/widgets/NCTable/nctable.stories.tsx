import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCTable } from "./index";
import { tabelaFakeData } from "../../utils/fakeData";
import { NCTableRow } from "./NCTableRow";
import { NCTableCell } from "./NCTableCell";
import { NCTablePagination } from "./NCTablePagination";

const meta: Meta<typeof NCTable> = {
    title: "Novacap/Widgets/Table",
    component: NCTable,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCTable>;

export const Default: Story = {
    render: () => (
        <NCTable tableHeaderColumns={tabelaFakeData.header}>
            {tabelaFakeData.body.map((item, index) => (
                <NCTableRow key={index} borderBottomWidth="2px" borderColor="tableBorder.500">
                    <NCTableCell>{item.fatura}</NCTableCell>
                    <NCTableCell>{item.cpf}</NCTableCell>
                    <NCTableCell>{item.empresa}</NCTableCell>
                    <NCTableCell>{item.valor}</NCTableCell>
                    <NCTableCell>{item.banco}</NCTableCell>
                    <NCTableCell>{item.agencia}</NCTableCell>
                    <NCTableCell>{item.numeroConta}</NCTableCell>
                    <NCTableCell>{item.situacao}</NCTableCell>
                </NCTableRow>
            ))}
        </NCTable>
    ),
};

export const WithoutTotalItems: Story = {
    render: () => (
        <NCTable tableHeaderColumns={tabelaFakeData.header} showTotalItems={false}>
            {tabelaFakeData.body.map((item, index) => (
                <NCTableRow key={index} borderBottomWidth="2px" borderColor="tableBorder.500">
                    <NCTableCell>{item.fatura}</NCTableCell>
                    <NCTableCell>{item.cpf}</NCTableCell>
                    <NCTableCell>{item.empresa}</NCTableCell>
                    <NCTableCell>{item.valor}</NCTableCell>
                    <NCTableCell>{item.banco}</NCTableCell>
                    <NCTableCell>{item.agencia}</NCTableCell>
                    <NCTableCell>{item.numeroConta}</NCTableCell>
                    <NCTableCell>{item.situacao}</NCTableCell>
                </NCTableRow>
            ))}
        </NCTable>
    ),
};

export const WithBorderBetweenTheLinesBody: Story = {
    render: () => (
        <NCTable tableHeaderColumns={tabelaFakeData.header} showTotalItems={false}>
            {tabelaFakeData.body.map((item, index) => (
                <NCTableRow key={index} borderBottomWidth="2px" borderColor="tableBorder.500">
                    <NCTableCell borderLeftWidth="0px" borderColor="transparent">
                        {item.fatura}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.cpf}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.empresa}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.valor}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.banco}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.agencia}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.numeroConta}
                    </NCTableCell>
                    <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                        {item.situacao}
                    </NCTableCell>
                </NCTableRow>
            ))}
        </NCTable>
    ),
};

export const TableWithPagination: Story = {
    render: () => {
        const [pageIndex, setPageIndex] = useState(0);
        const [itemsPeerPage, setItemsPeerPage] = useState(10);

        const [items] = useState([
            ...tabelaFakeData.body,
            ...tabelaFakeData.body,
            ...tabelaFakeData.body,
            ...tabelaFakeData.body,
        ]);

        const onPageChange = (newPage: number) => setPageIndex(newPage);
        const onChangeItemsPeerPage = (newItemsPeerPage: number) => setItemsPeerPage(newItemsPeerPage);

        return (
            <React.Fragment>
                <NCTable
                    tableHeaderColumns={tabelaFakeData.header}
                    showTotalItems={true}
                    totalItems={items.length}
                >
                    {tabelaFakeData.body.map((item, index) => (
                        <NCTableRow key={index} borderBottomWidth="2px" borderColor="tableBorder.500">
                            <NCTableCell borderLeftWidth="0px" borderColor="transparent">
                                {item.fatura}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.cpf}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.empresa}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.valor}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.banco}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.agencia}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.numeroConta}
                            </NCTableCell>
                            <NCTableCell borderLeftWidth="2px" borderColor="tableBorder.500">
                                {item.situacao}
                            </NCTableCell>
                        </NCTableRow>
                    ))}
                </NCTable>

                <NCTablePagination
                    onPageChange={onPageChange}
                    pageIndex={pageIndex}
                    total={items.length}
                    onChangeRowsPerPage={onChangeItemsPeerPage}
                    rowsPerPageOptions={[1, 2, 3, 4, 10]}
                    rowsPerPage={itemsPeerPage}
                    rowsPerPageLabel="Custom message for items per page:"
                    previousPageFeedbackLabel="Custom previous page message"
                    nextPageFeedbackLabel="Custom next page message"
                    labelRowsPerPage="Custom page :currentPage: of :lastPage:"
                />
            </React.Fragment>
        );
    },
};
