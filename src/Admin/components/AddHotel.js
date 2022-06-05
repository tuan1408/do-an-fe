import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useState } from 'react';
import { add_hotel } from '../../f/add_hotel';

const AddHotel = (props) => {
  const [hotel, sethotel]= useState(()=> ({
    code_location: "",
    name_hotel: "",
    photo_hotel: "",
    brand: "",
    logo_brand: "",
    location: "",
    cost_adult: 0,
    cost_kid: 0,
    cost_baby: 0,
    discount: 0,
    type: "",
    available_from: "",
    expire_day: "",
    detail_location: "",
    country_location: "",
    review: 0,
    wifi: 0,
    pool: 0,
    parking: 0,
    restaurant: 0,
    receptionist: 0,
    elevator: 0,
    fitness_center: 0,
    meeting: 0,
    airport_shuttle: 0,
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
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, code_location: e.target.value}))} id="outlined-basic" label="Mã vùng (Ví dụ: DAN)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, name_hotel: e.target.value}))} id="outlined-basic" label="Tên khách sạn (Ví dụ: Luxury Hotel)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, photo_hotel: e.target.value}))} id="outlined-basic" label="Ảnh khách sạn (Nhập đường dẫn ảnh của khách sạn)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, brand: e.target.value}))} id="outlined-basic" label="Hãng khách sạn (Ví dụ: Vin Group)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, location: e.target.value}))} id="outlined-basic" label="Tỉnh / Thành phố (Ví dụ: Đà Nẵng)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, available_from: e.target.value}))} id="outlined-basic" label="Có sẵn từ (Ví dụ: 29-05-2022 - Nhập đúng định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, expire_day: e.target.value}))} id="outlined-basic" label="Ngày hết hạn (Ví dụ: 11-06-2022 - Nhập đúng định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, detail_location: e.target.value}))} id="outlined-basic" label="Địa điểm chi tiết (Ví dụ: Quận Liên Chiểu)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, country_location: e.target.value}))} id="outlined-basic" label="Quốc gia (Ví dụ: Việt Nam)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, cost_adult: e.target.value}))} id="outlined-basic" label="Giá vé cho người lớn (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, cost_kid: e.target.value}))} id="outlined-basic" label="Giá vé cho trẻ em (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, cost_baby: e.target.value}))} id="outlined-basic" label="Giá vé cho em bé (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, type: e.target.value}))} id="outlined-basic" label="Kiểu nơi ở (Ví dụ: Khách sạn hoặc biệt thự)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, discount: e.target.value}))} id="outlined-basic" label="Giảm giá (Thêm giảm giá cho khách sạn)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=> sethotel(prev=> ({...prev, review: e.target.value}))} id="outlined-basic" label="Đánh giá (Đánh giá theo thang điểm từ 1 đến 5)" variant="outlined" />
        </Box>
        <br />
        <div>Tiện ích (Chỉ tích vào những ô mà khách sạn đáp ứng được và chỉ được tích một lần duy nhất)</div>
        <>
            <Checkbox
                onChange={(e)=> sethotel(prev=> ({...prev, wifi: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Wifi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, pool: 2}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Bể bơi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, parking: 3}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Chỗ để xe</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, restaurant: 4}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Nhà hàng</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, receptionist: 5}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Lễ tân</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, elevator: 6}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Thang máy</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, fitness_center: 7}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Trung tâm thể dục</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, meeting: 8}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Phòng họp</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, airport_shuttle: 9}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Đưa đón sân bay</span>
        </>
    
        
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button onClick={()=> add_hotel(hotel)} variant={"outlined"}>Thêm khách sạn</Button>
        </div>
    </div>
  )
}

export default AddHotel