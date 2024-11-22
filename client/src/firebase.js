// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3e1ae.firebaseapp.com",
  projectId: "mern-blog-3e1ae",
  storageBucket: "mern-blog-3e1ae.firebasestorage.app",
  messagingSenderId: "191688045428",
  appId: "1:191688045428:web:54500bff14fef6ff153221"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);