import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrs-_vzEq4jNAKsmjh6u1qSnt0RIFrL0Q",
    authDomain: "crw-clothing-db-bdfae.firebaseapp.com",
    projectId: "crw-clothing-db-bdfae",
    storageBucket: "crw-clothing-db-bdfae.appspot.com",
    messagingSenderId: "1013682776241",
    appId: "1:1013682776241:web:dea82cc5a2b7f218bd9a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);