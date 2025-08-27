
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8gw33wf_lpxkH6PrhdQRNyUKYVr9nK-w",
  authDomain: "interview-buddy-2f913.firebaseapp.com",
  projectId: "interview-buddy-2f913",
  storageBucket: "interview-buddy-2f913.firebasestorage.app",
  messagingSenderId: "910437519139",
  appId: "1:910437519139:web:b84844ec2ca3dc3952c696",
  measurementId: "G-W368F8Y9Z9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)