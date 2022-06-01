import axios from "axios"

export const signup= async (data)=> {
    const res= await axios({
        url: "http://localhost:4000/signup",
        method: "post",
        timeout: 100000,
        timeoutErrorMessage: "Time out request",
        responseType: "json",
        data: {
            ...data
        }
    })
    const result= await res.data
    console.log(result)
}