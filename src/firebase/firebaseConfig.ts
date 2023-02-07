
import { initializeApp } from "firebase/app";

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