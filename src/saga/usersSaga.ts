import {call, put, takeLatest} from 'redux-saga/effects'
import {resetLoggedUser, setAuthUser, signUpCall, signInCall} from "src/state/userState.ts";
import {userType, signInFormType} from "src/types";
import {PayloadAction} from "@reduxjs/toolkit";
import MyAxios, {coreEndPoint} from "src/Services";
import {authUserType} from "src/types/AuthenticationTypes.ts";

export type responseGeneratorType<T> = {
    config:never,
    data:T,
    headers:never,
    request:never,
    status:number,
    statusText?:string
}

function* signUp(action: PayloadAction<userType>) {
    try{
        const response:responseGeneratorType<authUserType> = yield call(() => MyAxios.post(`${coreEndPoint}Authentication/signup`, action.payload ))
        console.log(response, "getCarsSaga")

        const {auth, userAlias, userName, userId, userSurname, email} = response.data
        yield put(setAuthUser({
            jwtToken: auth.token,
            user:{
                userAlias,
                userName,
                userId,
                userSurname,
                email
            }
        }));
    }
    catch (e) {
        yield put(resetLoggedUser());
    }
}

function* signIn(action: PayloadAction<signInFormType>) {
    const response:responseGeneratorType<authUserType> = yield call(() => MyAxios.post(`${coreEndPoint}Authentication/signIn`, action.payload ))
    console.log(response, "getCarsSaga")

    if(response.status === 200){
        const {auth, userAlias, userName, userId, userSurname, email} = response.data
        yield put(setAuthUser({
            jwtToken: auth.token,
            user:{
                userAlias,
                userName,
                userId,
                userSurname,
                email
            }
        }));
    }else{
        yield put(resetLoggedUser());
    }

}

function* usersSaga() {
    yield takeLatest(signUpCall.type, signUp)
    yield takeLatest(signInCall.type, signIn)
}

export default usersSaga;

