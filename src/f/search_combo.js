import axios from "axios"

export const search_combo= async (origin, destination, dt, cs, sc, location, timein, guest, room, back, setdata, setchunklist)=> {
    const res= await axios({
        url: "http://localhost:4000/v2/api/result/search/combo",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: origin,
                destination: destination,
                datestart: dt?.split(".")[0].toString(),
                datearrive: dt?.split(".")[1].toString(),
                customer: cs,
                seatclass: sc,
                location,
                timein,
                guest,
                room,
                back
            }   
        }
    })
    const result= await res.data
    setchunklist(()=> result?.slice(0, 7))
    return setdata(()=> result)
}