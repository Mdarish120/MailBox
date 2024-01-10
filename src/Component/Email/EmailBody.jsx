import React from 'react';
import style from "./style.module.css";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from '../../features/mailSlice';

const EmailBody = ({name,subject,message,time,email}) => {
  

  const navigate=useNavigate();
 const dispatch =useDispatch()
  const handleMessage=()=>{
    
       dispatch(openMessage({
        name,
        subject,
        message,
        time,
        email
       }));

       navigate("/mail");

  }


  return (
    <div className={style.emailBody} onClick={handleMessage}>
       <div className={style.emailBody__left}>
          <CheckBoxOutlineBlankOutlinedIcon/>
          <StarBorderIcon/>
          <LabelOutlinedIcon/>
          <h4>{name}</h4>
       </div>

       <div className={style.emailBody__middle}>
        <div className={style.emailBody__middle__message}>
       <p><b style={{marginRight:"0.6rem"}}>{subject}</b>{message}</p>
        </div>
        </div>
     <div className={style.emailBody__right}>
   <p>{time}</p>
       </div>
        </div>
  )

}

export default EmailBody