import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import useQuery from '../../f/get_query_parameter'
import { Search_flight } from '../../f/search_flight'
import _ from "lodash"
import RadioButtonsGroup from './ListSort'
import Tooltip from '@mui/material/Tooltip'
import FilterRangeCost from '../Filter/FilterRangeCost'

const SearchFlight = () => {
  const query= useQuery()
  const [searchflight, setsearchflight]= useState(()=> [])
  const [resultsearch, setresultsearch]= useState(()=> [])
  const [findbybrand, setfindbybrand]= useState(()=> [])
  const [findtimeorigin, settimeorigin]= useState(()=> undefined)
  const [findtimedestination, settimedestination]= useState(()=> undefined)
  const [findbyentities, setfindbyentities]= useState(()=> [])
  const [findbyrangecost, setfindbyrangecost]= useState(()=> [])
  useEffect(()=> {
    Search_flight(setsearchflight, setresultsearch, query.get("ap"), query.get("dt"), query.get("ps"), query.get("sc"))
  }, [query])
  return (
    <div className="aoe-1">
      <div className="aso-1">
        <div className="dkw-1">
          <div className="oew-2">
            {searchflight[0]?.location_airport && searchflight[0]?.location_airport} ({query.get("ap").split(".")[0]}) → {searchflight[1]?.location_airport && searchflight[1]?.location_airport} ({query.get("ap").split(".")[1]})
          </div>
          <div className="ewo-4">
            {moment(`${query.get("dt").toString()}`, "DD-MM-YYYY").format("ddd, DD MMM YYYY")} | {query.get("ps").split(".").reduce((part, a)=> parseInt(part) + parseInt(a), 0)} passengers | {query.get("sc")}
          </div>
        </div>
        <div className="iew-1">
          <div className="dsd-1" role={"button"}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_search_24px-dee9abb8908124af6564d818120f1c08.svg" height="16" width="16" alt="open" />
            <div className="adw-2">
              Đổi tìm kiếm
            </div>
          </div>
        </div>
      </div>
      <FilterTool findbyrangecost={findbyrangecost} setfindbyrangecost={setfindbyrangecost} resultsearch={resultsearch} setresultsearch={setresultsearch} settimeorigin={settimeorigin} settimedestination={settimedestination} setfindbybrand={setfindbybrand} findbybrand={findbybrand} />
      {
        findbybrand.length<=0 && findbyrangecost?.length<=0 && resultsearch&& resultsearch?.map((item, key)=> <FlightDetail {...item} key={key} />)
      }
      {
        findbybrand.length>0 && resultsearch?.filter((item)=> findbybrand.includes(item.brand)=== true).map((item, key)=> <FlightDetail {...item} key={key} />)
      }
      {
        findtimeorigin?.length>0 && resultsearch?.filter(item=> (moment(item.timestart.toString(), "hh:mm") > moment(`${findtimeorigin.split("-")[0].toString().trim()}`, "hh:mm") || moment(item.timestart.toString(), "hh:mm") < moment(`${findtimeorigin.split("-")[1].toString().trim()}`, "hh:mm"))).map((item, key)=> <FlightDetail {...item} key={key} />)
      }
      {
        findbyentities?.length>0 && resultsearch?.filter(item=> findbyentities.includes(item.packet))
      }
      {
        findbyrangecost?.length>0 && resultsearch?.filter(item=> parseInt(item.cost_adult) >=  parseInt(findbyrangecost[0]) && parseInt(item.cost_adult) <= parseInt(findbyrangecost[1])).map((item, key)=> <FlightDetail {...item} key={key} />)
      }
    </div>
  )
}
const FilterTool= (props)=> {
  
  return (
    <div className="kew-1">
      <div className="wqo-1">
        <div className="sai-1">
          Bộ lọc: 
        </div>
        <div className="wai-1">
          <div className="sqo-1">
            <div className="qra-1">
              Điểm dừng
            </div>
            <div className="dko-1">

            </div>
          </div>
          <F2 settimedestination={props.settimedestination} settimeorigin={props.settimeorigin} resultsearch={props.resultsearch} setfindbytimeflight={props.setfindbytimeflight} findbytimeflsetfindbytimeflight={props.findbytimeflsetfindbytimeflight} />
          <F3 resultsearch={props.resultsearch} setfindbybrand={props.setfindbybrand} findbybrand={props.findbybrand} />
          <F4 findbyrangecost={props.findbyrangecost} setfindbyrangecost={props.setfindbyrangecost} setresultsearch={props.setresultsearch} settimedestination={props.settimedestination} settimeorigin={props.settimeorigin} resultsearch={props.resultsearch} setfindbytimeflight={props.setfindbytimeflight} findbytimeflsetfindbytimeflight={props.findbytimeflsetfindbytimeflight}  />
        </div>
      </div>
      <F5 resultsearch={props.resultsearch} setresultsearch={props.setresultsearch} />
    </div>
  )
}
const F5= (props)=> {
  const [opensuggest, setopensuggest]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setopensuggest(()=> false)
      }
  }
  
  useEffect(()=> {
      document.addEventListener("mousedown", outsidefunction)
      return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, [])  
  return (
    <div className="dpq-3 gaerara-1" ref={myRef}>
      <div className="vbe-1" onClick={()=> setopensuggest(()=> true)}>
        <div className="soe-1">
          Sắp xếp
        </div>
        <div className="sew-1">
        <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_checkmark_16px-e8c592e0f6219f8d6609753bf0b1198d.svg" width="12" height="12" alt="open"></img>
        </div>
      </div>
      {
        opensuggest=== true &&
        <div className="dsqeo-1 fdgwergr-1" style={{flexDirection: "column !important"}}>
          <div className="ddoeqw-1">
            <div className="teai-1"> 
              Sắp xếp
            </div>
          </div>
          <RadioButtonsGroup resultsearch={props.resultsearch} setresultsearch={props.setresultsearch} />
        </div>
      }
    </div>
  )
}
const F2= (props)=> {
  const [opensuggest, setopensuggest]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setopensuggest(()=> false)
      }
  }
  
  useEffect(()=> {
      document.addEventListener("mousedown", outsidefunction)
      return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, [])  
  return (
    <div className="sqo-1 oifairo-q2" ref={myRef}>
      <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
        Thời gian bay
      </div>
      <div className="dko-1">

      </div>
      {
        opensuggest=== true &&
        <div className="dsqeo-1">
          <div className="ddoeqw-1">
            <div className="teai-1"> 
              Giờ cất cánh
            </div>
            <div className="sjwroe-1">
              <div >
                <M1 settimeorigin={props.settimeorigin} b={"Buổi sáng sớm"} t={"00:00 - 06:00"} />
                <M1 settimeorigin={props.settimeorigin} b={"Buổi sáng"} t={"06:00 - 12:00"} />
              </div>
              <div>
                <M1 settimeorigin={props.settimeorigin} b={"Buổi chiều"} t={"12:00 - 18:00"} />
                <M1 settimeorigin={props.settimeorigin} b={"Buổi tối"} t={"18:00 - 24:00"} />
              </div>
            </div>
          </div>

          <div style={{marginTop: 16, marginBottom: 16, borderBottom: "1px solid #d9dbcd"}}></div>

          <div className="ddoeqw-1">
            <div className="teai-1"> 
              Giờ hạ cánh
            </div>
            <div className="sjwroe-1">
              <div >
                <M2 settimedestination={props.settimedestination} b={"Buổi sáng sớm"} t={"00:00 - 06:00"} />
                <M2 settimedestination={props.settimedestination} b={"Buổi sáng"} t={"06:00 - 12:00"} />
              </div>
              <div>
                <M2 settimedestination={props.settimedestination} b={"Buổi chiều"} t={"12:00 - 18:00"} />
                <M2 settimedestination={props.settimedestination} b={"Buổi tối"} t={"18:00 - 24:00"} />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
const M1= (props)=> {
  const [check, setcheck]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setcheck(()=> false)
      }
  }
  useEffect(()=> {
    document.addEventListener("mousedown", outsidefunction)
    return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, []) 
  return (
  <div ref={myRef} onClick={()=> {
    setcheck(prev=> !prev)
    if(props.settimedestination) {
      props.settimedestination(()=> props.t)
    }
    if(props.settimeorigin) {
      props.settimeorigin(()=> props.t)
    }
  }}  style={{background: check=== false ? "#f7f9fa" : "#0194f3", color: check=== false ? "#0194f3" : "#fff"}}>
    <div style={{color: check=== false ? "#687176" : "#fff"}}>
      {props.b}
    </div>
    <div style={{color: check=== false ? "#0194f3" : "#fff"}}>
      {props.t}
    </div>
  </div>
  )
}
const M2= (props)=> {
  const [check, setcheck]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setcheck(()=> false)
      }
  }
  useEffect(()=> {
    document.addEventListener("mousedown", outsidefunction)
    return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, []) 
  return (
  <div ref={myRef} onClick={()=> {
    setcheck(prev=> !prev)
    if(props.settimedestination) {
      props.settimedestination(()=> props.t)
    }
    if(props.settimeorigin) {
      props.settimeorigin(()=> props.t)
    }
  }}  style={{background: check=== false ? "#f7f9fa" : "#0194f3", color: check=== false ? "#0194f3" : "#fff"}}>
    <div style={{color: check=== false ? "#687176" : "#fff"}}>
      {props.b}
    </div>
    <div style={{color: check=== false ? "#0194f3" : "#fff"}}>
      {props.t}
    </div>
  </div>
  )
}
const F3= (props)=> {
  const [opensuggest, setopensuggest]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setopensuggest(()=> false)
      }
  }
  useEffect(()=> {
      document.addEventListener("mousedown", outsidefunction)
      return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, [])  
  return (
    <div className="sqo-1 dsuew-1" ref={myRef}>
      <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
        Hãng hàng không
      </div>
      <div className="dko-1">

      </div>
      {
        opensuggest=== true &&
        <div className="dsqeo-1">
          <div className="ddoeqw-1">
            <div className="teai-1"> 
              Hãng hàng không
            </div>
            <div className="skfrtw-4">
              <div className="dsdewrowq-1">Chọn tất cả</div>
              <div className="fr0wowe-3">Từ</div>
            </div>
          </div>
          {
            _(props.resultsearch)
            .groupBy("brand")
            .map(group=> _.minBy(group, "cost_adult"))
            .value()
            .map((item, key)=> <div key={key} className="dkwoewew-1">
            <div className="wejwekwje-1">
              <B setopensuggest={setopensuggest} brand={item.brand} setfindbybrand={props.setfindbybrand} findbybrand={props.findbybrand} />
              <div className="dokwee-1">
                <img src={item.logo_brand} alt="" style={{width: 16, height: 16, objectFit: "contain", objectPosition: "50% 50%"}} />
                <div className="skeeqwqwp-1">{item.brand}</div>
              </div>
              <div className="drwor-ew3kq">
                  VND {item.cost_adult}
              </div>
            </div>
          </div>)
          }
        </div>
      }
    </div>
  )
}
const F4= (props)=> {
  const [opensuggest, setopensuggest]= useState(()=> false)
  const myRef= useRef()
  const outsidefunction= (e)=> {
      if(myRef.current && !myRef.current.contains(e.target)) {
          setopensuggest(()=> false)
      }
  }
  useEffect(()=> {
      document.addEventListener("mousedown", outsidefunction)
      return ()=> document.removeEventListener("mousedown", outsidefunction)
  }, [])  
  return (
    <div className="sqo-1 dsuew-1" ref={myRef}>
      <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
        Thêm bộ lọc
      </div>
      <div className="dko-1">

      </div>
      {
        opensuggest=== true &&
        <div className="dsqeo-1">
          <div className="ddoeqw-1">
            <div className="teai-1"> 
              Tiện ích
            </div>
          </div>
          <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
            <A type="Hành lý" />
          </div>
          <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
            <A type="Suất ăn" />
          </div>
          <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
            <A type="Giải trí" />
          </div>
          <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
            <A type="Wifi" />
          </div>
          <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
            <A type="Nguồn sạc / cổng USB" />
          </div>
          <div>Lọc tiền vé trong khoảng: </div>
          <br />
          <FilterRangeCost findbyrangecost={props.findbyrangecost} setfindbyrangecost={props.setfindbyrangecost} setresultsearch={props.setresultsearch} resultsearch={props.resultsearch} mincost={_.minBy(props.resultsearch, o=> o.cost_adult)} maxcost={_.maxBy(props.resultsearch, o=> o.cost_adult)} />
        </div>
      }
    </div>
  )
}

const A= (props)=> {
  const [check, setcheck]= useState(()=> false)
  return (
    <>
      <div className='hf-1' onClick={()=> {
        setcheck(prev=> !prev)
      }} style={{backgroundColor: check=== false ? "#fff" : "#0194f3", border: check=== false ? "1px solid #d9dbcd" : "#0194f3"}}>
        <span></span>
      </div>
      <div className="wewo-1" style={{fontSize: 14, fontWeight: 500}}>
        {props.type}
      </div>
    </>
  )
}
const B= (props)=> {
  const [check, setcheck]= useState(()=> false)
  return (
    <div className='hf-1' onClick={(e)=> {
      e.stopPropagation()
      setcheck(prev=> !prev)
      if(check=== false) {
        props.setfindbybrand(prev=> ([...prev, props.brand]))
      }
      else {
        props.setfindbybrand(props.findbybrand.filter(item=> item.toString() !== props.brand.toString()))
      }
    }} style={{backgroundColor: check=== false ? "#fff" : "#0194f3", border: check=== false ? "1px solid #d9dbcd" : "#0194f3"}}>
      <span></span>
    </div>
  )
}

const FlightDetail= (props)=> {
  return (
    <>
      <div className="qoe-1">
        <div className="sow-1">
          <div className="koa-1">
            <div className="kwe-3">
              <div className="gae-2">
                <div>
                  <img alt="VietJet Air" importance="low" loading="lazy" src={props.logo_brand} decoding="async" width="28" style={{height: 28, objectFit: "contain", objectPosition: "50% 50%"}} />
                </div>
                <div>
                  {props.brand}
                </div>
              </div>
              <div className="ekw-5">
                <div className="iwe-2">
                  <div>
                    <div className="dwo-3">
                      {props.timestart}                      
                    </div>
                    <div className="anj-7">
                      {props.origin}
                    </div>
                  </div>
                  <div className="eewo-1">
                    <div className="jiew-2">
                      {/* {moment(`${timestart} ${dayflight}`, "hh:mm DD-MM-YYYY")} */} 
                      {
                        moment.utc(moment(`${props.timearrive} ${props.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${props.timestart} ${props.dayflight}`, "hh:mm DD-MM-YYYY"))).format("h[h]mm[ph]")}
                    </div>
                    <div className="owew-2">
                      <div className="ewoq-4">

                      </div>
                      <div className="dwiew-1">

                      </div>
                      <div className="ewrq-3">

                      </div>
                    </div>
                    <div className="jiew-2">
                      Bay thẳng
                    </div>
                  </div>
                  <div>
                    <div className="dwo-3">
                      {props.timearrive} {moment(`${props.dayflight}`, "DD-MM-YYYY") < moment(`${props.daydestination}`, "DD-MM-YYYY") && "(+1d)"}
                    </div>
                    <div className="anj-7">
                      {props.destination} 
                    </div>
                  </div>
                </div>
                
                <div className="lit-4" style={{marginLeft: 12, display: "flex", flexDirection: "row", gap: 10}}>
                  {parseInt(props.package)=== 1 && <Tooltip title="Hành lý"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><rect width="24" height="24"></rect><path stroke="#0194f3" strokeWidth="2" d="M9,5 L15,5 C15.5522847,5 16,5.44771525 16,6 L16,8 L8,8 L8,6 C8,5.44771525 8.44771525,5 9,5 Z M4.5638852,8 L19.4361148,8 C20.3276335,8 20.6509198,8.09282561 20.9768457,8.2671327 C21.3027716,8.4414398 21.5585602,8.69722837 21.7328673,9.0231543 C21.9071744,9.34908022 22,9.67236646 22,10.5638852 L22,17.4361148 C22,18.3276335 21.9071744,18.6509198 21.7328673,18.9768457 C21.5585602,19.3027716 21.3027716,19.5585602 20.9768457,19.7328673 C20.6509198,19.9071744 20.3276335,20 19.4361148,20 L4.5638852,20 C3.67236646,20 3.34908022,19.9071744 3.0231543,19.7328673 C2.69722837,19.5585602 2.4414398,19.3027716 2.2671327,18.9768457 C2.09282561,18.6509198 2,18.3276335 2,17.4361148 L2,10.5638852 C2,9.67236646 2.09282561,9.34908022 2.2671327,9.0231543 C2.4414398,8.69722837 2.69722837,8.4414398 3.0231543,8.2671327 C3.34908022,8.09282561 3.67236646,8 4.5638852,8 Z"></path><text x="5.5" y="18" fill="#0194f3" fontSize="11" fontFamily="MuseoSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol" fontWeight="900"></text></g></svg></Tooltip>}
                  {parseInt(props.eating)=== 1 && <Tooltip title="Ăn uống"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_meal_24px-c66421c72d506576cf9851e390b04a28.svg" width="20" height="20" alt="open" ></img></div></Tooltip>}             
                  {parseInt(props.entertainment)=== 1 && <Tooltip title="Giải trí"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_entertainment_24px-8ddbf131a0adec74006d5072a5ee75a4.svg" width="20" height="20" alt="open"></img></div></Tooltip>}
                  {parseInt(props.charger)=== 1 && <Tooltip title="Cáp sạc USB"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_power_plug_24px-911f99799fec150c05c235d1a1993375.svg" width="20" height="20" alt="open"></img></div></Tooltip>}             

                </div>
              </div>  
            </div>
            <div className="eoq-5">
            </div>
          </div>
          <div className="fsm-1">
            {parseInt(props?.discount) > 0 ? <>
              <div className="dkoew-1">
              {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND /khách
            </div>
            <div className="oweweo-2">
              <div className="dkoekw-1">
              {(parseInt(props.cost_adult) - parseInt(props.discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
              </div>
              <div className="dwejwe-1">
                /khách
              </div>
            </div>
            </> : <div className="oweweo-2">
              <div className="dkoekw-1">
                {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
              </div>
              <div className="dwejwe-1">
                /khách
              </div>
            </div>}
            
            <div className="iwtap-3">
              Chọn
            </div>
          </div>
        </div>
      </div>
      <div className="css-2">
                
      </div>
    </>
  )
}

export default SearchFlight