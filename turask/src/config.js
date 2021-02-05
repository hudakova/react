import Firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDEhbcZdR5mwQS3hlbWJV2c5DRrN48SaVI",
    authDomain: "hikerplanner.firebaseapp.com",
    databaseURL: "https://hikerplanner-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hikerplanner",
    storageBucket: "hikerplanner.appspot.com",
    messagingSenderId: "389034826502",
    appId: "1:389034826502:web:0a35e69cea71d191cddc87",
    measurementId: "G-9RFV19R63Q"
  };

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();