import axios from "axios"

export const delete_= async (id, type)=> {
    const res= await axios({
        url: "http://localhost:4000/delete",
        method: "post",
        data: {
            id: id,
            type: type
        }
    })
    const result= await res.data
    return console.log(result)
}