import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7RYFbufhwZvJlykZYWuPcqGkMLLGsAgU",
  authDomain: "crwn-db-a8b18.firebaseapp.com",
  databaseURL: "https://crwn-db-a8b18.firebaseio.com",
  projectId: "crwn-db-a8b18",
  storageBucket: "crwn-db-a8b18.appspot.com",
  messagingSenderId: "747300865049",
  appId: "1:747300865049:web:5a540a8b56d43248d0d688",
  measurementId: "G-4ZXRWM30L4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
