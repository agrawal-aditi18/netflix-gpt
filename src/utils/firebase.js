// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdwThDHfhhTkQXq_oJMC4AkCp_NBK-7ZA",
  authDomain: "netflixgpt-805e6.firebaseapp.com",
  projectId: "netflixgpt-805e6",
  storageBucket: "netflixgpt-805e6.firebasestorage.app",
  messagingSenderId: "392733447286",
  appId: "1:392733447286:web:93cc94797b3203c10ebb57",
  measurementId: "G-52MK15PQ2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);