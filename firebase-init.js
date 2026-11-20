// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlwzY51_8kLnWgiOmJdqfLiiPDZTsATCw",
  authDomain: "rasha-5a097.firebaseapp.com",
  projectId: "rasha-5a097",
  storageBucket: "rasha-5a097.firebasestorage.app",
  messagingSenderId: "104615031977",
  appId: "1:104615031977:web:671cd040f6fb2ddb5aa5b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
