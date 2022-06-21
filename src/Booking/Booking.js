import { CircularProgress, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { bookticket } from '../f/book_ticket'
import FormCustomer from './FormCustomer'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

const Booking = (props) => {
  const location= useLocation()
  const [agent, setagent]= useState(()=> ({
    name: "",
    surname: "",
    phonenumber: "",
    email: ""
  }))
  const [alluser, setalluser]= useState(()=> ([]))
  const [loading, setloading]= useState(()=> false)
  const [opensnack, setopensnack]= useState(()=> false)
  const navigate= useNavigate()
  const [accept, setaccept]= useState(()=> false )
  return (
    <>
      <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <div style={{width: "100%", maxWidth: 1024}}>
          <div style={{fontSize: 24, fontWeight: 600}}>Đặt chỗ của tôi</div>
          <div>Điền thông tin của bạn và các hành khách</div>
        </div>
        <br />
        <div style={{fontSize: 24, fontWeight: 600, width: "100%", maxWidth: 1024}}>Thông tin liên hệ</div>
        <br />
        <div className='djefgjegffd' style={{width: "100%", maxWidth: 1024, borderRadius: 10, background: "#fff", boxSizing: "border-box", padding: 10}}>
          <div>Thông tin liên hệ (nhận vé/ phiếu thanh toán)</div>
        </div>
        <div style={{width: "100%", maxWidth: 1024, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, padding: 20, boxSizing: "border-box", background: "#f7f9fa", borderRadius: 7,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "#fff"}}>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Họ (vd: Nguyen)</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, name: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>như trên CMND (không dấu)</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Tên đệm & tên (vd: Thi Ngoc Anh)</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, surname: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>như trên CMND (không dấu)</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Điện thoại di động</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, phonenumber: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Email</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, email: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>VD: email@example.com</div>
          </div>
        </div>
        <br />
        <br />
        <div style={{fontSize: 24, fontWeight: 600, width: "100%", maxWidth: 1024}}>Thông tin hành khách</div>
        <br />
        {
          location.state.ps && 
          <>
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[0])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Người lớn "+(parseInt(key) + 1)} key={key} {...item} />)
            }
              
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[1])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Trẻ em "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[2])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Em bé "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
          </>
        }
        {
          location.state.detail_customer && 
          <>
            {
              
              Array.from(Array(parseInt(location.state.detail_customer.split(".")[0])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Người lớn "+(parseInt(key) + 1)} key={key} {...item} />)
            }
              
            {
              Array.from(Array(parseInt(location.state.detail_customer.split(".")[1])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Trẻ em "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
            
          </>
        }
        <br />
        <div style={{width: "100%", maxWidth: 1024, display: "flex"}}>
          <button disabled={accept=== false ? true : false} onClick={()=> bookticket(agent, alluser, location.state.id_flight || location.state.id_hotel, setloading, setopensnack, navigate)} className='sdjsiajwiawa' style={{padding: "8px 40px", background: "#2e89ff", color: "#fff", fontWeight: 600, borderRadius: 8, width: "max-content", cursor: accept=== true ? "pointer" : "not-allowed", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "currentcolor", opacity: accept=== true ? 1 : 0.5}}>
            {loading=== false ? "Chọn" : <div style={{width: 38.150, height: 21.6, display: "flex", justifyContent: 'center',alignItems: "center",}}><CircularProgress style={{color: "#fff", width: 21.6, height: 21.6}} /></div>}
          </button>
        </div>
        <br />
        <br />
      </div>
      <Snackbar
        open={opensnack}
        autoHideDuration={3000}
        message="Booking is successfully"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
          >
            <div onClick={()=> setopensnack(()=> false)} style={{display: "flex", justifyContent: 'center',alignItems: "center"}}>
              <CloseIcon fontSize="small" />
            </div>
          </IconButton>
        }
      />
    </>
  )
}



export default Booking