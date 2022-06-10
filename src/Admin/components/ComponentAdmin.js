import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ResultFlightDetail from '../../components/Search/SearchFlight/ResultFIightSearch/ResultFlightSearch'
import { admin } from '../../f/admin'
import moment from "moment"
import { CircularProgress } from '@mui/material'
import ResultSearchHotel from '../../components/ResultSearchHotel/ResultSearchHotel'
import HotelFlightDetail from './HotelFlightDetail'
import TimeFlightDetail from './TimeFlightDetail'

const ComponentAdmin= (props)=> {
    const location= useLocation()
    const [data, setdata]= useState(()=> [])
    const [loading, setloading]= useState(()=> false)
    const [detail, setdetail]= useState(()=> 0)
    useEffect(()=> {
      admin(setdata, location.pathname.split("/")[3], location.pathname.split("/")[4], setloading)
    }, [location.pathname])
    return (
      <div className="gegfdsesgfdes" style={{flex: "1 1 0", height: "100%", overflowY: "auto", padding: 10, boxSizing: 'border-box', }}>
        {
          loading=== true ? <div style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: "center", height: 50}}><span style={{fontSize: 20, fontWeight: 600, color: "#3a3b3c"}}>Loading</span>&nbsp;&nbsp;<CircularProgress /></div> :
          <>
            {
              location.pathname.split("/")[3]=== "flight" && data?.length>0 && data?.map((item, key)=> <div key={key} style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: "center", padding: "10px 0", flexDirection: "column"}}>
                <ResultFlightDetail {...item} xxxx={true} />
                <>
                  {
                    location?.pathname.split("/")[4] &&
                    <div style={{width: "98%", maxWidth: 1024, display: "flex", flexDirection: "column", height: "auto", alignItems: 'center'}}>
                    {
                      location?.pathname.split("/")[4]=== "expired_flight" && <span style={{fontSize: 16, }}>Quá hạn từ : <span style={{color: "red"}}>{moment(parseInt(item.c_timeflight)).format("DD MMM YYYY")}</span></span>
                    }
                    {
                      location?.pathname.split("/")[4]=== "completed_flight" && 
                      <div style={{fontSize: 16, display: "flex", flexDirection: "column", alignItems: "end"}}>
                        <span>Hoàn thành vào : <span style={{color: "green"}}>{moment(parseInt(item.c_timedestination)).format("DD MMM YYYY")}</span></span>
                        <span>Số hành khách thực hiện chuyến bay: <span style={{color: "green"}}>{item.capacity_customer}</span></span>
                      </div>
                    }
                    {
                      location?.pathname.split("/")[4]=== "all_flight" && 
                      <TimeFlightDetail setchange={props.setchange} data_id={parseInt(key) + 1} {...item} setdetail={setdetail} detail={detail} setdata={setdata} x_id={item.id_flight} data={data} />
                    }
                    {
                      location?.pathname.split("/")[4]=== "prepare_flight" && 
                      <div style={{fontSize: 16, display: "flex", flexDirection: "column", alignItems: "end"}}>
                        <span style={{}}>Chuẩn bị khởi hành vào lúc : <span style={{color: "green"}}>{moment(parseInt(item.c_timeflight)).format("HH:mm DD MMM YYYY")}</span></span>
                      </div>
                    }    
                    {
                      location?.pathname.split("/")[4]=== "new_flight" && 
                      <div style={{fontSize: 16, display: "flex", flexDirection: "column", alignItems: "end"}}>
                        <span style={{}}>Đã được thêm vào lúc : <span style={{color: "green"}}>{moment(parseInt(item.timedetail)).format("HH:mm DD MMM YYYY")}</span></span>
                      </div>
                    }                  
                    </div>
                  }
                </>
                <br />
              </div>)
            }


















            {
              location.pathname.split("/")[3]=== "hotel" && data?.length>0 && data?.map((item, key)=> <div key={key} style={{width: "100%", display: "flex", justifyContent: 'center', padding: "10px", flexDirection: "column"}}>
              <ResultSearchHotel {...item} xxxx={true} />
              <>
                {
                  location?.pathname.split("/")[4] &&
                  <div style={{width: "100%", maxWidth: 1024, display: "flex", flexDirection: "column", height: "auto", alignItems: 'center'}}>
                  {
                    location?.pathname.split("/")[4]=== "expired_hotel" && <span style={{fontSize: 16, }}>Quá hạn từ : <span style={{color: "red"}}>{moment(parseInt(item.expire_day)).format("DD MMM YYYY")}</span></span>
                  }
                  {
                    location?.pathname.split("/")[4]=== "all_hotel" && 
                    <HotelFlightDetail setchange={props.setchange} data_id={parseInt(key) + 1} {...item} setdetail={setdetail} detail={detail} setdata={setdata} x_id={item.id_hotel} data={data}  />
                  }
                  {
                    location?.pathname.split("/")[4]=== "available_hotel" && 
                    <div style={{fontSize: 16, display: "flex", flexDirection: "column", alignItems: "end", width: "100%"}}>
                      <span style={{width: "100%"}}>Có sẵn từ : <span style={{color: "green"}}>{moment(parseInt(item.available_from)).format("HH:mm DD MMM YYYY")}</span></span>
                    </div>
                  }
                  {
                    location?.pathname.split("/")[4]=== "new_hotel" && 
                    <div style={{fontSize: 16, display: "flex", flexDirection: "column", alignItems: "end", width: "100%"}}>
                      <span style={{width: "100%"}}>Đã được thêm vào : <span style={{color: "green"}}>{moment(parseInt(item.timedetail)).format("HH:mm DD MMM YYYY")}</span></span>
                    </div>
                  }                  
                  </div>
                }
              </>
              <br />
            </div>)
            }
          </>
        }
        {
          loading=== false && data?.length<=0 && <div style={{textAlign: "center"}}>Không tìm thấy kết quả nào phù hợp</div>
        }
      </div>
    )
  }

export default ComponentAdmin