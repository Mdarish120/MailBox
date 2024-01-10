import React, { useState } from 'react';
import style from "./style.module.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import { collection, addDoc ,serverTimestamp} from "firebase/firestore"; 
import { selectUser } from '../../features/userSlice';
import {  toast } from 'react-toastify';




const Compose = () => {
  
  const [to,setTo]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");

  const dispatch=useDispatch();

    const user=useSelector(selectUser);
  const formSubmit=(e)=>{
    e.preventDefault();

    console.log(message);
    

    addDoc(collection(db, "email"), {
      to,
      subject,
      message,
      from:user.email,
      fromName:user.displayName,
      timestamp: serverTimestamp()
    })

   

    toast("email send successfully..")

    setMessage("");
    setTo("");
    setSubject("");
    dispatch(closeSendMessage())


  }
    
 

  
  return (
    <div className={style.compose}>

    <div  className={style.compose__header}>
    <div  className={style.compose__header__left}>
    <span>New Massage</span>
</div>
<div  className={style.compose__header__right}  onClick={()=>dispatch(closeSendMessage())}>
 <CloseOutlinedIcon/>
</div>
    </div>

  <form  onSubmit={formSubmit}>

 
    <div  className={style.compose__body}>
   <div className={style.compose__bodyForm}>
     <input type='email' placeholder='Reciepe'   value={to}  onChange={(e)=>setTo(e.target.value)} />
     <input type='text' placeholder='Subject'   value={subject}  onChange={(e)=>setSubject(e.target.value)}/>
     <textarea  rows="20"  value={message}  onChange={(e)=>setMessage(e.target.value)} />

     
   </div>
</div>
<div  className={style.compose__footer}>
<Button variant='contained'  type='submit'>Send</Button>
</div>
</form>
        </div>
  )
}

export default Compose