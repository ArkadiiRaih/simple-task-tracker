import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDCixM-kC9VVwIDUIxITBsLBIpEyf_MpHg",
  authDomain: "task-tracker-a9cf7.firebaseapp.com",
  databaseURL: "https://task-tracker-a9cf7.firebaseio.com",
  projectId: "task-tracker-a9cf7",
  storageBucket: "task-tracker-a9cf7.appspot.com",
  messagingSenderId: "391605187417",
  appId: "1:391605187417:web:a5da3faf4007f4f38c1248"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
