import axios from "axios"

export const detail= async (id, setdata)=> {
    const res= await axios({
        url: "http://localhost:4000/detail",
        method: "post",
        body: {
            id: id,
        }
    })
    const result= await res.data
    return setdata(()=> result[0]["COUNT"])
}