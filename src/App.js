import "./style/style.sass"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Flight from "./components/Container/Container"
import SearchFlight from "./components/Search/SearchFlight/SearchFlight"
import SearchHotel from "./components/Search/SearchHotel/SearchHotel"
import SearchCombo from "./components/ComboHotelFlight/SearchCombo/SearchCombo"
import LoginIndex from "./components/Login/LoginIndex"
import { memo, useState } from "react"
import SignupIndex from "./components/Signup/SignupIndex"
import { Link } from "react-router-dom"
import Booking from "./Booking/Booking"
import { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"
const PreBookingComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/PreBooking/PreBookingComponent")), 500);
  });
});
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
  const [uid, setuid]= useState(()=> "")
  return (
    <>
    <Router>
      <div style={{height: 80, width: "100%", background: "#f2f3f3"}}></div>
      <div style={{height: 60, width: "100%", background: "#fff", position: "fixed", left: 0, top: 0, zIndex: 9999, display: "flex", padding: "0 50px", justifyContent: "space-between", backgroundColor: "#fff", alignItems: "center", boxSizing: "border-box"}}>
        <Link to={"/booking"} style={{textDecoration: "none", color: "#2e89ff"}}>
          <div style={{fontSize: 20, fontWeight: 600}}>
            Home
          </div>
        </Link>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
          <LoginIndex uid={uid} setuid={setuid} />
          {
            uid?.length<=0 &&
            <SignupIndex />
          }
        </div>
      </div>
      <Routes>
        <Route path="/booking" element={<Flight />}></Route>
        <Route path="/flight/fullsearch" element={<SearchFlight />}></Route>
        <Route path="/hotel/search" element={<SearchHotel />}></Route>
        <Route path="/search/combo" element={<SearchCombo />}></Route>
        <Route path="/pre-booking/:id" element={<Suspense fallback={<Loading/>}><PreBookingComponent /></Suspense>}></Route>
        <Route path="/booking/v2/:id" element={<Booking />}></Route>
      </Routes>
    </Router>
    </>
  )
}
const Loading= memo(()=> {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: "center"}}><span style={{fontSize: 24, fontWeight: 600, color: "#242526"}}>Loading...&nbsp;&nbsp;</span><CircularProgress /></div>
  )
})

export default App