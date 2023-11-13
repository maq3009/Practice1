import { initializeApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



//My Database Configuration

const firebaseConfig = {
    apiKey: "AIzaSyAXEiFKMvRXjhSnT1ceawbEn2vVhxvRmk8",
    authDomain: "boilerinventory.firebaseapp.com",
    projectId: "boilerinventory",
    storageBucket: "boilerinventory.appspot.com",
    messagingSenderId: "626595907158",
    appId: "1:626595907158:web:bf171964e091741ca45df7",
    measurementId: "G-NDJMQFYQ80"
};




// initialize Firebase

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

const auth = initializeAuth(firebaseApp)



// Export necessary modules
export const FIREBASE_APP = firebaseApp;
export const FIRESTORE_DB = firestore;
export const FIREBASE_AUTH = auth;
export const storage = getStorage(firebaseApp);