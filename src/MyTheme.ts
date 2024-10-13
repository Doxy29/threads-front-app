import {indigo, red, teal} from '@mui/material/colors';
import {Components, createTheme, Theme} from "@mui/material";

const MuiPaper: Components<Theme>["MuiPaper"] = {
    defaultProps: {
        elevation: 3,
    },
    styleOverrides:{
        root:{

        }
    }

}
const MuiCard: Components<Theme>["MuiCard"] = {
    defaultProps: {
        elevation: 3,
    },
    styleOverrides:{
        root:{

        }
    }

}

const MuiContainer: Components<Theme>["MuiContainer"] = {
    styleOverrides:{
        root:{
        }
    }
}

const MuiTextField : Components<Theme>["MuiTextField"] = {
    defaultProps:{
        size:"small",
        InputProps:{
            sx: {borderRadius:"1000px"}
        }
    },
}

export default createTheme({
    
    palette: {
        mode: 'light',
        primary: indigo,
        secondary: teal,
        error: red
    },
    components: {
        MuiCard,
        MuiContainer,
        MuiPaper,
        MuiTextField
    },
    spacing: 4,
    shape:{
      borderRadius: 5
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});