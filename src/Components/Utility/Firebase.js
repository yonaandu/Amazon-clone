// // Import the functions you need from the SDKs you need
// // import firebase from "firebase/compat/app"
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import "firebase/compat/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDTM-smZYZQ7tPPKSGH3mZj9ylSQaBdL7w",
//   authDomain: "clone-6d457.firebaseapp.com",
//   projectId: "clone-6d457",
//   storageBucket: "clone-6d457.appspot.com",
//   messagingSenderId: "649146285815",
//   appId: "1:649146285815:web:06fd7e28327aae2f171df2",
//   measurementId: "G-FGR87Y91ZT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = getFirestore(app);




// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTM-smZYZQ7tPPKSGH3mZj9ylSQaBdL7w",
  authDomain: "clone-6d457.firebaseapp.com",
  projectId: "clone-6d457",
  storageBucket: "clone-6d457.appspot.com",
  messagingSenderId: "649146285815",
  appId: "1:649146285815:web:06fd7e28327aae2f171df2",
  measurementId: "G-FGR87Y91ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
