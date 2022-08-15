import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT7OWNyf2MI9oJf5HYyJ_oc4gRgqG8Cjk",
  authDomain: "fir-86b68.firebaseapp.com",
  projectId: "fir-86b68",
  storageBucket: "fir-86b68.appspot.com",
  messagingSenderId: "687386106774",
  appId: "1:687386106774:web:063cd6dd169722fff79bb7",
  measurementId: "G-PYJHTVSQ04",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
