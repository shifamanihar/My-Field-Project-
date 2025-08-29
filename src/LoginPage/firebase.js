// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBox0Okg02cZ2WkmuuI_oZp-DtwtDK7wCI",
  authDomain: "ai-code-reviewer-e1201.firebaseapp.com",
  projectId: "ai-code-reviewer-e1201",
  storageBucket: "ai-code-reviewer-e1201.firebasestorage.app",
  messagingSenderId: "399578124062",
  appId: "1:399578124062:web:5c366bb7ccf66fc5c2430f",
  measurementId: "G-7Y77BQG8P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
