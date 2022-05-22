import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { useMemo } from 'react'
import { memo } from 'react'
import { airport_complete } from '../../f/airport_autocomplete'
import D from '../Date/D'
import 'moment/locale/vi'  
import { search_airport } from '../../f/search_airport'
import { Link } from 'react-router-dom'

const C2 = () => {
    const [origin,  setorigin]= useState(()=> ({
        location_airport: "Đà Nẵng",
        code_airport: "DAN"
    }))
    const [destination, setdestination]= useState(()=> ({
        location_airport: "TP HCM",
        code_airport: "SGN"
    }))
    const [startdate, setstartdate]= useState(initialValue)
    const [arrivaldate, setarrivaldate]= useState(initialValue)

  return (
    <div className="cp-2">
        <S1 
        origin={origin} 
        setorigin={setorigin} 
        destination={destination} 
        setdestination={setdestination}
        startdate={startdate}
        setstartdate={setstartdate}
        arrivaldate={arrivaldate}
        setarrivaldate={setarrivaldate}
         />
        <S2 
        origin={origin} 
        destination={destination}
        startdate={startdate}
        arrivaldate={arrivaldate}
         />
    </div>
  )
}

const S1= (props)=> {
    return (
        <div className="su-1">
            <T1 />
            <T2 
            origin={props.origin} 
            setorigin={props.setorigin} 
            destination={props.destination} 
            setdestination={props.setdestination}
             />
            <T3
            startdate={props.startdate}
            setstartdate={props.setstartdate}
            arrivaldate={props.arrivaldate}
            setarrivaldate={props.setarrivaldate}
             />
        </div>
    )
}
const T1= (props)=> {
    return (
        <div className="al-1">
            <R1 category="Một chiều / Khứ hồi" />
            <R2 category="Nhiều thành phố" />
        </div>
    )
}
const R1= (props)=> {
    return (
        <div>
            <div style={{width: 22, height: 22, display: "flex", justifyContent: 'center',alignItems: "center", background: "#2e89ff", borderRadius: "50%"}}>
                <div role={"radio"} aria-checked={true} className="ro-1" style={{transitionDuration: "0.25s"}}></div>
            </div>
            <div className="tx-1">{props.category}</div>
        </div>
    )
}
const R2= (props)=> {
    return (
        <div>
            <div style={{width: 22, height: 22, display: "flex", justifyContent: 'center',alignItems: "center", background: "#2e89ff", borderRadius: "50%"}}>
                <div role={"radio"} aria-checked={true} className="ro-1" style={{transitionDuration: "0.25s"}}></div>
            </div>
            <div className="tx-1">{props.category}</div>
        </div>
        
    )
}

const T2= (props)=> {
    const [o1, seto1]= useState(()=> false)
    const [o2, seto2]= useState(()=> false)
    const [airportAutocomplete, setAirportAutocomplete]= useState(()=> [])
    const outsidefunction= (e, ref)=> {
        if(ref?.current && !ref?.current?.contains(e?.target)) {
            seto1(()=> false)
        }
    }
    const outsidefunction2= (e, ref)=> {
        if(ref?.current && !ref?.current?.contains(e?.target)) {
            seto2(()=> false)
        }
    }
    useEffect(()=> {
        airport_complete(setAirportAutocomplete)
    }, [setAirportAutocomplete])
    return (
        <div className="ty-2">
            <F choose={props.origin} setchoose={props.setorigin} airportAutocomplete={airportAutocomplete} opensuggest={o1} outsidefunction={outsidefunction} setopensuggest={seto1} ft={"Từ"} statePlane={"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90850a422444ef949eca39e92bd9368e.svg"} pc="Origin" />
            <C origin={props.origin} destination={props.destination} setorigin={props.setorigin} setdestination={props.setdestination} />
            <F choose={props.destination} setchoose={props.setdestination} airportAutocomplete={airportAutocomplete} opensuggest={o2} outsidefunction={outsidefunction2} setopensuggest={seto2} ft={"Đến"} statePlane={"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/65e2019ad45add446ab998c095d62833.svg"} pc="Destination" />
        </div>
    )
}
const C= (props)=> {
    return (
        <div className="cv-1" role={"button"} onClick={()=> {
            props.setorigin(()=> props.destination)
            props.setdestination(()=> props.origin)
        }}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/1a837f05ebf158ba20d966cd6038c757.svg" alt="open" width="20" height="20" />
        </div>
    )
}
const F= (props)=> {
    const myRef= useRef()
    useEffect(()=> {
        document.addEventListener("mousedown", (e)=> props.outsidefunction(e, myRef))
        return ()=> document.removeEventListener("mousedown",(e)=>  props.outsidefunction(e, myRef))
        // eslint-disable-next-line
    }, [props.outsidefunction])
    const [suggest, setsuggest]= useState(()=> undefined)
    return (
        <div className="ft-1">
            <div className="ks-1">
                {props.ft}
            </div>
            <div className="fk-1" ref={myRef} onClick={()=> props.setopensuggest(()=> true)}>
                <div className="lq-1">
                    <div className="fl-1">
                        <img src={props.statePlane} alt="open" className="il-1" />
                    </div>
                    <input placeholder={props.pc} onChange={(e)=> {
                        setsuggest(e.target.value)
                        search_airport(e.target.value, props.airportAutocomplete)
                    }} value={suggest!== undefined ? suggest : `${props.choose.code_airport !== undefined ? props.choose.location_airport + "(" + props.choose.code_airport + ")" : props?.airportAutocomplete[0]?.location_airport+ "("+props?.airportAutocomplete[0]?.code_airport+")"}`} type="text" spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                </div>
                {
                    props.opensuggest=== true &&
                    <div className="kd-1">
                        <div className="ow-1">  
                            <div className="as-2">
                                <div className="jg-2">
                                    Thành phố hoặc sân bay phổ biến
                                </div>
                            </div>
                            {
                                props.airportAutocomplete && props.airportAutocomplete?.map((item, key)=> <div key={key} className="lm-4" onClick={(e)=> {
                                    e.stopPropagation()
                                    setsuggest(()=> undefined)
                                    props.setopensuggest(()=> false)                                    
                                    props.setchoose((prev)=> ({...prev, location_airport: item.location_airport, code_airport: item.code_airport}))
                                }}>
                                <div>
                                    {item.location_airport}, {item.country_airport}
                                </div>
                                <div>
                                    {item?.code_airport} -  {item?.name_airport}
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
const T3= (props)=> {
    const [check, setcheck]= useState(()=> false)
    return (
        <div className="tw-3">
            <L date={"Ngày đi"} check={true} value={props.startdate} setValue={props.setstartdate} />
            <L date={"Khứ hồi"} check={check} value={props.arrivaldate} setValue={props.setarrivaldate} tick={<button onClick={()=> setcheck(prev=> !prev)} className="hf-1" style={{backgroundColor: check=== false ? "#fff" : "#0194f3", border: check=== false ? "1px solid #d9dbcd" : "#0194f3"}}>
                <span></span>
            </button>} />
        </div>
    )
}
const initialValue = new Date()
const L= (props)=> {
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
        <div className="ms-1" ref={myRef}>
            <div className="kq-1">
                {props.tick}
                {props.date}
            </div>
            {
                props.check && props.check=== true &&
                <div className="sa-1" onClick={()=> setopensuggest(prev=> true)}>
                    <div className="pa-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="jw-1">
                        <p style={{textTransform: "capitalize", whiteSpace: "nowrap"}}>
                            {moment(`${new Date(props.value).getDate().toString()}/${((parseInt(new Date(props.value).getMonth()) + 1) <10) ? '0'+(parseInt(new Date(props.value).getMonth())+1).toString() : new Date(props.value).getMonth()}/${new Date(props.value).getFullYear().toString()}`, "DD MM YYYY").locale("vi").format("dddd")},&nbsp;   
                        </p>
                        <D open={opensuggest} value={props.value} setValue={props.setValue} initialValue={initialValue} />
                    </div>
                </div>
            }
        </div>
    )
}

const S2= (props)=> {
    const [data, setData]= useState(()=> ({
        adult: 1,
        kid: 0,
        baby: 0
    }))
    const [seatclass, setseatclass]= useState(()=> ({
        v: "Phổ thông",
        e: "ECONOMY"
    }))
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
        <div className="su-2">
            <div className="nn-1"></div>    
            <div className="cs-1">
                <div className="wo-1">Số hành khách</div>
                <div className="gr-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                    <div className="ic-1">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/accfeba7f43edb20e4858113abf756d2.svg" alt="open" width="24" height="24" />
                    </div>
                    <input type="text" value={`${data.adult} người lớn, ${data.kid} trẻ em, ${data.baby} em bé`} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" readOnly={true} style={{textTransform: "capitalize"}}  />
                    {
                        opensuggest=== true &&
                        <div className="ao-1">
                            <div className="ap-1">
                                <div>
                                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2c0dc7e0e7347fb5200a1aa692786496.svg" alt="open" style={{marginRight: 12}} />
                                    <div>
                                        <div style={{height: "auto"}}>Người lớn</div>
                                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(từ 12 tuổi)</div>
                                    </div>
                                </div>
                                <div>   
                                    <button disabled={(parseInt(data.adult) === 0) ? true : false} className="gh-1" onClick={()=> setData(prev=> ({...prev, adult: parseInt(data.adult) - 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                    <div className="rw-1">
                                        {data.adult}
                                    </div>
                                    <button className="gh-1" onClick={()=> setData(prev=> ({...prev, adult: parseInt(data.adult) + 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ap-1">
                                <div>
                                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/596fe65c9b360b34afef792214b8c387.svg" alt="open" style={{marginRight: 12}} />
                                    <div>
                                        <div style={{height: "auto"}}>Trẻ em</div>
                                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(từ 2 đến 11 tuổi)</div>
                                    </div>
                                </div>
                                <div>   
                                    <button disabled={(parseInt(data.kid) === 0) ? true : false} className="gh-1" onClick={()=> setData(prev=> ({...prev, kid: parseInt(data.kid) - 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                    <div className="rw-1">
                                        {data.kid}
                                    </div>
                                    <button className="gh-1" onClick={()=> setData(prev=> ({...prev, kid: parseInt(data.kid) + 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ap-1">
                                <div>
                                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/972714e5c8656d1b98aa564dfed79cee.svg" alt="open" style={{marginRight: 12}} />
                                    <div>
                                        <div style={{height: "auto"}}>Em bé</div>
                                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(dưới 2 tuổi)</div>
                                    </div>
                                </div>
                                <div>   
                                    <button disabled={(parseInt(data.baby) === 0) ? true : false} className="gh-1" onClick={()=> setData(prev=> ({...prev, baby: parseInt(data.baby) - 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                    <div className="rw-1">
                                        {data.baby}
                                    </div>
                                    <button className="gh-1" onClick={()=> setData(prev=> ({...prev, baby: parseInt(data.baby) + 1}))}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="de-1">
                                <button onClick={(e)=> {
                                    e.stopPropagation()
                                    setopensuggest(()=> false)
                                }} className="fk-1">Xong</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ClassSeat value={seatclass} setValue={setseatclass} />
            <div className="sw-1" style={{width: "100%", display: "flex", justifyContent: "flex-end",}}>
                <Link to={`/flight/fullsearch?ap=${props.origin?.code_airport}.${props.destination?.code_airport}&dt=${new Date(props.startdate).getDate().toString()}-${((parseInt(new Date(props.startdate).getMonth()) + 1) <10) ? '0'+(parseInt(new Date(props.startdate).getMonth())+1).toString() : new Date(props.startdate).getMonth()}-${new Date(props.startdate).getFullYear().toString()}&ps=${data.adult}.${data.kid}.${data.baby}&sc=${seatclass.e}`} className="dkw-1">
                    <div className="ia-1">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" alt="open" />
                        <div className="so-1" style={{whiteSpace: "nowrap"}}>Tìm chuyến bay</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
const ClassSeat= memo((props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const seat= useMemo(()=> [{v: "Phổ thông", e: "ECONOMY"}, {v: "Phổ thông cao cấp", e: "PREMIUM_ECONOMY"}, {v: "Thương gia", e: "BUSINESS"}, {v: "Hạng nhất", e: "FIRST"}], [])
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
        <div className="cs-2">
            <div className="wo-1">Hạng ghế</div>
            <div className="gr-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                <div className="ic-1">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6fbc7de62382bf792c44d7ff99c32ce.svg" alt="open" width="24" height="24" />
                </div>
                <div className="it-1">
                    <input type="text" value={props.value.v} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" readOnly={true} style={{textTransform: "capitalize"}}  />
                </div>
                <svg style={{transform: opensuggest=== true ? "rotate(-180deg)" : "rotate(0)"}} className="dr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronDown"><title>Toggle Options</title><path d="M6 9L12 15L18 9" stroke="#0194f3" strokeWidth="2" ></path></svg>
                {
                    opensuggest=== true &&
                    <div className="vf-2">
                        <div className="ro-1">
                            {
                                seat?.map((item, key)=> <div key={key} onClick={(e)=> {
                                    e.stopPropagation()
                                    setopensuggest(()=> false)
                                    props.setValue((prev)=> ({...prev, v: item.v, e: item.e}))
                                }} className="cw-1">
                                <div className="vn-1">
                                </div>
                                <div className="ka-1">
                                    <div className="pw-1">
                                        {item.v}
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

export default C2