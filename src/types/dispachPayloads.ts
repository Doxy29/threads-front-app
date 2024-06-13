
export type setLoggedUserPayloadType = {
    type: string
    payload: {
        userId: number,
        userAlias: string,
        userName: string,
        userSurname: string,
        email : string,
    }
}