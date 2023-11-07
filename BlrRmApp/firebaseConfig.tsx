import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const auth = initializeAuth(FIREBASE_APP);
export const storage = getStorage(FIREBASE_APP);