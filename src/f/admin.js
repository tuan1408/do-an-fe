import axios from "axios"
import { fake_sleep } from "./fake_sleep"

export const admin = async (setdata, s1, s2, setloading) => {
    setloading(() => true)
    await fake_sleep(1000)
    const res = await axios({
        url: "http://process.env.URL/admin",
        method: "post",
        responseType: "json",
        data: {
            s1: s1,
            s2: s2
        }
    })
    setloading(() => false)
    const result = await res.data
    return setdata(result)
}