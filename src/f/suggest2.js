import axios from "axios"
import { fake_sleep } from "./fake_sleep"

export const suggest2= async (selected, setdata, setloading)=> {

    let a= ""
    switch(parseInt(selected)) {
        case 1:
            a= "Hồ Chí Minh"
            break 
        case 2: 
            a= "Đà Nẵng"
            break
        case 3: 
            a= "Hà Nội"
            break 
        case 4:
            a= "Vũng Tàu"
            break
        case 5:
            a= "Đà Lạt"
            break
        default:
            break
    }
    setloading(()=> true)
    await fake_sleep(1000)
    const res= await axios({
        url: "http://localhost:4000/suggest2",
        method: "post",
        data: {
            place: a
        },
        responseType: "json"
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(result)
}