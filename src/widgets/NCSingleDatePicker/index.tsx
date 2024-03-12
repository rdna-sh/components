import React from "react";
import { SingleDatepicker, SingleDatepickerProps } from "chakra-dayzed-datepicker";

export const NCSingleDatepicker: React.FC<SingleDatepickerProps> = (props) => {
    return (
        <SingleDatepicker
            configs={{ dateFormat: "dd/MM/yyyy" }}
            propsConfigs={{
                inputProps: {
                    focusBorderColor: "yellow.500",
                    borderColor: "blue.700",
                    borderWidth: "2px",
                    _focus: { borderWidth: "1px" },
                },
            }}
            {...props}
        />
    );
};
