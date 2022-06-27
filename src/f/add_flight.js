import axios from "axios"
import { id_admin } from "../Constant"
import { fake_sleep } from "./fake_sleep"

export const add_flight = async (data, setloading, setopensnackbar, navigate) => {
    setloading(() => true)
    await fake_sleep(3000)
    const res = await axios({
        url: `http://${process.env.API_URL}/add_flight`,
        method: "post",
        data: {
            ...data
        }
    })
    setloading(() => false)
    const result = await res.data
    setopensnackbar(() => true)
    await fake_sleep(1500)
    setopensnackbar(() => false)
    console.log(result)
    return navigate("/admin/manage/flight/new_flight", { state: { uid: id_admin } })
}