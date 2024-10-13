import {useState} from "react";
import {Button, Stack, Paper} from "@mui/material";
import LogIn from "src/CommonComponents/Authentication/LogIn.tsx";
import SignUp from "src/CommonComponents/Authentication/SignUp.tsx";

const PaperStyles = {
    maxWidth: "700px",
    p:4,
    m:4
}

const Authentication = () => {
    const [isLogIn, setIsLogIn] = useState<boolean>(false)

    return (
        <Paper sx={PaperStyles}>
            <Stack gap={6}>
                <Stack direction="row" justifyContent={"space-between"}>
                    <Button
                        variant={isLogIn ? "contained" : "outlined"}
                        onClick={() => setIsLogIn(true)}
                    >
                        Login
                    </Button>
                    <Button
                        variant={!isLogIn ? "contained" : "outlined"}
                        onClick={() => setIsLogIn(false)}
                    >
                        SignIn
                    </Button>
                </Stack>
                {
                    isLogIn ?
                        <LogIn/>
                        :
                        <SignUp/>
                }
            </Stack>
        </Paper>
    )
}

export default Authentication




