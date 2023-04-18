// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBQso6rOAsSEfHBV25aakDKku2hgE1AoY",
  authDomain: "auth-emajhon-firebase.firebaseapp.com",
  projectId: "auth-emajhon-firebase",
  storageBucket: "auth-emajhon-firebase.appspot.com",
  messagingSenderId: "243051438930",
  appId: "1:243051438930:web:f852175c2b50446101108b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;