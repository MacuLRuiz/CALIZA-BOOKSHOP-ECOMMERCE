import firebase from "firebase";

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClaZYWHsjiP60PUNB7wJcSHEIcyfaWnJ0",
    authDomain: "caliza-libros-bbe57.firebaseapp.com",
    projectId: "caliza-libros-bbe57",
    storageBucket: "caliza-libros-bbe57.appspot.com",
    messagingSenderId: "394762745251",
    appId: "1:394762745251:web:2ff39b9d6139dcc92c1616"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore() {
      return firebase.firestore(app)
  }