// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-1625307199-b879a",
  "appId": "1:170470137867:web:5890967e69fe6df82b270e",
  "apiKey": "AIzaSyC_lU2UBZc-dG36Eikl6w3EbOTzS6vBS5E",
  "authDomain": "studio-1625307199-b879a.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "170470137867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
