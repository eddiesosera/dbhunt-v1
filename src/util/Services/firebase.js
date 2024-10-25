import { initializeApp, } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Web App's Firebase Configuration
const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_FIREBASE_MESSANGING_SENDER_ID,
    appId: process.env.REACT_FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
    // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const config = getAuth(app);
export const db = getFirestore(app);
