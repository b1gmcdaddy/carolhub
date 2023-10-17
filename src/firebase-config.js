// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2umMUJWODyi9zdotuPLdpAKjQD3stdZw",
  authDomain: "carol-hub.firebaseapp.com",
  projectId: "carol-hub",
  storageBucket: "carol-hub.appspot.com",
  messagingSenderId: "968811106145",
  appId: "1:968811106145:web:a0dff566515937b31bff20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
