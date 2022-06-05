import moment from 'moment'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { delete_ } from '../../f/delete'
import { detail } from '../../f/detail'

const TimeFlightDetail = (props) => {
  const location= useLocation()
  const [data, setdata]= useState(()=> 0)
  return (
    <>
        <div style={{fontSize: 16, display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: 'space-between', width: "100%"}}>
        <div style={{display: "flex", flexDirection: "column", }}>
            <span style={{}}>Ngày bắt đầu : <span style={{color: "green"}}>{moment(parseInt(props.c_timeflight)).format("DD MMM YYYY")}</span></span>
            <span style={{}}>Ngày kết thúc : <span style={{color: "green"}}>{moment(parseInt(props.c_timedestination)).format("DD MMM YYYY")}</span></span>
        </div>
        <div>
            <div onClick={()=> {
                if(props.data_id.toString() === props.detail.toString()) {
                    props.setdetail(prev=> 0)
                }
                else {
                    detail(props.id_flight, setdata)
                    props.setdetail(prev=> props.data_id)
                }
            }} style={{fontSize: 17, fontWeight: 600, color: "#2e89ff", cursor: "pointer"}}>Chi tiết</div>
        </div>
        </div>
        <div style={{width: "100%", height: props.detail.toString() === props.data_id.toString() ? "auto" : 0, transition: "all 0.2s linear", background: "#fff", marginTop: 8, borderRadius: 10, overflow: "hidden", boxSizing: "border-box", padding: props.detail.toString() === props.data_id.toString() ? 10 : 0}}>
            <div>Thông tin chuyến bay</div>
            <br />
            <div style={{fontSize: 18, fontWeight: 600}}>Số hành khách đã đặt vé: {data}</div>
            <br />
            <div style={{fontSize: 18, fontWeight: 600}}>Thời gian bay: 
                {moment.utc(moment(`${props.timearrive} ${props.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${props.timestart} ${props.dayflight}`, "hh:mm DD-MM-YYYY"))).format("h[h]mm[ph]")}
            </div>
            <br />
            <div>Thời gian khởi hành:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{moment(props.timestart, "hh:mm").format("hh[h]mm[ph]")}&nbsp;{props.dayflight}</span>
            </div>
            <br />
            <div>Thời gian đến nơi:&nbsp; 
            <span style={{fontSize: 18, fontWeight: 600}}>{moment(props.timearrive, "hh:mm").format("hh[h]mm[ph]")}&nbsp;{props.daydestination}</span>
            </div>
            <br />
            <div>
                Số hiệu máy bay:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{props.aircraft_number}</span>
            </div>
            <br />
            <div>Hãng máy bay:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{props.brand}</span>
            </div>
        </div>
        <div onClick={()=> {delete_(props.id_flight, location.pathname.split("/")[3])
            props.setchange(prev=> !prev)
            props.setdata(props.data?.filter(item=> item.id_flight.toString() !== props.x_id.toString()))
        }} style={{width: "100%", fontSize: 17, fontWeight: 600, color: "#ff0000", cursor: "pointer"}}>
            Xóa
        </div>
    </>
  )
}

export default TimeFlightDetail