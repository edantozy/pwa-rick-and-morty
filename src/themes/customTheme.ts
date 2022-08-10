import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

export const customTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FCF5EE'
        },
        primary: {
            main: '#01B4C6'
        },
        secondary: {
            main: green[500]
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    }
});