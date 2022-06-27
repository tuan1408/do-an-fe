import axios from "axios"

export const airport_complete = async (setAirportAutocomplete) => {
    const res = await axios({
        url: `https://do-an-be-production.up.railway.app/api/v1/airport/autocomplete`,
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
    })
    const result = await res.data
    return setAirportAutocomplete(() => result)
}