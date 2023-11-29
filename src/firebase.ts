import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4m8bkMEC-qvXbPtt9dl6Eugq7lGCPdxE",
  authDomain: "nwitter-reloaded-f05f6.firebaseapp.com",
  projectId: "nwitter-reloaded-f05f6",
  storageBucket: "nwitter-reloaded-f05f6.appspot.com",
  messagingSenderId: "529905550308",
  appId: "1:529905550308:web:9502b8534acc30c7147df1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
