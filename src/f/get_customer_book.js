import axios from "axios"

export const get_customer_book = async (id, setdata) => {
    const res = await axios({
        url: `https://do-an-be-production.up.railway.app/api/v1/get/customer/book`,
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            id: id
        }
    })
    const result = await res.data
    return setdata(() => result)
}