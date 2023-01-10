import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from 'firebase/database';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-S4NqLnHUAMXZQ1SY-HwHPlewsns-PaA",
    authDomain: "reactjs-firebase-form.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-form-default-rtdb.firebaseio.com/",
    projectId: "reactjs-firebase-form",
    storageBucket: "reactjs-firebase-form.appspot.com",
    messagingSenderId: "268480114964",
    appId: "1:268480114964:web:913aaf364ad406faf65201",
    measurementId: "G-968CBENM35"
};

const app = initializeApp(firebaseConfig);





export function writeUserData(email, fullName, dateOfBirth, country, termsOfService) {
    const db = getDatabase();
    const userId = 'user' + Math.random().toString(36).substr(2, 6);
    set(ref(db, 'userAnswersForm/' + userId), {
        email: email,
        full_name: fullName,
        date_of_birth: dateOfBirth,
        country: country,
        terms_of_service: termsOfService
    });
}




const db = getDatabase();
const answersRef = ref(db, 'userAnswersForm');
onValue(answersRef, (snapshot) => {
    const answers = snapshot.val();
    console.log(answers);
});


export const database = getDatabase(app)
export default app;