// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: "mern-blog-a40a3.firebaseapp.com",
  projectId: "mern-blog-a40a3",
  storageBucket: "mern-blog-a40a3.appspot.com",
  messagingSenderId: "604092844328",
  appId: "1:604092844328:web:22a12c44f944f58633281d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
