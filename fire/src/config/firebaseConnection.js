import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
   /*FAÇA A SUBSTITUIÇÃO PELA SUA CONFIGURAÇÃO*/
   apiKey: "AIzaSyBxzmf2ldbBx6ywDbEh6SF9L-cyGKy42BM",
  authDomain: "auth00-130b0.firebaseapp.com",
  projectId: "auth00-130b0",
  storageBucket: "auth00-130b0.appspot.com",
  messagingSenderId: "121958340167",
  appId: "1:121958340167:web:cd58a5cfd415e94cd78362",
  measurementId: "G-29G2SH54MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export default db

