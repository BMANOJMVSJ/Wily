import * as firebase from 'firebase'
require('@firebase/firestore')

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF6I0A1yhdg06MiQi4oxHmiyfhk5UgzPU",
  authDomain: "wily-app-9999b.firebaseapp.com",
  projectId: "wily-app-9999b",
  storageBucket: "wily-app-9999b.appspot.com",
  messagingSenderId: "326638832814",
  appId: "1:326638832814:web:72abaec91297d64c9d313f"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
