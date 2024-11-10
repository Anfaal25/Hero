const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "myapp-c6065.firebaseapp.com",
    projectId: "myapp-c6065",
    storageBucket: "myapp-c6065.firebasestorage.app",
    messagingSenderId: "597743777633",
    appId: "1:597743777633:web:84e54fad768339dadf7720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = { db, collection, addDoc, getDocs };