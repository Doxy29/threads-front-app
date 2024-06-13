import {createSlice} from "@reduxjs/toolkit";
import {setLoggedUserPayloadType} from "src/types/dispachPayloads.ts";

export const userSlice = createSlice({
    name: "userState",
    initialState: {
        loggedUser:JSON.parse(localStorage.getItem("user") ?? "undefined")
    },
    reducers:{
        setLoggedUser(state, action: setLoggedUserPayloadType) {
            state.loggedUser = action.payload
        },
        resetLoggedUser(state) {
            state.loggedUser = undefined;
        }
    }
})

export const {
    setLoggedUser,
    resetLoggedUser
} = userSlice.actions;

export default userSlice.reducer ;