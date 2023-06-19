import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdqnAzagoljGQMQ_WMePTbdHhrnb3bAOw",
  authDomain: "bardeen-ee7a0.firebaseapp.com",
  projectId: "bardeen-ee7a0",
  storageBucket: "bardeen-ee7a0.appspot.com",
  messagingSenderId: "149869885064",
  appId: "1:149869885064:web:5c328c0430480a1540113d",
  measurementId: "G-DZ45TWR0M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
