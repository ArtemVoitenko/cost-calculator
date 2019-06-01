import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAxT3zizxtTPrD3Srw1VeLH1_WdBYbLX98",
  authDomain: "diplomaproject-ee019.firebaseapp.com",
  databaseURL: "https://diplomaproject-ee019.firebaseio.com",
  projectId: "diplomaproject-ee019",
  storageBucket: "diplomaproject-ee019.appspot.com",
  messagingSenderId: "23167646503",
  appId: "1:23167646503:web:15bbfa1c98d8eb7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();
const auth = firebase.auth();
export { storage, database, firebase as default };
