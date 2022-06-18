// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebase = require("firebase");
require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33nzNSyc_xOnttMpWaSYCoDdAnQI61oY",
  authDomain: "teste-d77ad.firebaseapp.com",
  projectId: "teste-d77ad",
  storageBucket: "teste-d77ad.appspot.com",
  messagingSenderId: "1050117963153",
  appId: "1:1050117963153:web:f331e48af2e2ddfcae2e30",
  measurementId: "G-DCGNBTBHY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase deploy
// firebase init
// firebase login