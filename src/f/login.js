import axios from "axios"
import Cookie from "js-cookie"

export const login = async (data, wrong) => {
    const res = await axios({
        url: "http://process.env.API_URL/login",
        method: "post",
        timeout: 100000,
        timeoutErrorMessage: "Time out request",
        responseType: "json",
        data: {
            ...data
        }
    })

    const result = await res.data
    if (result?.length > 0) {
        Cookie.set("id", result[0]?.secret_key)
        wrong(() => false)
        return window.location.reload()
    }
    else {
        return wrong(() => true)
    }
}