// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3fUq0RFKyTnOEPoWWUzSen5S1hR7l6GI",
  authDomain: "b2b-market-21df9.firebaseapp.com",
  projectId: "b2b-market-21df9",
  storageBucket: "b2b-market-21df9.firebasestorage.app",
  messagingSenderId: "585282739367",
  appId: "1:585282739367:web:a6e874e615fa28f27a8f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)