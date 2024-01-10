import React from 'react'
import style from "./style.module.css";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handle=()=>{
   console.log("sendr")
  navigate("/sender")
  }


  const handleInbox=()=>{
    
    navigate("/inbox");
  }
  return (
    <div className={style.sidebar}>
        <Button startIcon={<AddIcon/>} className={style.sidebar_btn}  onClick={()=>dispatch(openSendMessage())}>
          Composes
        </Button>
        <SidebarOption Icon={InboxIcon} title="inbox"  handleInbox={handleInbox} />

       
        <div className={`${style.sidebarOption}`} onClick={handle}>
     <SendIcon />
    <h4>Send</h4>
   
   </div>
     

       
 
 
        </div>
  )
}

export default Sidebar