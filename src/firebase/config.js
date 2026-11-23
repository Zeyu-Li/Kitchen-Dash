import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0oWk71A-urAa8x6xeTb7CY4KUOEVr_pk",
  authDomain: "kitchen-dash2.firebaseapp.com",
  projectId: "kitchen-dash2",
  storageBucket: "kitchen-dash2.appspot.com",
  messagingSenderId: "153120476509",
  appId: "1:153120476509:web:3f23bc3fca0b6292f36cb4",
  measurementId: "G-LW71M69PTW",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
