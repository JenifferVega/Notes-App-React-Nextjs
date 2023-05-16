import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2EfBm57NTALixYIzzigXqgRyhBDqbLSk",
  authDomain: "notes-app-e3514.firebaseapp.com",
  projectId: "notes-app-e3514",
  storageBucket: "notes-app-e3514.appspot.com",
  messagingSenderId: "412693574341",
  appId: "1:412693574341:web:a47336cb29fbd765cf36ac",
  measurementId: "G-QB0VXSFMJZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);