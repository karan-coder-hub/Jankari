import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfRRBZ8qIXEesKtXqQP8rjwWK_iGyF9U4",
    authDomain: "karan-portfolio-85fc7.firebaseapp.com",
    projectId: "karan-portfolio-85fc7",
    storageBucket: "karan-portfolio-85fc7.appspot.com",
    messagingSenderId: "522021163935",
    appId: "1:522021163935:web:9c1bb5e979b2932b4063aa"
};


// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };