// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-31275.firebaseapp.com",
  projectId: "blog-mern-31275",
  storageBucket: "blog-mern-31275.appspot.com",
  messagingSenderId: "337063726564",
  appId: "1:337063726564:web:423048391e46811e1b4bf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);