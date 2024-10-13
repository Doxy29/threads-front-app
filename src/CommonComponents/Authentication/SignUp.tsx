import React, {FC, useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import {signUpCall} from "src/state/userState.ts";
import {useDispatch} from "react-redux";
import {signUpFormType} from "src/types";
import MyAxios from "src/Services";

type Props = {

};

const SignUp: FC<Props> = () => {

    const dispatch = useDispatch();

    const [signUpForm, setSignUpForm] = useState<signUpFormType>({
        userName: "",
        userSurname: "",
        userAlias: "",
        email: "",
        password1: "",
        password2: "",

    })

    const onFormChange = ({currentTarget}:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setSignUpForm({
            ...signUpForm,
            [currentTarget.id]: currentTarget.value,
        })
    }

    const test= ()=>{
        MyAxios.get("https://localhost:44361/api/Authentication/auth").then(res=>{
                console.log(res, "auth res")
            }).catch(err=> {
                console.log(err, "auth err")
        })
    }


    return (
        <>
            <Box component={"form"}>
                <Stack gap={3}>
                    <Stack direction="row" gap={3}>
                        <TextField sx={{borderRadius:"50%"}} fullWidth required id="userName" label="Name" variant={"outlined"} value={signUpForm.userName} onChange={onFormChange}/>
                        <TextField fullWidth required id="userSurname" label="Surname" variant={"outlined"} value={signUpForm.userSurname} onChange={onFormChange}/>
                    </Stack>
                    <TextField required id="userAlias" label="User Name" variant={"outlined"} value={signUpForm.userAlias} onChange={onFormChange}/>

                    <TextField required id="email" label="Email" variant={"outlined"} value={signUpForm.email} onChange={onFormChange}/>
                    <TextField required id="password1" label="Password" variant={"outlined"} value={signUpForm.password1} onChange={onFormChange}/>
                    <TextField required id="password2" label="Repeat Password" variant={"outlined"} value={signUpForm.password2} onChange={onFormChange}/>
                </Stack>
            </Box>
            <Button variant="contained" onClick={()=>dispatch(signUpCall(signUpForm))}>Sign up!</Button>
            <Button variant="contained" onClick={()=>test()}>Test</Button>
        </>
    );
};

export default SignUp