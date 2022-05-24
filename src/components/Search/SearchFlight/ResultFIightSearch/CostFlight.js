import React, { memo } from 'react'

const CostFlight = (props) => {
  return (
    <div className="fsm-1">
      {parseInt(props?.discount) > 0 ?  <CostWithDiscount cost_adult={props.cost_adult} discount={props.discount} />: <CostWithoutDiscount cost_adult={props.cost_adult} />}
        <div className="iwtap-3">
            Chọn
        </div>
    </div>        
  )
}

export default memo(CostFlight)

const CostWithoutDiscount= (props)=> {
    return (
        <div className="oweweo-2">
        <div className="dkoekw-1">
            {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
        </div>
            <div className="dwejwe-1">
                /khách
            </div>
        </div>
    )
}
const CostWithDiscount= (props)=> {
    return (
        <>
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
        </>
    )
}