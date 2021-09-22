import firebase from "firebase"
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyD8I3ca94sUHWOv1_pyFHrQK3mJftm81C0",
  authDomain: "richa-moreno.firebaseapp.com",
  projectId: "richa-moreno",
  storageBucket: "richa-moreno.appspot.com",
  messagingSenderId: "20310358794",
  appId: "1:20310358794:web:42fb67ee29916bd2f8d8f3"
}
const app= firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}
