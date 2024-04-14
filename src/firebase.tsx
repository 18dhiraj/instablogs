// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKdCxft_EgtUpTRsTWy2bbvfCBOwSd92k",
    authDomain: "nextapp-97a0e.firebaseapp.com",
    projectId: "nextapp-97a0e",
    storageBucket: "nextapp-97a0e.appspot.com",
    messagingSenderId: "488521015834",
    appId: "1:488521015834:web:295342da23b66bbe82e7a3"
};

// Initialize Firebase
const app = () => initializeApp(firebaseConfig);

export default app