import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVNMsKrBSPS6m2XD8AhY2D428dotGdgJI",
    authDomain: "facebook-messenger-clone-fbe43.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-fbe43.firebaseio.com",
    projectId: "facebook-messenger-clone-fbe43",
    storageBucket: "facebook-messenger-clone-fbe43.appspot.com",
    messagingSenderId: "579817661620",
    appId: "1:579817661620:web:c0c1be822c32601dd063e1",
    measurementId: "G-LKE56HK8EH"
});

const db = firebaseApp.firestore();

export default db;