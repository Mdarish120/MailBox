import React, { useEffect } from 'react';
import Header from './Component/Header/Haeder';
import Sidebar from './Component/Sidebar/Sidebar';
import Email from './Component/Email/Email';
import Compose from './Component/Compose/Compose';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import EmailDetail  from "./Component/Email/EmailDetial";
import Login from './Component/Auth/Login';
import {selectUser, signin, signout} from "./features/userSlice";
import Sender from './Component/Email/Sender';
import { onAuthStateChanged } from 'firebase/auth';
import {auth } from "./firebase";
import Home from './Component/Email/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const isMessageOpen=useSelector(selectSendMessageIsOpen);

  const user=useSelector(selectUser);
const dispatch=useDispatch();

  useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
    if(user){
       dispatch(signin({
        displayName:user.displayName,
        photoURL:user.photoURL,
        email:user.email
       }));
    }else{
      dispatch(signout());
    }
   })

  },[]);

  return (
   <>
   <ToastContainer/>
    <Router>
    
    {user ?(
      <>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mail' element={<EmailDetail />} />
          <Route path='/sender'  element={<Sender/>} />
          <Route path='/inbox'  element={<Email/>} />
        </Routes>
      </div>
      {isMessageOpen && <Compose />}
      </>
    ):(<Login/>)}

      
    </Router>
    
 
 
   </>
     
  );
}

export default App;
