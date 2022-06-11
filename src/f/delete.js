import axios from "axios"
import { fake_sleep } from "./fake_sleep"

export const delete_ = async (id, type, setloading, setopensnack) => {
    setloading(() => true)
    await fake_sleep(3000)
    const res = await axios({
        url: "http://localhost:4000/delete",
        method: "post",
        data: {
            id: id,
            type: type
        }
    })
    setloading(() => false)
    const result = await res.data
    setopensnack(() => true)
    await fake_sleep(2000)
    setopensnack(() => false)
    return console.log(result)
}