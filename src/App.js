import "./style/style.sass"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Flight from "./components/Flight/Flight"
import SearchFlight from "./components/Search/SearchFlight/SearchFlight"
import SearchHotel from "./components/Search/SearchHotel/SearchHotel"

export const days= ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"]
export const months= ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5","Thg 6","Thg 7", "Thg 8", "Thg 9","Thg 10","Thg 11","Thg 12"]
export const locale= {
  localize: {
    day: n=> days[n],
    month: n=> months[n]
  },
  formatLong: {
    date: () => "mm/dd/yyyy"
  }
}
const App=(props)=> {
  return (
    <Router>
      <Routes>
        <Route path="/booking" element={<Flight />}></Route>
        <Route path="/flight/fullsearch" element={<SearchFlight />}></Route>
        <Route path="/hotel/search" element={<SearchHotel />}></Route>
      </Routes>
    </Router>
  )
}

export default App