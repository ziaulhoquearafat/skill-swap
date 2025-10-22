// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAipceFRbZiEo8d-yFPQbQ8CZ9AkE1f28w",
  authDomain: "skillswap-543a5.firebaseapp.com",
  projectId: "skillswap-543a5",
  storageBucket: "skillswap-543a5.firebasestorage.app",
  messagingSenderId: "990396957747",
  appId: "1:990396957747:web:a9137c23fedb9e6271cf46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
