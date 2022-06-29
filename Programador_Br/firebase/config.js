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
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = app.auth()
