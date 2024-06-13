import axios from "axios";

const MyAxios = axios.create();

MyAxios.interceptors.request.use((configs)=>{
    console.log("MyAxios request configs", configs)
    return configs
}, (error)=>{
    console.log("MyAxios request error", error)

    return error
})

MyAxios.interceptors.response.use((response)=>{
    console.log("MyAxios response response", response)
    console.log("MyAxios response response status", response.status)
    return response
}, (error)=>{
    console.log("MyAxios response error", error)
    return error
})

export default MyAxios;