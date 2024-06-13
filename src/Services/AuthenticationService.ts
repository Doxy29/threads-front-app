import MyAxios from "src/Services/index.ts";
import {ValidateEmail} from "src/Utilities";
import {logInFormType} from "src/CommonComponents/Authentication/LogIn.tsx";
import {signUpFormType} from "src/CommonComponents/Authentication/SignUp.tsx";
import {useDispatch} from "react-redux";
import {setLoggedUserPayloadType} from "src/types/dispachPayloads.ts";
import {useHistory} from "react-router-dom";

export const login = (logInForm: logInFormType)=>{

    let userAlias, email
    if(ValidateEmail(logInForm.userOrEmail)){
        email = logInForm.userOrEmail
    }else{
        userAlias = logInForm.userOrEmail
    }
    //"zxc"
    MyAxios.post("https://localhost:44361/api/Authentication/login",{
        userAlias,
        email,
        "password": logInForm.password,
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}



export const signup = (signUpForm: signUpFormType)=>{
    const dispatch = useDispatch()

    MyAxios.post("https://localhost:44361/api/Authentication/signup",signUpForm ).then(res=>{


        console.log(res)
        const data = res.data
        const user: setLoggedUserPayloadType = {
            userId: data.userId,
            userAlias: data.userAlias,
            userName: data.userName,
            userSurname: data.userSurname,
            email : data.email,
        }

        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("key", data.auth.token)
        dispatch({
            type: "setLoggedUser",
            payload: user
        })

    }).catch(err=>{
        console.log(err)
    })
}


// const data = {
//     "userId": int,
//     "userAlias": "",
//     "userName": "",
//     "userSurname": "",
//     "email": "",
//     "hashedPass": null,
//     "auth": {
//         "token": "",
//         "resetToken": null,
//         "role": "user"
//     }
// }