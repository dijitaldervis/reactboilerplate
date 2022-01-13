// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBznMPDpHdaCWYijPNB7F0q67FIXC4pVM4",
  authDomain: "auth-ornek.firebaseapp.com",
  projectId: "auth-ornek",
  storageBucket: "auth-ornek.appspot.com",
  messagingSenderId: "152964135700",
  appId: "1:152964135700:web:f05313a577d5e8582f6001",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const auth = firebase.auth();
const fireStore = firebase.firestore();
export { auth, fireStore };
