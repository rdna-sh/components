import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NCSingleDatepicker } from "./index";

const meta: Meta<typeof NCSingleDatepicker> = {
    title: "Novacap/Widgets/DatePicker",
    component: NCSingleDatepicker, //👇 Enables auto-generated documentation for the component story
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NCSingleDatepicker>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<Date>(new Date());

        const onDateChange = (newDate: Date) => {
            setDate(newDate);
        };

        return <NCSingleDatepicker date={date} onDateChange={onDateChange} />;
    },
};
