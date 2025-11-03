// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfTGXMk9ine96N9sGHFJ2fHOxVTa6cvD4",
  authDomain: "minglee-95f07.firebaseapp.com",
  projectId: "minglee-95f07",
  storageBucket: "minglee-95f07.firebasestorage.app",
  messagingSenderId: "482539110477",
  appId: "1:482539110477:web:708376516c3cdfc2f51c04",
  measurementId: "G-M0ELDHDST1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();