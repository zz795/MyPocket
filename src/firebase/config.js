import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApRBWvSiT2SYVnnp-HU3UoQpsHltuc-Ek",
  authDomain: "mypocket-5d89f.firebaseapp.com",
  projectId: "mypocket-5d89f",
  storageBucket: "mypocket-5d89f.appspot.com",
  messagingSenderId: "535580541011",
  appId: "1:535580541011:web:3522799c6bae84878d06a6",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
