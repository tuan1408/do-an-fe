import axios from "axios"

export const Search_flight= async (setsearchflight, setresultsearch, a,b,c,d)=> {
    const res= axios({
        url: "http://localhost:4000/api/v2/airport/codeairport",
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        params: {
            code_airport_origin: a?.split(".")[0],
            code_airport_destination: a?.split(".")[1],
        }
    })
    const ress= axios({
        url: "http://localhost:4000/api/v4/airport/fullsearch",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: a?.split(".")[0],
                destination: a?.split(".")[1],
                dt: b,
                ps: c, 
                sc: d,
            },
            from_client: "desktop"
        }
    })
    const result= await Promise.all([res, ress])
    const finalresult1= await result[0].data
    const finalresult2= await result[1].data
    // const result= await res.data
    setresultsearch(()=> finalresult2)
    return setsearchflight(()=> finalresult1)
}