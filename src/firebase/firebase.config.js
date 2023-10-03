// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAydy014cnGmA3G-DHmU7N8AXdH53YO_Mc",
  authDomain: "dragon-news-auth-e8e73.firebaseapp.com",
  projectId: "dragon-news-auth-e8e73",
  storageBucket: "dragon-news-auth-e8e73.appspot.com",
  messagingSenderId: "311582379672",
  appId: "1:311582379672:web:0fa2d1f0e32f92acf94aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;