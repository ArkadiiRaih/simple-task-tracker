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
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.doc(`/users/${user.uid}`);

  // Go and fetch the document for that location
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        boards: [],
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return getUserDocument(user.uid);
};
export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
