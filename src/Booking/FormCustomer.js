import React from 'react'

const FormCustomer = (props) => {
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
          <input type="text" style={{width: 198, height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
        </div>
      </div>
      <br />
      <div style={{width: "100%", display: 'flex', flexDirection: 'row', flexWrap: "wrap",gap: 10, justifyContent: "space-between", background: "#fff"}}>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Họ (vd: Nguyen)
          </div>
          <div style={{width: "100%"}}>
            <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
            <div style={{fontSize: 12, color: "#3a3b3c"}}>như trên CMND (không dấu)</div>
          </div>
        </div>
        <div style={{width: "48%",}}>
          <div style={{color: "#000", fontWeight: 600, fontSize: 14, marginBottom: 8}}>
            Tên đệm và tên (vd: Thi Ngoc Anh)
          </div>
          <div style={{width: "100%"}}>
            <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
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
                <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
              </div>
              <div style={{flex: "2 1 0"}}>
                <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
              </div>
              <div style={{flex: "1 1 0"}}>
                <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
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
            <input type="text" style={{width: "100%", height: 40, borderRadius: 8, border: "1px solid #dfe1e2"}} />
            <div style={{fontSize: 12, color: "#3a3b3c"}}>Ví dụ: Việt Nam</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCustomer