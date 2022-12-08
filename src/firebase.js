import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
        apiKey: "AIzaSyAZy9WmfqJ5f1nGLTrHFGWjjt34J7m369A",
        authDomain: "quincyjcwd2302.firebaseapp.com",
        projectId: "quincyjcwd2302",
        storageBucket: "quincyjcwd2302.appspot.com",
        messagingSenderId: "328688666782",
        appId: "1:328688666782:web:b2582fcc6675c43310538f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);