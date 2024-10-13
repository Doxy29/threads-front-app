type userType = {
    userId: number,
    userAlias: string,
    userName: string,
    userSurname: string,
    email : string,
}

type authUserType = userType & {
    auth: authData
}

type authData = {
    resetToken: string,
    role: string,
    token: string,
}

type signUpFormType = {
    userName: string,
    userSurname: string,
    userAlias: string,
    email: string,
    password1: string,
    password2: string,
}

type signInFormType = {
    userAlias: string,
    email: string,
    password: string,
}

export type {
    signInFormType,
    signUpFormType,
    userType,
    authUserType,
    authData
}