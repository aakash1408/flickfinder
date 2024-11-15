// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHLpbI8K30YWLfYNvJgZEm6XFFqyalNs",
  authDomain: "flickfinder-c94ad.firebaseapp.com",
  projectId: "flickfinder-c94ad",
  storageBucket: "flickfinder-c94ad.firebasestorage.app",
  messagingSenderId: "24808951915",
  appId: "1:24808951915:web:b1c3fbdb6dc539647a612e",
  measurementId: "G-EC8MBFP805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();