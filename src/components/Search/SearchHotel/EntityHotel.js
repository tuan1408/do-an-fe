import axios from 'axios'
import React, { useMemo } from 'react'
import { useState } from 'react'
import { memo } from 'react'

const EntityHotel = (props) => {
  const entities= useMemo(()=> ["Wifi", "Hồ bơi", "Chỗ đậu xe", "Nhà hàng", "Lễ tân 24h", "Thang máy", "Trung tâm thể dục", "Phòng họp", "Đưa đón sân bay"], [])
  const [filter, setfilter]= useState(()=> ({
    wifi: 0,
    pool: 0,
    parking: 0,
    restaurant: 0,
    receptionist: 0,
    elevator: 0,
    fitness_center: 0,
    meeting: 0,
    airport_shuttle: 0
  }))
  
  return (
    <>
    <div style={{marginBottom: 8}}>Tiện nghi</div>    
      <div className='gkorkawrklsgr'>
        {
          entities?.map((item, key)=> <C key={key} index={key} entities={props.entities} setentities={props.setentities} item={item} />)
        }
      </div>
    </>
  )
}

const C= (props)=> {
  
  const handle= (e)=> {
    console.log(e.target.getAttribute("index"))
    
  }
  const filterbyserver= async (filter)=> {
    const res= await axios({
      url: "http://localhost:4000/v2/api/entities/hotel",
      method: "post",
      responseType: "json",
      timeout: 100000,
      timeoutErrorMessage: "timeout request",
      data: {
        query_array: filter
      }
    })
    const result= await res.data
    console.log(result)
  }
  return (
    <div className='djfiejwaejwew'>
      <input type="checkbox" name='r' index={props.index} value={props.item} onChange={(e)=> handle(e)} />
      <div className='opdrkoprkwopewe'>{props.item}</div>
    </div>
  )
}

export default memo(EntityHotel)