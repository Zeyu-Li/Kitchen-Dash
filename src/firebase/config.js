import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbbdNwXhLKaDlmQIxoj6Rdx73wQiBPUuA",
  authDomain: "kitchen-dash-aa6d0.firebaseapp.com",
  projectId: "kitchen-dash-aa6d0",
  storageBucket: "kitchen-dash-aa6d0.appspot.com",
  messagingSenderId: "658044614185",
  appId: "1:658044614185:web:37b08c9f826f86a25f0e38",
  measurementId: "G-815CWVP49X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { firebase, db };

