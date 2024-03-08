import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { gerarDadosFicticiosDeFrutas } from "../../utils/fakeData";
import { NCSelect } from "./index";

const fruitList = gerarDadosFicticiosDeFrutas();

const meta: Meta<typeof NCSelect> = {
    title: "Novacap/Components/Select",
    component: NCSelect,
    //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCSelect>;

export const Default: Story = {
    render: () => (
        <NCSelect>
            {fruitList.map((fruit) => (
                <option key={fruit.value} value={fruit.value}>
                    {fruit.nome}
                </option>
            ))}
        </NCSelect>
    ),
};
