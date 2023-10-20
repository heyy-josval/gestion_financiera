// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByK-9yizLXqQWdeeiXVuG9hdGR6-Es5So",
  authDomain: "gestion-financiera-cb8a4.firebaseapp.com",
  projectId: "gestion-financiera-cb8a4",
  storageBucket: "gestion-financiera-cb8a4.appspot.com",
  messagingSenderId: "42609076534",
  appId: "1:42609076534:web:b0b197e85227b9858c2b97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
