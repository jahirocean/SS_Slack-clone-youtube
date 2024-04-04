// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBETnzx1zUivB9QRjNr3xf9D-4vMUTKqUM",
  authDomain: "slack-clone-2c065.firebaseapp.com",
  projectId: "slack-clone-2c065",
  storageBucket: "slack-clone-2c065.appspot.com",
  messagingSenderId: "504627437111",
  appId: "1:504627437111:web:9c6ac27f92a750bb5ee9b2",
  measurementId: "G-Z6N76R9NG3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
