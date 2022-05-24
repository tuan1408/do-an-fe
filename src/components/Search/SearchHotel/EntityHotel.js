import React, { useMemo } from 'react'
import { memo } from 'react'

const EntityHotel = () => {
  const entities= useMemo(()=> ["Wifi", "Hồ bơi", "Chỗ đậu xe", "Nhà hàng", "Lễ tân 24h", "Thang máy", "Trung tâm thể dục", "Phòng họp", "Đưa đón sân bay"], [])

  return (
    <>
    <div style={{marginBottom: 8}}>Tiện nghi</div>    
        <div className='gkorkawrklsgr'>
            {
                entities?.map((item, key)=> <div key={key} className='djfiejwaejwew'>
                <input type="checkbox" name='r' />
                <div className='opdrkoprkwopewe'>{item}</div>
            </div>)
            }
            
        </div>
    </>
  )
}

export default memo(EntityHotel)