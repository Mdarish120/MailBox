import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openMessage, senderMail } from '../../features/mailSlice';
import SenderContent from './SenderContent';

const Sender = () => {
  
  const [sender,setSender]=useState([]);
  const navigate=useNavigate();
 const dispatch =useDispatch()
 const emails=useSelector(senderMail);
 useEffect(()=>{

  setSender(...emails);
 },[])

 

  console.log(sender)

  return (

    <div>
      {sender?.map(({ id, data }) => (
       <SenderContent  id={id} data={data}/>
      ))}
    </div>
   
  )

}

export default Sender;