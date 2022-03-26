import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD5BaVU05jf0kKQ2P0mTFVuf0Ol_hDYoiA",
  authDomain: "react-firebase-auth-77c2f.firebaseapp.com",
  projectId: "react-firebase-auth-77c2f",
  storageBucket: "react-firebase-auth-77c2f.appspot.com",
  messagingSenderId: "968187479032",
  appId: "1:968187479032:web:60af3d270dc96855900c0d"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)