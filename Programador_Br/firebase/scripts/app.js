
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33nzNSyc_xOnttMpWaSYCoDdAnQI61oY",
  authDomain: "teste-d77ad.firebaseapp.com",
  databaseURL: "https://teste-d77ad-default-rtdb.firebaseio.com",
  projectId: "teste-d77ad",
  storageBucket: "teste-d77ad.appspot.com",
  messagingSenderId: "1050117963153",
  appId: "1:1050117963153:web:92fef52478750360ae2e30",
  measurementId: "G-69NE18ELHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);