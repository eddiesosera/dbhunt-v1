import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web App's Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyACO67fP1fkY1mFzT2vJgw4CrqoYeCD6Sw",
    authDomain: "class-work-9cbca.firebaseapp.com",
    projectId: "class-work-9cbca",
    storageBucket: "class-work-9cbca.appspot.com",
    messagingSenderId: "739558401618",
    appId: "1:739558401618:web:42e1a44180239d35bb618b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const config = getAuth(app);
export const db = getFirestore(app);