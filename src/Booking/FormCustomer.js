import React, { useState } from 'react'

const FormCustomer = (props) => {
  const [user, setuser]= useState(()=> ({
    nickname: "",
    name: "",
    surname: "",
    date_birth: 0,
    month_birth: 0,
    year_birth: 0,
    nationality: ""
  }))
  
  const handleBlur= ()=> {
    if(user.nickname?.length <=0 || user.name?.length <=0 || user.surname?.length <=0 || user.date_birth <=0 || user.month_birth <=0 || user.year_birth <=0 || user.nationality?.length <=0) {
      props.setaccept(prev=> false)
    }
    else {
      props.setaccept(prev=> true)
    }
  }
  return (
    <div style={{width: '100%', maxWidth: 1024, background: "#f2f0f5", padding: 10, borderRadius: 8, boxSizing: "border-box", margin: "10px 0", backgroundColor: "#fff"}}>
      <div className='fksopkopwoqwa' style={{width: 632, height: "auto" }}>
        <div style={{fontWeight: 600,}}>{props.title}</div>
      </div>
      <br />

      <div style={{color: "#ffa500", fontWeight: 600, fontSize: 14}}>
        Tên không dấu (Đệm Tên Họ, VD: Thi Ngoc Anh Nguyen)
      </div>
      <br />
      <div>
        <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
          Danh xưng
        </div>
        <div>
          <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, nickname: e.target.value}))} type="text" style={{width: 198, height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
          {
              user.nickname?.length<=0 && <div style={{color: "red", fontSize: 14}}>Enter nick  name</div>
            }
        </div>
      </div>
      <br />
      <div style={{width: "100%", display: 'flex', flexDirection: 'row', flexWrap: "wrap",gap: 10, justifyContent: "space-between", background: "#fff"}}>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Họ (vd: Nguyen)
          </div>
          <div style={{width: "100%"}}>
            <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, name: e.target.value}))} type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
            {
              user.name?.length<=0 && <div style={{color: "red", fontSize: 14}}>Enter surname</div>
            }
            <div style={{fontSize: 12, color: "#3a3b3c"}}>như trên CMND (không dấu)</div>
          </div>
        </div>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Tên đệm và tên (vd: Thi Ngoc Anh)
          </div>
          <div style={{width: "100%"}}>
            <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, surname: e.target.value}))} type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
            {
              user.surname?.length<=0 && <div style={{color: "red", fontSize: 14}}>Enter name</div>
            }
            <div style={{fontSize: 12, color: "#3a3b3c"}}>như trên CMND (không dấu)</div>
          </div>
        </div>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Ngày sinh
          </div>
          <div style={{width: "100%"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", boxSizing: "border-box", gap: 10}}>
              <div style={{flex: "1 1 0"}}>
                <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, date_birth: parseInt(e.target.value)}))} type="number" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
                {
                  user.date_birth <=0 && <div style={{color: "red", fontSize: 14, whiteSpace: "nowrap"}}>Enter date of birth</div>
                }
              </div>
              <div style={{flex: "2 1 0"}}>
                <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, month_birth: parseInt(e.target.value)}))} type="number" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
                {
                  user.month_birth <=0 && <div style={{color: "red", fontSize: 14, whiteSpace: "nowrap"}}>Enter month of birth</div>
                }
              </div>
              <div style={{flex: "1 1 0"}}>
                <input onBlur={()=> handleBlur()} onChange={(e)=> setuser(prev=> ({...prev, year_birth: parseInt(e.target.value)}))} type="number" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
                {
                  user.year_birth <=0 && <div style={{color: "red", fontSize: 14, whiteSpace: "nowrap"}}>Enter year of birth</div>
                }
              </div>
            </div>
            <div style={{fontSize: 12, color: "#3a3b3c"}}>Hành khách người lớn (trên 12 tuổi)</div>
          </div>
        </div>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Quốc tịch
          </div>
          <div style={{width: "100%"}}>
            <input onChange={(e)=> {setuser(prev=> ({...prev, nationality: e.target.value}))}} onBlur={()=> {props.setalluser(prev=> ([...prev,user]));handleBlur()}} type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
            {
              user.nationality?.length<=0 && <div style={{color: "red", fontSize: 14}}>Enter nationality</div>
            }
            <div style={{fontSize: 12, color: "#3a3b3c"}}>Ví dụ: Việt Nam</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCustomer