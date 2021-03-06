import moment from "moment"
import { useEffect, useRef, useState } from "react"
import D from "../Date/D"

const initialValue= new Date()

const SelectTime= (props)=> {
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

export default SelectTime