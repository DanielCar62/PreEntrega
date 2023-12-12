import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcAlcP8hxba3TdXmBKWHwgPOD1CdRdBaA",
  authDomain: "e-commerce-bb532.firebaseapp.com",
  projectId: "e-commerce-bb532",
  storageBucket: "e-commerce-bb532.appspot.com",
  messagingSenderId: "995405577039",
  appId: "1:995405577039:web:322c4231570c350934a33a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
