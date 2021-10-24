// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiAAe0Da7sYPn5Z994yZ9iJKCn_C5DeU",
  authDomain: "twinflame-d027f.firebaseapp.com",
  projectId: "twinflame-d027f",
  storageBucket: "twinflame-d027f.appspot.com",
  messagingSenderId: "836370902587",
  appId: "1:836370902587:web:46ebb81f61c2fa9771b61e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authenticaton
export const auth = getAuth();

export const signInWithEmail = (email, password) => {
return  signInWithEmailAndPassword(auth, email, password)
    .then((res) => ({success: true, user: res.user.uid}))
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disable":
        case "auth/user-not-found":
          console.log(err.message);
         return {success: false};
        case "auth/wrong-password":
          console.log(err.message);
        return {success: false}
      }
    });
};

export const signUpWithEmail = (email, password) => {
return  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => ({success: true, user: res.user.uid}))
    .catch((err) =>{
      switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disable':
        case 'auth/user-not-found':
        console.log(err.message);
       return {success: false}
        case 'auth/wrong-password':
         console.log(err.message);
         return  {success: false}
      }

    });
};
