import React from 'react';
import style from "./style.module.css";



const SidebarOption = ({Icon,title, handleInbox }) => {
  return (
<div className={`${style.sidebarOption}`}  onClick={handleInbox}>
     <Icon/>
    <h4>{title}</h4>
   
   </div>
  )
}

export default SidebarOption