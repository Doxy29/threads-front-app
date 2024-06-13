import createSagaMiddleware  from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userState.ts"


const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        loggedUser: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saga)
});

export default store