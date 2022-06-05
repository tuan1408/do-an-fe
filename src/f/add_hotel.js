import axios from "axios"
import moment from "moment"

export const add_hotel= async (data)=> {
    const res= await axios({
        url: "http://localhost:4000/add_hotel" ,
        method: "post",
        data: {
            ...data, available_from: parseInt(moment(data.available_from, 'DD-MM-YYYY').valueOf()), expire_day: parseInt(moment(data.expire_day, "DD-MM-YYYY").valueOf())
        }
    })
    const result= await res.data
    return console.log(result)
}