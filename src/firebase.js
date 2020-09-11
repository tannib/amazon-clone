import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlcJZOjytD1TtzD8gUgECmFf_phSeMYNE",
  authDomain: "clone-16114.firebaseapp.com",
  databaseURL: "https://clone-16114.firebaseio.com",
  projectId: "clone-16114",
  storageBucket: "clone-16114.appspot.com",
  messagingSenderId: "218953819545",
  appId: "1:218953819545:web:fee692f3384cc74f981f08",
  measurementId: "G-4H0XS4JS74",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
