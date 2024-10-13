import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {signUpFormType, userType, signInFormType} from "src/types";

export type userSliceType = {
    user?: userType,
    loading: boolean
}

const getLocalStorageUser = ()=>{
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) as userType : undefined
}

const initialState:userSliceType = {
    user:getLocalStorageUser(),
    loading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signUpCall(state, action: PayloadAction<signUpFormType>){
            state.loading = !!action
        },
        signInCall(state, action: PayloadAction<signInFormType>){
            state.loading = !!action
        },

        setAuthUser(state, action: PayloadAction<{jwtToken:string, user:userType }> ){
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            localStorage.setItem("jwtToken", `bearen ${action.payload.jwtToken}`)

            state.user = action.payload.user
            state.loading = false
        },
        resetLoggedUser(state) {
            state.user = undefined;
            state.loading = false;
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