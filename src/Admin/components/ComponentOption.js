import React from 'react'
import { NavLink } from 'react-router-dom'

const ComponentOption = (props) => {
  return (
    <NavLink state={{uid: "20KOBh5OMwZfIYQUggr625feyR53"}} className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={"/admin/manage/"+ props.type+"/"+ props.link} style={{color: "#000", textDecoration: "none"}}>
        <div style={{height: 60, fontSize: 18, fontWeight: 600, boxSizing: "border-box", display: "flex", alignItems: "center", cursor: "pointer", padding: "0 5px"}} className="dsoewwas">
          {props.text}
        </div>
    </NavLink>
  )
}

export default ComponentOption