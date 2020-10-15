import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyArDBen6AYnEbD-WiT4wnufYvEO0iJnhOA",
  authDomain: "todo-app-with-hooks-5e978.firebaseapp.com",
  databaseURL: "https://todo-app-with-hooks-5e978.firebaseio.com",
  projectId: "todo-app-with-hooks-5e978",
  storageBucket: "todo-app-with-hooks-5e978.appspot.com",
  messagingSenderId: "256675846968",
  appId: "1:256675846968:web:0aa3e293fdb5e871fb3fcd",
  measurementId: "G-PYBEHTJTHG"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
