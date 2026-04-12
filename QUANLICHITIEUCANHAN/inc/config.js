import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpN5SkxiTCPfM9oHoPdDNdc_Hx88hnLN0",
  authDomain: "quanlitaichinhcanhan-0305.firebaseapp.com",
  projectId: "quanlitaichinhcanhan-0305",
  storageBucket: "quanlitaichinhcanhan-0305.firebasestorage.app",
  messagingSenderId: "684612315364",
  appId: "1:684612315364:web:5482905430961e3e7ea4f1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();