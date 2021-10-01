import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCqTbHy7rDtb5fXpdrwR7RAIuPXHyzXl8",
  authDomain: "react2-a61a9.firebaseapp.com",
  projectId: "react2-a61a9",
  storageBucket: "react2-a61a9.appspot.com",
  messagingSenderId: "743737897716",
  appId: "1:743737897716:web:e58188dfecad3ea35c64a1",
  measurementId: "G-19MC7HGVRB"
};

 firebase.initializeApp(firebaseConfig);

 export {firebase};