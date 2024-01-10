import React from 'react';
import style from "./style.module.css";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailType = () => {
  return (
    <div className={style.emailType}> 
    <div  className={style.emailOption}>
    <InboxIcon/>
    <p>Primary</p>
    </div>
    <div  className={style.emailOption}>
    <PeopleIcon/>
    <p>Social</p>

    </div>
    <div  className={style.emailOption}>
    <LocalOfferIcon/>
    <p>Promotion</p>

    </div>
    </div>
  )
}

export default EmailType