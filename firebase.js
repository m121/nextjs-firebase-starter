import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
// Your web app's Firebase configuration
const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXX"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  
 
export default firebase;