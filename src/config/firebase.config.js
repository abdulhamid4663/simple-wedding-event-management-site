import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2K0oZpL2bhtAgEIvWsqyQEiPdB43IQbE",
  authDomain: "happy-weddies-auth.firebaseapp.com",
  projectId: "happy-weddies-auth",
  storageBucket: "happy-weddies-auth.appspot.com",
  messagingSenderId: "585521395748",
  appId: "1:585521395748:web:3ff2b96e9d45d889e880b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;