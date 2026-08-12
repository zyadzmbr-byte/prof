// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaIzRU76b3xPwy-1JHP0kJKSU0gTWARj0",
  authDomain: "professor-70ba8.firebaseapp.com",
  projectId: "professor-70ba8",
  storageBucket: "professor-70ba8.firebasestorage.app",
  messagingSenderId: "614355806617",
  appId: "1:614355806617:web:60c84022e869bc82ab0b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
