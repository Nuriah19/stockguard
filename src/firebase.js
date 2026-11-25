// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMHm_46dVSF_C-aWWIGxl4JwwJbXG_2M8",
  authDomain: "stock-guard-4ae39.firebaseapp.com",
  projectId: "stock-guard-4ae39",
  storageBucket: "stock-guard-4ae39.firebasestorage.app",
  messagingSenderId: "686605915291",
  appId: "1:686605915291:web:5068306d2473f8cae0e23e",
  measurementId: "G-V0BMNTB4S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);