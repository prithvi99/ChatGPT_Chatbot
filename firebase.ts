// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEL7iuY5Lfowod_FJ0_Wr41SQdANV5ymg",
  authDomain: "chatgpt-clone-cc2c7.firebaseapp.com",
  projectId: "chatgpt-clone-cc2c7",
  storageBucket: "chatgpt-clone-cc2c7.appspot.com",
  messagingSenderId: "350439106714",
  appId: "1:350439106714:web:33f11252a767dfe546d723"
};

// Initialize Firebase
const app = getApps().length? getApp(): initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}