import { AppRouter } from "./router/AppRouter"
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from "@mui/system"
import { customTheme } from "./themes"
import { Provider } from 'react-redux'
import { store } from "./store"

export const RickAndMortyApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </Provider>
    )
}

export default RickAndMortyApp