import axios from "axios"

export const add_flight= async (data)=> {
    const res= await axios({
        url: "http://localhost:4000/add_flight" ,
        method: "post",
        data: {
            ...data 
        }
    })
    const result= await res.data
    return console.log(result)
}