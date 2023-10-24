// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ3NDBkCY5H9UzqRbvZ99zhCdsBinXFWo",
  authDomain: "feedback-app-f098e.firebaseapp.com",
  projectId: "feedback-app-f098e",
  storageBucket: "feedback-app-f098e.appspot.com",
  messagingSenderId: "199947107535",
  appId: "1:199947107535:web:7f12105f61807f8aa84bba",
  measurementId: "G-8D98ZHKHMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { auth, db };
export default app;