// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALe4XtDeaa9FHgFbriDrj2uUlQKJfvLPo",
  authDomain: "instantchat-7df60.firebaseapp.com",
  projectId: "instantchat-7df60",
  storageBucket: "instantchat-7df60.appspot.com",
  messagingSenderId: "233469879211",
  appId: "1:233469879211:web:b55ad065a5d2aac95e28ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);