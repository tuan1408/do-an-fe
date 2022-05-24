import axios from "axios"

export const result_hotel= async (list,a ,b,c, d)=> {
    const res= await axios({
        url: "http://localhost:4000/v2/api/result/hotel",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: a.split(".")[0].toString(),
                destination: a.split(".")[1].toString(),
                l: b, 
                c: c,
                d: d
            }   
        }
    })
    const result= await res.data
    return list(()=> result)
}