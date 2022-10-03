// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //este es un método que traemos de firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkge7NxJJ_brZTf_BlO9Xg8IX10QYzYzs",
  authDomain: "e-commerce-react-js-code-2b6e8.firebaseapp.com",
  projectId: "e-commerce-react-js-code-2b6e8",
  storageBucket: "e-commerce-react-js-code-2b6e8.appspot.com",
  messagingSenderId: "792118705138",
  appId: "1:792118705138:web:782efc0b18b02fe3f8896b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos que estamos creando, la exportamos para poder utilizarla
export const db = getFirestore(app); 