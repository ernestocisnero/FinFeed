
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkix4Ya5Fw_kKzg5F2AcsJzwKK5cvouLU",
    authDomain: "finfeed-64151.firebaseapp.com",
    projectId: "finfeed-64151",
    storageBucket: "finfeed-64151.appspot.com",
    messagingSenderId: "902222110025",
    appId: "1:902222110025:web:e80604c06509093cb14e98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const facebookProvider = new FacebookAuthProvider();