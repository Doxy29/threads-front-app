import {call, put, select, takeEvery} from 'redux-saga/effects'


function* signUp() {
    const user = yield call(()=>{})
}

function* usersSaga() {
    yield takeEvery("users.signUp", signUp)
}