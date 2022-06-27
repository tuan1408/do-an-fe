import axios from "axios"

export const flight_autocomplete = async (setHotelAutocomplete) => {
    const res = await axios({
        url: `http://${process.env.API_URL}/api/v1/airport/autocomplete`,
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
    })
    const result = await res.data
    return setHotelAutocomplete(() => result)
}