import axios from "axios"

export const hotel_autocomplete = async (setHotelAutocomplete) => {
    const res = await axios({
        url: `http://${process.env.API_URL}/api/v1/hotel/autocomplete`,
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
    })
    const result = await res.data
    return setHotelAutocomplete(() => result)
}