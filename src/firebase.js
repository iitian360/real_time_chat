import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPBnw8I8z2yGSet8PexCyNM4X-Tu4jgPI",
  authDomain: "chatapp-7e272.firebaseapp.com",
  projectId: "chatapp-7e272",
  storageBucket: "chatapp-7e272.appspot.com",
  messagingSenderId: "1795650438",
  appId: "1:1795650438:web:7c19a27734278040f0f207"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
