import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAgROKOsZuQD8JvbLFyu0K5PhLjyf1TWa0",
  authDomain: "store-5067d.firebaseapp.com",
  projectId: "store-5067d",
  storageBucket: "store-5067d.appspot.com",
  messagingSenderId: "43030515564",
  appId: "1:43030515564:web:9e236cede3b9f71b9ced49",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
