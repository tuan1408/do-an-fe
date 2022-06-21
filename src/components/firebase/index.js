// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59MDmNpHcNJQ5VS-tpBI4tVEE-0fwpkc",
  authDomain: "ticket-51aa0.firebaseapp.com",
  projectId: "ticket-51aa0",
  storageBucket: "ticket-51aa0.appspot.com",
  messagingSenderId: "243356008530",
  appId: "1:243356008530:web:243862882e0171fe52df8b",
  measurementId: "G-13DV25C6NJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app
export const analytics = getAnalytics(app);