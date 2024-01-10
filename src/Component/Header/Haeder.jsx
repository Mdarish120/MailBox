import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton,Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "./style.module.css";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signout } from '../../features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const user=useSelector(selectUser);


  const navigate=useNavigate();
  const dispatach=useDispatch();
  console.log(user?.photoURL)
  const handleLogout=()=>{
    
    dispatach(signout());
    navigate("/");
  }
  return (

   <div className={style.header}> 
   <div className={style.header_left}>

 <img src='./mail.png' width="40px"  height="40px "  onClick={()=>navigate("/")}  style={{cursor:"pointer",marginLeft:"2rem"}}/>
   </div>
   <div className={style.header_middle}>
  

   </div>
   <div className={style.header_right}>
 
        <IconButton style={{marginRight:"2rem"}} onClick={handleLogout}>
          <LogoutIcon/>
        </IconButton>
        <Avatar src={user?.photoURL} >

        </Avatar>
   </div>
   </div>
  )
}

export default Header