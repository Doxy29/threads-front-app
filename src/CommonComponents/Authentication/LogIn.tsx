// @flow 
import React, {FC, useState} from "react";
import {Box, Button, Stack, TextField} from "@mui/material";
import {login} from "src/Services/AuthenticationService.ts";

export type logInFormType = {
    userOrEmail: string,
    password: string,
}

type Props = {

}

const LogIn: FC<Props> = () => {

    const [logInForm, setLogInForm ] = useState<logInFormType>({
        userOrEmail:"",
        password:""})

    const onFormChange = ({currentTarget}:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setLogInForm({
            ...logInForm,
            [currentTarget.id]: currentTarget.value,
        })
    }




    return (
        <>
            <Box component={"form"}>
                <Stack gap={3}>
                    <TextField
                        id={"userOrEmail"}
                        required
                        label="UserName or Email"
                        variant={"outlined"}
                        value={logInForm.userOrEmail}
                        onChange={onFormChange}
                    />
                    <TextField
                        id={"password"}
                        type="password"
                        required
                        label="password"
                        variant={"outlined"}
                        value={logInForm.password}
                        onChange={onFormChange}
                    />
                </Stack>
            </Box>
            <Button variant="contained" onClick={()=>login(logInForm)}> Log In! </Button>
        </>
    );
};

export default LogIn