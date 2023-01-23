import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCZnnYmpMOxZDDPLX0Notzl5QICKNptU6I",
  authDomain: "beauty-salon-6f4ac.firebaseapp.com",
  projectId: "beauty-salon-6f4ac",
  storageBucket: "beauty-salon-6f4ac.appspot.com",
  messagingSenderId: "1049639023536",
  appId: "1:1049639023536:web:38477529923dfd901b5c75",
  measurementId: "G-76K46C1X1T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
