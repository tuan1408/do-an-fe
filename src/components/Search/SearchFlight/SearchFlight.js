import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import useQuery from '../../../f/get_query_parameter'
import { search_flight_ } from '../../../f/search_flight'
import TitleSearchFlight from './TitleSearchFlight/TitleSearchFlight'
import FilterTool from './FilterTool/FilterTool'
import ResultFlightDetail from './ResultFIightSearch/ResultFlightSearch'

const SearchFlight = () => {
  const query= useQuery()
  const [searchflight, setsearchflight]= useState(()=> [])
  const [resultsearch, setresultsearch]= useState(()=> [])
  const [findbybrand, setfindbybrand]= useState(()=> [])
  const [findtimeorigin, settimeorigin]= useState(()=> undefined)
  const [findtimedestination, settimedestination]= useState(()=> undefined)
  const [findbyentities, setfindbyentities]= useState(()=> [])
  const [findbyrangecost, setfindbyrangecost]= useState(()=> [])
  const [listRange, setListRange]= useState(()=> [])
  useEffect(()=> {
    search_flight_(setsearchflight, setresultsearch, query.get("ap"), query.get("dt"), query.get("ps"), query.get("sc"))
  }, [query])
  return (
    <div className="aoe-1">
      <TitleSearchFlight searchflight={searchflight} /> 
      <FilterTool setListRange={setListRange} resultsearch={resultsearch} setresultsearch={setresultsearch} settimeorigin={settimeorigin} settimedestination={settimedestination} setfindbybrand={setfindbybrand} findbybrand={findbybrand} />
      {
        findbybrand.length<=0 && listRange?.length<=0 && findbyrangecost?.length<=0 && resultsearch&& resultsearch?.map((item, key)=> <ResultFlightDetail {...item} key={key} />)
      }
      {
        findbybrand.length>0 && resultsearch?.filter((item)=> findbybrand.includes(item.brand)=== true).map((item, key)=> <ResultFlightDetail {...item} key={key} />)
      }
      {
        findtimeorigin?.length>0 && resultsearch?.filter(item=> (moment(item.timestart.toString(), "hh:mm") > moment(`${findtimeorigin.split("-")[0].toString().trim()}`, "hh:mm") || moment(item.timestart.toString(), "hh:mm") < moment(`${findtimeorigin.split("-")[1].toString().trim()}`, "hh:mm"))).map((item, key)=> <ResultFlightDetail {...item} key={key} />)
      }
      {
        findbyentities?.length>0 && resultsearch?.filter(item=> findbyentities.includes(item.packet))
      }
      {
        listRange?.length>0 && resultsearch?.filter(item=> parseInt(item.cost_adult) >=  parseInt(Math.min.apply(Math, listRange)) && parseInt(item.cost_adult) <= parseInt(Math.max.apply(Math, listRange))).map((item, key)=> <ResultFlightDetail {...item} key={key} />)
      }
    </div>
  )
}

export const M1= (props)=> {
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
export const M2= (props)=> {
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

export const A= (props)=> {
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
export const B= (props)=> {
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



export default SearchFlight