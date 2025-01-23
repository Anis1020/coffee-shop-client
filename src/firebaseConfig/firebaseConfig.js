// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcpbO9Nr7cF0lgPUjP7ySHjYfuhsuuUio",
  authDomain: "coffee-shop-c403b.firebaseapp.com",
  projectId: "coffee-shop-c403b",
  storageBucket: "coffee-shop-c403b.firebasestorage.app",
  messagingSenderId: "160052481903",
  appId: "1:160052481903:web:aa5d85ae759525a19f629a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
