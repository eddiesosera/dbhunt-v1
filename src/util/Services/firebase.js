import { initializeApp, } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Web App's Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfhcVc9xasToGzVd4i47F74vSyK8f2ONw",
    authDomain: "dbhunt-cb5f7.firebaseapp.com",
    projectId: "dbhunt-cb5f7",
    storageBucket: "dbhunt-cb5f7.appspot.com",
    messagingSenderId: "775965483420",
    appId: "1:775965483420:web:7efcf3a730186ac4182859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
    // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const config = getAuth(app);
export const db = getFirestore(app);