
import { ThemeProvider } from '@material-ui/core/styles';
import { alphaTheme } from '../src/styles/theme';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [
    (Story) => (
        <ThemeProvider theme={alphaTheme}>
            <Story />
        </ThemeProvider>
    ),
];
