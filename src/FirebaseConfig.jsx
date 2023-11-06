
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyDAr5Dd9zzQ7zOUXwV1JOWqM5_zpg-K4xc",
  authDomain: "social-media-ea901.firebaseapp.com",
  projectId: "social-media-ea901",
  storageBucket: "social-media-ea901.appspot.com",
  messagingSenderId: "173893260354",
  appId: "1:173893260354:web:1c9864eb101e8dd96a09db",
  measurementId: "G-43M6QV52RC"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);