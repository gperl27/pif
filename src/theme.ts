import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffffa6',
            main: '#dde875',
            dark: '#a9b645',
            contrastText: '#000',
        },
    },
});
