
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyANlEmaquM6WXnReVKIwuJRUfqkjhhf79A",
  authDomain: "proyecto-caa60.firebaseapp.com",
  projectId: "proyecto-caa60",
  storageBucket: "proyecto-caa60.appspot.com",
  messagingSenderId: "690712724336",
  appId: "1:690712724336:web:49daa5fe13f8368d6b05b5"
};


 initializeApp(firebaseConfig);
 export const auth = getAuth();