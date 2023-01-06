// import * as firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIuX2HpsBOC7O6-JldU-lRNBWGKF0OcYU",
  authDomain: "maggi-album.firebaseapp.com",
  projectId: "maggi-album",
  storageBucket: "maggi-album.appspot.com",
  messagingSenderId: "70388817307",
  appId: "1:70388817307:web:34d2f3a442061de1aa953e",
  measurementId: "G-V23JLQZF4Y"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const projectStorage = getStorage(firebaseApp);
firebase.initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore };