import axios from "axios"

export const pre_booking = async (props, setdata, id) => {
    const res = await axios({
        url: `https://do-an-be-production.up.railway.app/v4/api/prebooking/`,
        method: "post",
        data: {
            id: props,
            type: id
        },
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "Error"
    })
    const result = await res.data[0]
    setdata(() => result)
    return
}