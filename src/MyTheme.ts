import { indigo, red, teal } from '@mui/material/colors';
import {createTheme} from "@mui/material";

const MuiPaper:any = {
    defaultProps: {
        elevation: 3,
    },
    styleOverrides:{
        root:{
            boxSizing: "border-box"
        }
    }

}
const MuiCard:any = {
    defaultProps: {
        elevation: 3,
    },
    styleOverrides:{
        root:{
            boxSizing: "border-box"
        }
    }

}

const MuiContainer:any = {
    styleOverrides:{
        root:{
            boxSizing: "border-box"
        }
    }
}

const MuiTextField :any = {
    styleOverrides:{

    }
}

export default createTheme({
    
    palette: {
        mode: 'dark',
        primary: indigo,
        secondary: teal,
        error: red,
    },
    components: {
        MuiCard,
        MuiContainer,
        MuiPaper,
        MuiTextField
    },
    spacing: 4,
    shape:{
        borderRadius:10
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});