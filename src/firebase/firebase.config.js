// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBnEQmA4cFwaCKoperPTKBUdwDa3v0qbc",
  authDomain: "coffee-store-2f608.firebaseapp.com",
  projectId: "coffee-store-2f608",
  storageBucket: "coffee-store-2f608.firebasestorage.app",
  messagingSenderId: "461848472662",
  appId: "1:461848472662:web:a99f7cbfe0e07894b2dff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);