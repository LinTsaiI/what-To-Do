import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFxKBVcj0DxGcf1y7TvDhh70KAPTNOyNM",
  authDomain: "what-to-do-tw.firebaseapp.com",
  projectId: "what-to-do-tw",
  storageBucket: "what-to-do-tw.appspot.com",
  messagingSenderId: "1078259918689",
  appId: "1:1078259918689:web:22b91be553ed6ec9c54720"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);