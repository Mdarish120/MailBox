import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
import EmailSettting from './EmailSettting';
import EmailType from './EmailType';
import EmailBody from './EmailBody';
import { db } from '../../firebase';
import { doc, onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { senderData } from '../../features/mailSlice';

const Email = () => {
  
  const [emails,setEmails]=useState([]);
const [inbox,setInbox]=useState([]);

  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{

  /*
    getDocs(query(collection(db, "email"),orderBy("timestamp","desc"))).then((querySnapshot) => {
      setEmails(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    }); 
     */

    const emailsCollection = collection(db, "email");
const emailsQuery = query(emailsCollection, orderBy("timestamp", "desc"));

onSnapshot(emailsQuery, (querySnapshot) => {
  setEmails(
    querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  );
});
  
    console.log(emails)
  },[]);

  useEffect(()=>{
    
    let sender=emails.filter((ele)=>ele.data.from==user.email);
let inbox=emails.filter((ele)=>ele.data.to==user.email);
dispatch(senderData(sender));
setInbox(inbox)
 
console.log(sender);
//console.log(inbox);
  },[emails])



  return (
    <div className={style.emailList}>
       

        {inbox?.map(({id,data})=>{
          return  <EmailBody  key={id} name={data.fromName} email={data.from} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
        })}

        </div>
      
  )
}

export default Email;