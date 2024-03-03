// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbZIFCkM7-9FgvDYXkYpe4s_4sPXIsJko",
  authDomain: "chatty-b9935.firebaseapp.com",
  projectId: "chatty-b9935",
  storageBucket: "chatty-b9935.appspot.com",
  messagingSenderId: "392682856878",
  appId: "1:392682856878:web:9b414f174d26795c63a83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, app}