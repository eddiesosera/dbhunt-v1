// firebaseConfig.js
import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration with environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_FIREBASE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
auth.setPersistence(getReactNativePersistence(ReactNativeAsyncStorage));
