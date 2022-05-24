import React, { useEffect, useState } from 'react'
import _ from "lodash"
import useQuery from '../../../f/get_query_parameter'
import { result_hotel } from '../../../f/result_hotel'
import FilterRangeCostHotel from '../../Filter/FilterRangeCostHotel'
import ResultSearchHotel from '../../ResultSearchHotel/ResultSearchHotel'
import TitleSearchHotel from './TitleSearchHotel'
import SortHotel from '../../Sort/SortHotel/SortHotel'
import LimitCost from './LimitCost'
import EntityHotel from './EntityHotel'
import Collape from './Collape'
import TypeRoomHotel from './TypeRoomHotel'
import FilterByStar from './FilterByStar'

const SearchHotel = () => {
  const query= useQuery()
  const [list, setlist]= useState(()=> [])
  const [listRange, setListRange]= useState(()=> [])
  const [reviewstar, setreviewstar]= useState(()=> [])
  useEffect(()=> {
    result_hotel(setlist, query.get("spec"), query.get("l"), query.get("c"), query.get("r"))
    return ()=> setlist(()=> [])
  },[query])
  return (
    <div className='aoe-1'>
        <TitleSearchHotel />
      <div className="dsjiewwew" style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
        <div className="dsijeesawdad">
            <div className="sjskeekweow">
                <SortHotel setlist={setlist} list={list} />
                <Collape />
                <div className='dfsfgwrterww'>
                    <div className='gdfjerdgrwttew'>Khoảng giá/đêm</div>
                    <LimitCost list={list}/> 
                    <FilterRangeCostHotel listRange={listRange} setListRange={setListRange} mincost={_.minBy(list, o=> o.cost_adult)} maxcost={_.maxBy(list, o=> o.cost_adult)} />
                </div>
                <FilterByStar reviewstar={reviewstar} setreviewstar={setreviewstar} />
                <div className='fkkfdgrwketoepre'>
                    <EntityHotel />
                </div>
                <TypeRoomHotel />
            </div>
            <div className="rijererwrwe">
                {
                    list?.length>0 && listRange?.length<=0 && reviewstar?.length<=0 &&
                    list?.map((item, key)=> <ResultSearchHotel key={key} {...item} />)
                }
                {
                    listRange?.length>0 && 
                    list?.filter(item=> parseInt(item.cost_adult)>= parseInt(Math.min.apply(Math, listRange)) && parseInt(item.cost_adult)<= parseInt(Math.max.apply(Math, listRange))).map((item, key)=> <ResultSearchHotel key={key} {...item} />)
                }
                {
                    reviewstar?.length>0 &&
                    list?.filter(item=> reviewstar?.includes(parseInt(item.review))).map((item, key)=> <ResultSearchHotel key={key} {...item} />)                    
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHotel