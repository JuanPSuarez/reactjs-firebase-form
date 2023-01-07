import firebase from 'firebase/compat/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB-S4NqLnHUAMXZQ1SY-HwHPlewsns-PaA",
    authDomain: "reactjs-firebase-form.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-form-default-rtdb.firebaseio.com",
    projectId: "reactjs-firebase-form",
    storageBucket: "reactjs-firebase-form.appspot.com",
    messagingSenderId: "268480114964",
    appId: "1:268480114964:web:913aaf364ad406faf65201",
    measurementId: "G-968CBENM35"
};

firebase.initializeApp(firebaseConfig);

export default firebase;