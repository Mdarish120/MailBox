import React from 'react';
import style from "./style.module.css";
import {signInWithPopup} from "firebase/auth";
import {auth ,provider} from "../../firebase";
import { useDispatch } from 'react-redux';
import { signin } from '../../features/userSlice';

const Login = () => {
  

  
  const dispatch =useDispatch();

  const login=()=>{
    signInWithPopup(auth,provider).then(({user})=>{
     
      dispatch(signin({
       displayName:user.displayName,
       photoURL:user.photoURL,
       email:user.email
 
      }))
      
   }).catch(err=>{
     alert(err);
   })
  }

  console.log("checking")
 
  return (
    <div className={style.loginWrapper}>
     <div  className={style.login}>
     <img src='./mail.png' width="200px" />
     <button className={style.gmail__login} onClick={login}>Login</button>
     </div>
    </div>
  )
}

export default Login