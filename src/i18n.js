import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources= {
    eng: {
        translation: {
            "Chuyến bay":"Flight",
            "Khách sạn": "Hotel",
            "Chuyến bay + khách sạn": "Combo"
        }
    },
    vie: {
        translation: {
            "Chuyến bay": "Chuyến bay",
            "Khách sạn": "Khách sạn",
            "Chuyến bay + khách sạn": "Chuyến bay + khách sạn"
        }
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "vi",
    interpolation: {
        escapeValue: false
    }
})
export default i18n