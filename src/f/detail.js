import axios from "axios"

export const detail = async (id, setdata) => {
    console.log(id)
    const res = await axios({
        url: "http://process.env.URL/detail",
        method: "post",
        data: {
            id: id,
        }
    })
    const result = await res.data
    return setdata(() => result[0]["COUNT"])
}