import axios from "axios";
import {resetLoggedUser} from "src/state/userState.ts";
import store from "src/state/store.tsx";
const MyAxios = axios.create();
export const coreEndPoint = "https://localhost:44361/api/"

MyAxios.interceptors.request.use((configs)=>{
    console.log("MyAxios request configs", configs)
    const jwtToken = localStorage.getItem("jwtToken")
    if(jwtToken){
        configs.headers.Authorization = jwtToken;
    }else{
        store.dispatch(resetLoggedUser())
    }
    return configs
}, (error)=>{
    console.log("MyAxios request error", error)
    return error
})

MyAxios.interceptors.response.use((response)=>{
    console.log("MyAxios response response", response)
    return response
}, (error)=>{
    console.log("MyAxios response error", error)
    if( error.response.status === 401){
        store.dispatch(resetLoggedUser())
        return error
    }else if(error.response.status !== 200){
        alert("Something went wrong, please try again.")
    }
    return error
})

export default MyAxios;