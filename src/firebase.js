import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyBHBIbGZwAfE1FLiTQN4V5Vc_KWz3lQkR0",
  authDomain: "mailbox-4096e.firebaseapp.com",
  projectId: "mailbox-4096e",
  storageBucket: "mailbox-4096e.appspot.com",
  messagingSenderId: "475195558367",
  appId: "1:475195558367:web:b633c4d6072d46cb411c6a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export { db,auth,provider };
