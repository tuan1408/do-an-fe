import axios from "axios"
import _ from "lodash"
export const bookticket= async (data1, data2, id)=> {
    const res= await axios({
        url: "http://localhost:4000/booking/ticket",
        method: "post",
        responseType: "json",
        data: {
            id_type: id,
            name: data1.name,
            surname: data1.surname,
            phonenumber: data1.phonenumber,
            email: data1.email,
            type_user: "agent",
        }
    })
    const result= await res.data
    console.log(result)
    const newdata2= _.unionWith(data2, _.isEqual)
    newdata2?.map(async item=> {
        return axios({
            url: "http://localhost:4000/booking/ticket",
            method: "post",
            responseType: "json",
            data: {
                id_type: id,
                name: item.name,
                surname: item.surname,
                phonenumber: item.phonenumber,
                email: item.email,
                type_user: "customer",
                date_birth: item.date_birth,
                month_birth: item.month_birth,
                year_birth: item.year_birth,
                nationality: item.nationality
            }
        })
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))
    })
}