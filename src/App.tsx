import AppRouterHandler from "src/AppRouterHandler";
import {Box, Theme, ThemeProvider} from "@mui/material";
import MyTheme from "src/MyTheme";

const appContainerStyles = (theme: Theme)=> ({
    background: `linear-gradient(to right bottom, ${theme.palette.primary.dark},${theme.palette.secondary.dark})`,
    height: "100%"
})
function App() {

    return (
        <ThemeProvider theme={MyTheme}>
            <Box sx={appContainerStyles}>
                <AppRouterHandler/>
            </Box>
        </ThemeProvider>
    )
}

export default App
