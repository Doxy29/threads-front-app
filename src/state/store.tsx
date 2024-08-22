import createSagaMiddleware  from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userState.ts"
import usersSaga from "src/saga/usersSaga.ts";


const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saga)
});

saga.run(usersSaga);

export default store