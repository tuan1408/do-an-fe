import moment from 'moment'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { delete_ } from '../../f/delete'
import { detail } from '../../f/detail'

const HotelFlightDetail = (props) => {
    const location= useLocation()
    const [data, setdata]= useState(()=> 0)
    return (
      <>
          <div style={{fontSize: 16, display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: 'space-between', width: "100%"}}>
          <div style={{display: "flex", flexDirection: "column", }}>
              <span style={{}}>Có sẵn từ  : <span style={{color: "green"}}>{moment(parseInt(props.available_from)).format("DD MMM YYYY")}</span></span>
              <span style={{}}>Đến : <span style={{color: "green"}}>{moment(parseInt(props.expire_day)).format("DD MMM YYYY")}</span></span>
          </div>
          <div>
              <div onClick={()=> {
                  if(props.data_id.toString() === props.detail.toString()) {
                      props.setdetail(prev=> 0)
                  }
                  else {
                      detail(props.id_hotel, setdata)
                      props.setdetail(prev=> props.data_id)
                  }
              }} style={{fontSize: 17, fontWeight: 600, color: "#2e89ff", cursor: "pointer"}}>Chi tiết</div>
          </div>
          </div>
          <div style={{width: "100%", height: props.detail.toString() === props.data_id.toString() ? "auto" : 0, transition: "all 0.2s linear", background: "#fff", marginTop: 8, borderRadius: 10, overflow: "hidden", boxSizing: "border-box", padding: props.detail.toString() === props.data_id.toString() ? 10 : 0}}>
              <div>Thông tin khách sạn</div>
              <br />
              <div style={{fontSize: 18, fontWeight: 600}}>Số hành khách đã đặt vé khách sạn: {data}</div>
              <br />
              <div>
                  Tên khách sạn:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>{props.name_hotel}</span>
              </div>
              <br />
              <div>Hãng máy bay:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>{props.brand}</span>
              </div>
              <div>Địa điểm chi tiết:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>{props.detail_location}, {props.location}, {props.country_location}</span>
              </div>
              <div>Phân loại nơi ở:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>{props.type}</span>
              </div>
              <div>Giá vé cho người lớn:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>VND {props.cost_adult}/ng</span>
              </div>
              <div>Giá vé cho trẻ em:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>VND {props.cost_kid}/ng</span>
              </div>
              <div>Giá vé cho em bé:&nbsp;
                  <span style={{fontSize: 18, fontWeight: 600}}>VND {props.cost_baby}/ng</span>
              </div>
          </div>
          <div onClick={()=> {delete_(props.id_hotel, location.pathname.split("/")[3])
              props.setchange(prev=> !prev)
              props.setdata(props.data?.filter(item=> item.id_flight.toString() !== props.x_id.toString()))
          }} style={{width: "100%", fontSize: 17, fontWeight: 600, color: "#ff0000", cursor: "pointer"}}>
              Xóa
          </div>
      </>
    )
}

export default HotelFlightDetail