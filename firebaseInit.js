
import * as firebase from 'firebase';
import '@firebase/firestore';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcqtvi9brq8UQ2DVQLyGdCTaQDLVCM0xE",
    authDomain: "sandwich-2d6ac.firebaseapp.com",
    databaseURL: "https://sandwich-2d6ac.firebaseio.com",
    projectId: "sandwich-2d6ac",
    storageBucket: "sandwich-2d6ac.appspot.com",
    messagingSenderId: "729056691127",
    appId: "1:729056691127:web:12163f18baadc26108de32",
    measurementId: "G-37YB4GCBHD"
};

const Firebase = firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);

export default Firebase
