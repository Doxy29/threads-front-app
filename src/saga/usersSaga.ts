import {call, put, takeLatest} from 'redux-saga/effects'
import axios from "axios";
import {setAuthUser} from "src/state/userState.ts";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

function* signUp(payload) {
    const response:ResponseGenerator = yield call(() => axios.get("https://localhost:5139/api/Authentication/signup", payload ))
    console.log(response, "getCarsSaga")
    yield put(setAuthUser(response.data));
}

function* usersSaga() {
    yield takeLatest("loggedUser/signUpCall", signUp)
    yield takeLatest("loggedUser/signInCall", signUp)
}

export default usersSaga;

