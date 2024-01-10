import React from 'react';
import style from "./style.module.css";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { openMessage, senderMail } from '../../features/mailSlice';
import { useNavigate } from 'react-router-dom';

const SenderContent = ({id,data}) => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleMessage=()=>{
    
        dispatch(openMessage({
         name:data.fromName,
         subject:data.subject,
         message:data.message,
         time:new Date(data.timestamp?.seconds*1000).toLocaleTimeString(),
         email:data.from,
         to:data.to
        }));
   
      navigate("/mail");
 
   }

  return (
    <div className={style.emailBody} key={id} onClick={handleMessage}> 
          <div className={style.emailBody__left}>
            <CheckBoxOutlineBlankOutlinedIcon />
            <StarBorderIcon />
            <LabelOutlinedIcon />
            <h4>{`To : ${data?.to}`}</h4>
          </div>

          <div className={style.emailBody__middle}>
            <div className={style.emailBody__middle__message}>
              <p>
                <b style={{ marginRight: '0.6rem' }}>{data?.subject}</b> <span></span>
                {data?.message}
              </p>
            </div>
          </div>

          <div className={style.emailBody__right}>
            <p>{new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}</p>
          </div>
        </div>
  )
}

export default SenderContent