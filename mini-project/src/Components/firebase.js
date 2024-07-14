// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRuNQzQC475oi4BfWAJjV4wzH1WHw07No",
  authDomain: "online-auction-be032.firebaseapp.com",
  projectId: "online-auction-be032",
  storageBucket: "online-auction-be032.appspot.com",
  messagingSenderId: "424480791313",
  appId: "1:424480791313:web:5d1eb4bf13280eba608ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app)

export default app;