import React from 'react'
import _ from "lodash"
import { memo } from 'react'

const LimitCost = (props) => {
  return (
    <div className='grhfrwthrwtertw'>
        <MinCost list={props.list} />
        <MaxCost list={props.list} />
    </div>
  )
}
const MinCost= (props)=> {
  return (
    <div className='dgertryoyup'>
        {_.minBy(props.list, o=> o.cost_adult)?.cost_adult} VND
    </div>
  )
}
const MaxCost= (props)=> {
  return (
    <div className='grthorpetrypr'>
        {_.maxBy(props.list, o=> o.cost_adult)?.cost_adult} VND
    </div>
  )
}

export default memo(LimitCost)