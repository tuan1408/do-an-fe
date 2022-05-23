import React from 'react'
import { useState } from 'react'
import Hotel from '../Hotel/Hotel'
import C1 from './C1'
import C2 from './C2'
// import moment from 'moment'

const Flight = (props) => {
  const [bookplane, setbookplane]= useState(()=> true)
  return (
    <>
      {/* <button onClick={()=> console.log(moment("00:30 24-05-2022", "hh:mm DD-MM-YYYY").valueOf())}>Click</button> */}
      <div style={{position: "absolute", top: 0, left: 0, backgroundImage: "url(https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png)", width: "100%", height: 400, backgroundRepeat: "no-repeat", zIndex: -10, backgroundSize: "contain"}}>

      </div>
      <div className="gl-2">
          <C1 setbookplane={setbookplane} />
          {
            bookplane=== true ?
            <C2 /> : <Hotel />
          }
      </div>
    </>
  )
}

export default Flight