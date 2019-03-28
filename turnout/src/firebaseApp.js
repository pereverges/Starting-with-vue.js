import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBRMtmc2fnUSWEM7Pfju5DSEIKXDLHEd7k",
    authDomain: "turnout-26ae5.firebaseapp.com",
    databaseURL: "https://turnout-26ae5.firebaseio.com",
    projectId: "turnout-26ae5",
    storageBucket: "turnout-26ae5.appspot.com",
    messagingSenderId: "72767459665"
};

export const firebaseApp = firebase.initializeApp(config)
