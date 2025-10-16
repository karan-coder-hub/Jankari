import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfRRBZ8qIXEesKtXqQP8rjwWK_iGyF9U4",
  authDomain: "karan-portfolio-85fc7.firebaseapp.com",
  projectId: "karan-portfolio-85fc7",
  storageBucket: "karan-portfolio-85fc7.firebasestorage.app",
  messagingSenderId: "522021163935",
  appId: "1:522021163935:web:9c1bb5e979b2932b4063aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };