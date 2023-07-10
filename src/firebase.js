import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "schedule-me-45ad5.firebaseapp.com",
  projectId: "schedule-me-45ad5",
  storageBucket: "schedule-me-45ad5.appspot.com",
  messagingSenderId: "677619563906",
  appId: "1:677619563906:web:491f296352932d471ce39b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, signOut, createUserWithEmailAndPassword };
