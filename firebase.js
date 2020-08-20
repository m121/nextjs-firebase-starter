import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
// Your web app's Firebase configuration
const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXx",
    storageBucket: "XXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXX",
    appId: "1:0000000000000000000000000000"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  
 
export default firebase;