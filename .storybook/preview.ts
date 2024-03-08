import type { Preview } from "@storybook/react";
import { novaCapTheme } from "../src/theme/theme";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        chakra: {
            theme: novaCapTheme,
        },
    },
};

export default preview;
