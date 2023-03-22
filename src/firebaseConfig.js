// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Am52HgfyVUFqrs4Ps-k1C_9G5-zU5fU",
  authDomain: "vue3-2023-8357d.firebaseapp.com",
  projectId: "vue3-2023-8357d",
  storageBucket: "vue3-2023-8357d.appspot.com",
  messagingSenderId: "720239062223",
  appId: "1:720239062223:web:e8173b55958772c0085bba",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore()

export { auth, db };
