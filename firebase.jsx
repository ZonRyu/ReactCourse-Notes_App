// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4O6uLo5yMGEUd_KC0xFGP87rlYP4diKo",
  authDomain: "react-notes-a1686.firebaseapp.com",
  projectId: "react-notes-a1686",
  storageBucket: "react-notes-a1686.appspot.com",
  messagingSenderId: "251455393645",
  appId: "1:251455393645:web:aa7d019b1d3e4e6f2d5464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");