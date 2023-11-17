import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDH5Wdmsj1AQ0snUvdn43KlnkM1DoQRZKY",
  authDomain: "full-stack-application-a5179.firebaseapp.com",
  projectId: "full-stack-application-a5179",
  storageBucket: "full-stack-application-a5179.appspot.com",
  messagingSenderId: "1056748222878",
  appId: "1:1056748222878:web:06563076e80ce97bc57e8f",
  measurementId: "G-P1ZT6XT9H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
