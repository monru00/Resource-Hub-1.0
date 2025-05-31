import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase config from the console
const firebaseConfig = {
  apiKey: "AIzaSyDHAjezo2JfZd693tIJ7Tn4CphjMJ1GebU",
  authDomain: "resource-hub-feedback.firebaseapp.com",
  projectId: "resource-hub-feedback",
  storageBucket: "resource-hub-feedback.firebasestorage.app",
  messagingSenderId: "150740346076",
  appId: "1:150740346076:web:181491e74db4b07b83c019",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
