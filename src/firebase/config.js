import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0oWk71A-urAa8x6xeTb7CY4KUOEVr_pk",
  authDomain: "kitchen-dash2.firebaseapp.com",
  projectId: "kitchen-dash2",
  storageBucket: "kitchen-dash2.appspot.com",
  messagingSenderId: "153120476509",
  appId: "1:153120476509:web:3f23bc3fca0b6292f36cb4",
  measurementId: "G-LW71M69PTW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { firebase, db };
