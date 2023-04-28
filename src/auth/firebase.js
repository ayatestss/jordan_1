// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0hRrAj70bXNU1FC_99600jXynzPuID6E",
  authDomain: "sneaker-society.firebaseapp.com",
  projectId: "sneaker-society",
  storageBucket: "sneaker-society.appspot.com",
  messagingSenderId: "903067817008",
  appId: "1:903067817008:web:bb5820d0929c1c14ca89f5",
  measurementId: "G-SDCCHFGQRE",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
