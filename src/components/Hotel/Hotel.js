import moment from 'moment'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { hotel_autocomplete } from '../../f/hotel_autocomplete'
import D from '../Date/D'

const initialValue = new Date()
const Hotel = () => {
  return (
    <div className="cp-2">
        <div className="pg-1">
            <E />
            <br />
            <F />
            <br />
            <G />
        </div>
    </div>
  )
}

const E= (props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const [hotelAutocomplete, setHotelAutocomplete]= useState(()=> [])
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
    const [choose, setchoose]= useState(()=> "")
    return (
        <div className="eo-1">
            <div className="bm-1">
                Thành phố, địa điểm hoặc tên khách sạn: 
            </div>
            <div className="sds-2" ref={myRef} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}} onClick={()=> {
                setopensuggest(()=> true)
                hotel_autocomplete(setHotelAutocomplete)
            }}>
                <div className="ic-3">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06c6fdcf3e33d2950e2743ea8c3d2208.svg" alt="open" width="24" height="24" />
                </div>
                <input onChange={()=> {}} value={choose} type="text" spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" placeholder="Thành phố, khách sạn, điểm đến" />
                {
                    opensuggest=== true &&
                    <div className="sg-1">
                        <div className="gt-1">
                            Điểm đến phổ biến
                        </div>
                        {
                            hotelAutocomplete && hotelAutocomplete?.map((item, key)=> <div key={key} className="ip-1" onClick={(e)=> {
                                e.stopPropagation()
                                setopensuggest(()=> false)
                                setchoose(item?.destination)
                            }}>
                            <div className="gf-1">
                                <div className="at-1">
                                    <div className="hr-1">
                                        {item?.destination}
                                    </div>
                                    <div className="ut-1">
                                        {item?.type}
                                    </div>
                                </div>
                                <div className="iw-1">
                                    <div className="hr-2">
                                        {item?.location_travel}
                                    </div>
                                    <div className="ut-2">
                                        {item?.c_hotel} khách sạn
                                    </div>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}
const F= (props)=> {
    const [timenight, settimenight]= useState(()=> 1)
    const [value, setValue]= useState(initialValue)
    return (
        <div className="ce-1">
            <F1 value={value} setValue={setValue} />
            <F2 value={value} timenight={timenight} settimenight={settimenight} /> 
            <F3 value={value} timenight={timenight} />
        </div>
    )
}
const F1= (props)=> {
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
        <div ref={myRef} className="fa-1" >
            <div className="ri-1">
                Nhận phòng: 
            </div>
            <div className="ei-1 hv-1" onClick={()=> setopensuggest(prev=> true)}>
                <div className="rw-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>  
                <div className="jw-1">
                    <p>
                        {moment(`${new Date(props.value).getDate().toString()}${((parseInt(new Date(props.value).getMonth() +1).toString()) <10) ? '0' + (parseInt(new Date(props.value).getMonth() ) + 1).toString() : (parseInt(new Date(props.value).getMonth()) + 1).toString()}${new Date(props.value).getFullYear().toString()}`, "DDMMYYYY").format("dddd")},&nbsp;   
                    </p>
                    <D open={opensuggest} value={props.value} setValue={props.setValue} initialValue={initialValue} />
                </div>
            </div>
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
        <div className="fa-1 lt-3">
            <div className="ri-1">
                Số đêm:
            </div>
            <div ref={myRef} className="ei-1 hv-1 lm-4" onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                <div className="rw-1">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0ee9b0e2caa9d0b970177b0c2ee77d0.svg" width="24" height="24" alt="open" />
                </div>  
                <div className="jw-1">
                    <input type="text" readOnly={true} value={`${props.timenight} đêm`} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                </div>
                <div className="os-1" style={{transform: opensuggest=== false ? "rotate(0)" : "rotate(-180deg)", width: 20}}>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f78c74ef882223cecd102ba1e47812.svg" width="16" height="16" alt="open" />
                </div>
                {
                    opensuggest=== true &&
                    <div className="vf-2">
                        <div className="ro-1">
                            {
                                Array.from(Array(30).keys()).map((item, key)=> <div key={key} className="cw-1" onClick={(e)=> {
                                    e.stopPropagation()
                                    setopensuggest(()=> false)
                                    props.settimenight(()=> parseInt(item)+1)
                                }}>
                                <div className="vn-1">
                                    
                                </div>
                                <div className="ka-1">
                                    <div className="pw-1">
                                        {parseInt(item) + 1} đêm
                                    </div>
                                    <div className="vk-2" style={{textTransform: "capitalize"}}>
                                        {moment(moment(`${new Date(props.value).getDate().toString()}${((parseInt(new Date(props.value).getMonth() +1).toString()) <10) ? '0' + (parseInt(new Date(props.value).getMonth() ) + 1).toString() : (parseInt(new Date(props.value).getMonth()) + 1).toString()}${new Date(props.value).getFullYear().toString()}`, "DDMMYYYY")).add(parseInt(item) + 1, "days").format("dddd, DD/MM/YYYY")}
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
}
const F3= (props)=> {
    return (
        <div className="fa-1">
            <div className="ri-1">
                Trả phòng:
            </div>
            <div className="es-1 ld-1 er-1" style={{height: 40, display: "flex", justifyContent: 'center',alignItems: "center"}}>
                <div className="jw-1" style={{height: "100%", textTransform: "capitalize", display: "flex", alignItems: "center"}}>
                    {moment(moment(`${new Date(props.value).getDate().toString()}${((parseInt(new Date(props.value).getMonth() +1).toString()) <10) ? '0' + (parseInt(new Date(props.value).getMonth() ) + 1).toString() : (parseInt(new Date(props.value).getMonth()) + 1).toString()}${new Date(props.value).getFullYear().toString()}`, "DDMMYYYY")).add(parseInt(props.timenight), "days").format("dddd, DD/MM/YYYY")}
                </div>
            </div>
        </div>
    )
}
const G= (props)=> {
    const [data, setData]= useState(()=> ({
        adult: 1,
        kid: 0,
        room: 1
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
        <div className="do-1">
            <div className="fa-1">
                <div className="ri-1">
                    Khách và phòng
                </div>  
                <div className="ei-1">
                    <div className="hv-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                        <div className="rw-1">
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/98a7579ccebe5a779c32bc1da67853a8.svg" width="24" height="24" alt="open" />
                        </div>  
                        <input type="text" value={`${data.adult} người lớn, ${data.kid} trẻ em, ${data.room} phòng`} readOnly={true} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                        <div className="os-1" style={{transform: opensuggest=== false ? "rotate(0)" : "rotate(-180deg)",}}>
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f78c74ef882223cecd102ba1e47812.svg" width="16" height="16" alt="open" />
                        </div>
                        {
                            opensuggest=== true &&
                            <div className="ao-1">
                                <div className="ap-1">
                                    <div>
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Người lớn</div>
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
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Trẻ em</div>
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
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Phòng</div>
                                    </div>
                                    <div>   
                                        <button disabled={(parseInt(data.room) === 0) ? true : false} className="gh-1" onClick={()=> setData(prev=> ({...prev, room: parseInt(data.room) - 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                        <div className="rw-1">
                                            {data.room}
                                        </div>
                                        <button className="gh-1" onClick={()=> setData(prev=> ({...prev, room: parseInt(data.room) + 1}))}>
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
                    <div>
                        <div className="ld-1">
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" alt="open" />
                            <div className="so-1">Tìm khách sạn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel