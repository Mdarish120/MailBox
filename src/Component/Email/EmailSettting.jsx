import React from 'react';
import style from "./style.module.css";
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const EmailSettting = () => {
  return (
    <div className={style.email_setting}>
        <div className={style.email_setting_left}>
       <IconButton>
        <CheckBoxOutlineBlankOutlinedIcon/>
       </IconButton>
       <IconButton>
        <ArrowDropDownIcon/>
       </IconButton>
       <IconButton>
        <RefreshIcon/>
       </IconButton>
       <IconButton>
        <MoreVertIcon/>
       </IconButton>
        </div>
        <div className={style.email_setting_right}>
        <p>1-50 of 10,22</p>
        <IconButton>
        <ChevronLeftIcon/>
       </IconButton>
       <IconButton>
        <ChevronRightIcon/>
       </IconButton>
        </div>
        
        </div>
  )
}

export default EmailSettting