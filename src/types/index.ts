export type storeStateType = {
    appTitle: string,
    user: userType
}

export type userType = {
    userId: number,
    userAlias: string,
    userName: string,
    userSurname: string,
    email : string,
} | {}

