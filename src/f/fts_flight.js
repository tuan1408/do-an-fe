import axios from "axios"

export const fts_flight = async (setqueryresult, query) => {
    const res = await axios({
        url: `https://do-an-be-production.up.railway.app/api/v1/flight/search`,
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            query_string: query
        }
    })
    const result = await res.data
    return setqueryresult(() => result)
}