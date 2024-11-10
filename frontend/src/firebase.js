// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration from environment variables
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkrT-h8YjQktV16dFuxFsmi7N7RWRQlVI",
    authDomain: "hero-83c57.firebaseapp.com",
    projectId: "hero-83c57",
    storageBucket: "hero-83c57.firebasestorage.app",
    messagingSenderId: "1070710550771",
    appId: "1:1070710550771:web:5fd9d365f792a4d957c786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Auth and Firestore instances for use in other parts of the app
export const auth = getAuth(app);
export const db = getFirestore(app);
