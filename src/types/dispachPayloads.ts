
export type setAuthUserPayloadType = {
    type: string
    payload: {
        userId: number,
        userAlias: string,
        userName: string,
        userSurname: string,
        email : string,
    }
}