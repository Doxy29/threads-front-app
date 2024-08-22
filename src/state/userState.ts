import {createSlice} from "@reduxjs/toolkit";
import {setAuthUserPayloadType} from "src/types/dispachPayloads.ts";
import {signUpFormType} from "src/CommonComponents/Authentication/SignUp.tsx";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:JSON.parse(localStorage.getItem("user") ?? "null"),
        isUserDataLoading: false,
    },
    reducers:{
        signUpCall(state, action: {type:string, payload?:signUpFormType}){
            state.isUserDataLoading = true
        },
        signInCall(state){
            state.isUserDataLoading = true
        },

        setAuthUser(state, action: setAuthUserPayloadType){
            console.log(action, "actionaction")
            state.user = action.payload
            state.isUserDataLoading = true
        },
        resetLoggedUser(state) {
            state.user = undefined;
            state.isUserDataLoading = false;
        },
    }
})

export const {
    signUpCall,
    signInCall,
    setAuthUser,
    resetLoggedUser,
} = userSlice.actions;

export default userSlice.reducer ;