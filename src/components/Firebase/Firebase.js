// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWyVOc999k5tIsSkyfspQQCGgTcg-0dtQ",
  authDomain: "filmmovie-b6dfb.firebaseapp.com",
  projectId: "filmmovie-b6dfb",
  storageBucket: "filmmovie-b6dfb.appspot.com",
  messagingSenderId: "206994626106",
  appId: "1:206994626106:web:209d5decbae7b829f14703",
  measurementId: "G-FCXCT8H5EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
