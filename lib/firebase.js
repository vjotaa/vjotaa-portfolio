import firebase from 'firebase/app'
import 'firebase/auth'
import  'firebase/firestore'
import  'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCIwP240HeuFG9DV0LKW00auQNGj8sZztk",
    authDomain: "vjotaa-portfolio.firebaseapp.com",
    projectId: "vjotaa-portfolio",
    storageBucket: "vjotaa-portfolio.appspot.com",
    messagingSenderId: "999840740080",
    appId: "1:999840740080:web:225436b10175642e798835"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
