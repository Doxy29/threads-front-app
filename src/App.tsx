import AppRouterHandler from "src/AppRouterHandler";
import { ThemeProvider} from "@mui/material";
import MyTheme from "src/MyTheme";


function App() {

    return (
        
        <ThemeProvider theme={MyTheme}>
            <AppRouterHandler/>
        </ThemeProvider>
            
    )
}

export default App
