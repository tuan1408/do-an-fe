import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import _ from "lodash"

function valuetext(value) {
  return `${value}K`
}
const fakesleep= (ms)=> new Promise(res=> setTimeout(res, ms))
export default function FilterRangeCost(props) {
    const marks = [
        {
            value: props.mincost?.cost_adult,
            label: <div style={{marginLeft: 16}}>{props.mincost?.cost_adult}</div>,
        },
        {
            value: props.maxcost?.cost_adult,
            label: <div style={{marginRight: 16}}>{props.maxcost?.cost_adult}</div>,
        },
    ];
      
  const [value, setValue] = React.useState([props.maxcost?.cost_adult - props.mincost?.cost_adult / 2, props.maxcost?.cost_adult-props.mincost?.cost_adult / 4])

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    await fakesleep(2000)
  }

  return (
    <Box sx={{ width: 260 }}>
      <Slider
        getAriaLabel={() => "Cost range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={props.mincost?.cost_adult}
        max={props.maxcost?.cost_adult}
        step={1000}
        className="weweopekoqpeqowp"
        marks={marks}

      />
    </Box>
  )
}