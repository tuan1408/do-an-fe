import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { add_flight } from '../../f/add_flight';

const AddFlight = (props) => {
  const [flight, setflight]= useState(()=> ({
    origin: "",
    destination: "",
    brand: "",
    timestart: "",
    timearrive: "",
    daystart: "",
    daydestination: "",
    aircraft_number: "",
    cost_adult: 0,
    cost_kid: 0,
    cost_baby: 0,
    tax: "",
    discount: 0,
    seatclass: "",
    package: 0,
    eating: 0,
    entertainment: 0,
    wifi: 0,
    charger: 0
  }))
  return (
    <div className="gegfdsesgfdes" style={{flex: "1 1 0", height: "100%", overflowY: "auto", padding: 10, boxSizing: 'border-box', }}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, origin: e.target.value}))} id="outlined-basic" label="Xuất phát từ (Nhập mã của sân bay. Ví dụ: DAN là Đà Nẵng)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, destination: e.target.value}))} id="outlined-basic" label="Điểm đến (Nhập mã của sân bay. Ví dụ: SGN là Tp HCM)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, brand: e.target.value}))} id="outlined-basic" label="Hãng hàng không (Ví dụ: Bamboo Airway)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, timestart: e.target.value}))} id="outlined-basic" label="Giờ khởi hành (Ví dụ: 01:20. Nhập theo định dạng hh:mm)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, timedestination: e.target.value}))} id="outlined-basic" label="Giờ đến nơi (Ví dụ: 05:30. Nhập theo định dạng hh:mm)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, daystart: e.target.value}))} id="outlined-basic" label="Ngày đi (Ví dụ: 29-05-2022. Nhập theo định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, daydestination: e.target.value}))} id="outlined-basic" label="Ngày đến (Ví dụ: 07-06-2022. Nhập theo định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, aircraft_number: e.target.value}))} id="outlined-basic" label="Số hiệu máy bay (Ví dụ: VJ-193)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, cost_adult: e.target.value}))} id="outlined-basic" label="Giá vé cho người lớn (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, cost_kid: e.target.value}))} id="outlined-basic" label="Giá vé cho trẻ em (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, cost_baby: e.target.value}))} id="outlined-basic" label="Giá vé cho em bé (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, tax: e.target.value}))} id="outlined-basic" label="Thuế (Ví dụ: 20000)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> setflight(prev=> ({...prev, discount: e.target.value}))} id="outlined-basic" label="Giảm giá (Nhập giá giảm cho chuyến bay)" variant="outlined" />
        </Box>
        <Box sx={{ minWidth: 120 }}>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Hạng ghế (Chọn trong hộp select)</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
              value={flight.seatclass}
            label="Age"
            onChange={(e)=> setflight(prev=> ({...prev, seatclass: e.target.value}))}
            >
            <MenuItem value={"Phổ thông"}>Phổ thông</MenuItem>
            <MenuItem value={"Phổ thông đặc biệt"}>Phổ thông đặc biệt</MenuItem>
            <MenuItem value={"Thương gia"}>Thương gia</MenuItem>
            <MenuItem value={"Hạng nhất"}>Hạng nhất</MenuItem>
            </Select>
        </FormControl>
      </Box>
    </Box>
        <br />
        <div>Tiện ích (Chỉ tích vào những ô mà khách sạn đáp ứng được và chỉ được tích một lần duy nhất)</div>
        <>
            <Checkbox
                onChange={(e)=> setflight(prev=> ({...prev, package: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Hành lí</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, eating: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Ăn uống</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, entertainment: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Giải trí</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, wifi: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Wifi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, charger: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Cáp sạc</span>
        </>
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button onClick={()=> add_flight(flight)} variant={"outlined"}>Thêm chuyến bay</Button>
        </div>
    </div>
  )
}

export default AddFlight