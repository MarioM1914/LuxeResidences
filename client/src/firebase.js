import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "luxeresidences-487c2.firebaseapp.com",
  projectId: "luxeresidences-487c2",
  storageBucket: "luxeresidences-487c2.appspot.com",
  messagingSenderId: "741913337831",
  appId: "1:741913337831:web:cd4ba86ed37acff5736742",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
