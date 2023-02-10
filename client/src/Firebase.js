// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXj1YUF3FJHbhE6eVQIH9-jmTQE_0ITmM",
    authDomain: "projet-integrateur-10205.firebaseapp.com",
    projectId: "projet-integrateur-10205",
    storageBucket: "projet-integrateur-10205.appspot.com",
    messagingSenderId: "643469963414",
    appId: "1:643469963414:web:ed3cf22e2c9bf1ed0d12b7",
    measurementId: "G-5KV0YZ6B41"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);