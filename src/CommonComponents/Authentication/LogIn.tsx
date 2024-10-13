// @flow 
import React, {FC, useState} from "react";
import {Box, Button, Stack, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {signInFormType} from "src/types";
import {signInCall} from "src/state/userState.ts";


type Props = {

}

const LogIn: FC<Props> = () => {
    const dispatch = useDispatch();
    const [signInForm, setSignInForm ] = useState<signInFormType>({
        userAlias:"",
        email:"",
        password:""})

    const onFormChange = ({currentTarget}:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setSignInForm({
            ...signInForm,
            [currentTarget.id]: currentTarget.value,
        })
    }




    return (
        <>
            <Box component={"form"}>
                <Stack gap={3}>
                    <TextField
                        id={"userAlias"}
                        required
                        label="UserName or Email"
                        variant={"outlined"}
                        value={signInForm.userAlias}
                        onChange={onFormChange}
                    />
                    <TextField
                        id={"password"}
                        type="password"
                        required
                        label="password"
                        variant={"outlined"}
                        value={signInForm.password}
                        onChange={onFormChange}
                    />
                </Stack>
            </Box>
            <Button variant="contained" color={"error"} onClick={()=>dispatch(signInCall(signInForm))}> Log In! </Button>
        </>
    );
};

export default LogIn