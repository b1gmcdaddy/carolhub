// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaAK3lovct0GAu7wS4N4hqBhyJbrNTH1E",
  authDomain: "carol-95a3d.firebaseapp.com",
  projectId: "carol-95a3d",
  storageBucket: "carol-95a3d.appspot.com",
  messagingSenderId: "999987586873",
  appId: "1:999987586873:web:b6de16b0f609cd56242ae8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
