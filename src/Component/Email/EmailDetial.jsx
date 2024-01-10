import React from 'react'
import EmailSettting from './EmailSettting';
import style from "./style.module.css";
import { Avatar, IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail } from '../../features/mailSlice';

const EmailDetial = () => {
   
  const navigate =useNavigate()

  const mail=useSelector(selectedMail);

  return (
    <>
    <div className={style.details}>
      <IconButton style={{marginBottom:"1rem"}} onClick={()=>navigate("/")}>
       <KeyboardBackspaceIcon/>
      </IconButton>
     <h2>{mail?.subject}</h2>
     <div className={style.details__header}>
     <div className={style.details__headerleft}>
       <div style={{ display:'flex',justifyContent:"center",alignItems:"center",gap:"0.5rem"}}>
     <Avatar src='' />
     <h3>{mail?.name}</h3>
     <p>{mail?.email}</p>
  
       </div>
       <h3 style={{ marginLeft: "3rem" ,color:'gray'}}>{mail?.to ? `to ${mail?.to}` : "to me"}</h3>

     </div>
     <div className={style.details__headerright}>
  <p>{mail?.time}</p>
</div>
     </div>
     <div className={style.details__body}>
     {mail?.message}
     </div>
    </div>
    </>
  )
}

export default EmailDetial